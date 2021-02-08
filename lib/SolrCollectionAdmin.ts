import toUpper            from 'lodash/toUpper';
import { SolrCollection } from './SolrCollection';


export interface SolrCollectionAdminPingResponse {
    status: string
}

export class SolrCollectionAdmin {
    /**
     * @protected
     */
    collection: SolrCollection;

    /**
     * @hidden
     */
    constructor(collection) {
        this.collection = collection;
    }

    /**
     * Ping collection
     *
     * @example
     * await collection.admin.ping();
     */
    async ping() {
        const body = await this.collection.request<unknown, unknown, SolrCollectionAdminPingResponse>({
            endpoint: '/admin/ping',
            apiVersion: 'v1',
        });
        if (toUpper(body.status) !== 'OK') {
            throw new Error('Solr not responded to ping');
        }
        return body;
    }
}
