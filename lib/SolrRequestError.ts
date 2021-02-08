import { SolrActionErrorResponse } from './types/SolrActionErrorResponse';

type ResponseBody = SolrActionErrorResponse & { message?: string }

export class SolrRequestError extends Error {
    request?: unknown;
    response?: ResponseBody;

    /**
     * @param {*} httpErrorResponse
     * @param {*} request
     * @hideconstructor
     */
    constructor(httpErrorResponse, request) {
        if (httpErrorResponse.response) {
            const responseBody = httpErrorResponse.response.body as ResponseBody;
            if (responseBody?.exception?.msg) {
                super(responseBody?.exception?.msg);
            } else if (responseBody?.error?.msg) {
                if (responseBody?.error?.details?.[0]?.errorMessages?.[0]) {
                    super(responseBody?.error?.details?.[0]?.errorMessages?.[0]);
                } else {
                    super(responseBody?.error?.msg);
                }
            } else if (responseBody?.message) {
                super(responseBody?.message);
            } else {
                super('Unknown SOLR request error');
            }
            if (responseBody) {
                this.response = responseBody;
            }
        } else if (httpErrorResponse) {
            super(httpErrorResponse.message);
        } else {
            super('Unknown SOLR request error');
        }
        if (request) {
            this.request = request;
        }
        this.name = 'SolrRequestError';
    }
}
