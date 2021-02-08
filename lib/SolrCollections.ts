import assert                         from 'assert';
import { SolrClient }                 from './SolrClient';
import { SolrRequestParams }          from './SolrClient';
import { SolrCollection }             from './SolrCollection';
import type { SolrCollectionOptions } from './SolrCollection';
import type { SolrResponseHeader }    from './types';


export interface SolrCollectionsListNamesResponse {
    responseHeader: SolrResponseHeader;
    collections: string[];
}

/**
 * @see {@link http://localhost:8983/api/collections/_introspect}
 */
export class SolrCollections {
    /**
     * @protected
     */
    client: SolrClient;

    /**
     * @hidden
     */
    constructor(client) {
        this.client = client;
        assert(this.client, 'Invalid "client" argument value');
    }

    /**
     * Request a `/collections` endpoint
     *
     * @protected
     */
    async request<D = object, P = object, R = unknown>(params: SolrRequestParams<D, P>): Promise<R> {
        const { endpoint = '', apiVersion = 'v2' } = params;

        return this.client.request({
            ...params,
            endpoint: apiVersion === 'v2' ? `/collections${endpoint}` : endpoint,
        });
    }

    /**
     * List collections names
     *
     * @see {@link https://lucene.apache.org/solr/guide/collection-management.html#list}
     *
     * @example
     * ```js
     * await solr.collections.listNames();
     * ```
     */
    async listNames() {
        const { collections } = await this.client.request<unknown, unknown, SolrCollectionsListNamesResponse>({
            method: 'get',
            endpoint: '/admin/collections',
            params: { action: 'LIST' },
            apiVersion: 'v1',
        });

        return collections;
    }

    /**
     * Access a collection by name
     *
     * @param name - Collection name
     * @param options - Collection options
     *
     * @example
     * const collection = await solr.collections.get('demo');
     */
    get(name: string, options?: SolrCollectionOptions) {
        return new SolrCollection(this, name, options);
    }
}
