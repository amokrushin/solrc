import { SolrActionErrorResponse } from './types/SolrActionErrorResponse.js';

type ResponseBody = SolrActionErrorResponse & { message?: string };

export interface SolrHttpResponseError extends Error {
  response?: {
    body: ResponseBody;
  };
}

export class SolrRequestError extends Error {
  request?: unknown;
  response?: ResponseBody;

  /**
   * @param {*} httpResponseError
   * @param {*} request
   * @hideconstructor
   */
  constructor(httpResponseError: SolrHttpResponseError, request: unknown) {
    if (httpResponseError) {
      if (httpResponseError.response) {
        const responseBody = httpResponseError.response.body as ResponseBody;
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
      } else {
        super(httpResponseError.message);
      }
    } else {
      super('Unknown SOLR request error');
    }
    if (request) {
      this.request = request;
    }
    this.name = 'SolrRequestError';
  }
}
