import get                                                from 'lodash/get';
import { SolrCollectionDeleteRequest }                    from './generated';
import { SolrCollectionsPostRequest }                     from './generated';
import type { SolrCollectionsCreateParams }               from './generated';
import type { SolrCollectionsCreateAliasParams }          from './generated';
import type { SolrCollectionsDeleteAliasParams }          from './generated';
import type { SolrCollectionsSetAliasPropertyParams }     from './generated';
import type { SolrCollectionsBackupCollectionParams }     from './generated';
import type { SolrCollectionsRestoreCollectionParams }    from './generated';
import type { SolrCollectionModifyParams }                from './generated';
import type { SolrCollectionReloadParams }                from './generated';
import type { SolrCollectionMoveReplicaParams }           from './generated';
import type { SolrCollectionMigrateDocsParams }           from './generated';
import type { SolrCollectionBalanceShardUniqueParams }    from './generated';
import type { SolrCollectionRebalanceLeadersParams }      from './generated';
import type { SolrCollectionDeleteReplicaPropertyParams } from './generated';
import type { SolrCollectionSetCollectionPropertyParams } from './generated';
import { SolrRequestParams }                              from './SolrClient';
import { SolrCollectionAdmin }                            from './SolrCollectionAdmin';
import { SolrCollectionConfig }                           from './SolrCollectionConfig';
import { SolrCollectionDocs }                             from './SolrCollectionDocs';
import type { SolrCollections }                           from './SolrCollections';
import { SolrCollectionSchema }                           from './SolrCollectionSchema';
import type { SolrQuery }                                 from './types';
import { SolrResponse }                                   from './types';
import { SolrResponseHeader }                             from './types';
import { SolrCollectionGetResponse }                      from './types/SolrCollectionGetResponse';


export type SolrCollectionOptions = {
    autoCommit?: boolean
}

export type SolrCollectionParams = {
    collections: SolrCollections
    name: string
    options?: SolrCollectionOptions
}

export interface SolrCollectionQueryResponse<T> extends SolrResponse {
    responseHeader: SolrResponseHeader & {
        zkConnected?: boolean;
        params?: {
            json: string;
        };
    };
    response: {
        numFound: number;
        start: number;
        numFoundExact: boolean;
        docs: T[];
    };
    facets: {
        [key: string]: unknown;
    }
}

/**
 * A collection is a single logical index that uses a single Solr configuration file and a single index schema.
 *
 * @see {@link http://localhost:8983/api/collections/_introspect}
 */
export class SolrCollection {
    /**
     * @protected
     */
    static defaultCollectionDef: Omit<SolrCollectionsCreateParams, 'name'> = {
        numShards: 1,
    };
    /**
     * @public
     */
    admin: SolrCollectionAdmin;
    /**
     * @public
     */
    config: SolrCollectionConfig;
    /**
     * @public
     */
    schema: SolrCollectionSchema;
    /**
     * @public
     */
    docs: SolrCollectionDocs;
    /**
     * @protected
     */
    collections: SolrCollections;
    /**
     * @protected
     */
    name: string;
    /**
     * @protected
     */
    options: SolrCollectionOptions;

    /**
     * @hidden
     */
    constructor(collections: SolrCollections, name: string, options?: SolrCollectionOptions) {
        this.collections = collections;
        this.name = name;
        this.options = {
            autoCommit: true,
            ...options,
        };
        this.admin = new SolrCollectionAdmin(this);
        this.config = new SolrCollectionConfig(this);
        this.schema = new SolrCollectionSchema(this);
        this.docs = new SolrCollectionDocs(this);
    }

    /**
     * Request a `/collections/{collection}` endpoint
     *
     * @protected
     */
    async request<D = object, P = object, R = unknown>(params: SolrRequestParams<D, P>): Promise<R> {
        const { endpoint = '' } = params;

        return this.collections.request({
            ...params,
            endpoint: `/${this.name}${endpoint}`,
        });
    }

    /**
     * Create a collection.
     *
     * @example
     * await solr.collections.get('demo').create();
     * @see {@link https://lucene.apache.org/solr/guide/collection-management.html#create}
     * @public
     */
    async create(params?: Omit<SolrCollectionsCreateParams, 'name'>) {
        const collectionCreateParams: SolrCollectionsCreateParams = {
            ...SolrCollection.defaultCollectionDef,
            ...params,
            name: this.name,
        };

        await this.collections.request<SolrCollectionsPostRequest>({
            method: 'post',
            data: {
                create: collectionCreateParams,
            },
        });
    }

    /**
     * Read collection info with details on shards and replicas.
     * @public
     */
    async read() {
        return await this.collections.request<unknown, unknown, SolrCollectionGetResponse>({
            method: 'get',
            endpoint: `/${this.name}`,
        });
    }

    /**
     * Delete a collection.
     *
     * @example
     * await solr.collections.get('test').delete();
     * @see {@link https://lucene.apache.org/solr/guide/collection-management.html#delete}
     * @public
     */
    async delete() {
        await this.request<SolrCollectionDeleteRequest>({
            method: 'delete',
        });
    }

    /**
     * Commit changes.
     *
     * @example
     * await solr.collections.get('test').commit();
     * @public
     */
    async commit() {
        await this.request({
            method: 'post',
            endpoint: '/update',
            data: null,
            params: {
                commit: true,
            },
        });
    }

    /**
     * Query collection
     * @public
     */
    async query<T>(query: SolrQuery, params?) {
        const { response, facets } = await this.request<SolrQuery, unknown, SolrCollectionQueryResponse<T>>({
            method: 'get',
            endpoint: '/query',
            data: query,
            params: {
                commit: this.options.autoCommit,
                ...params,
            },
        });

        return {
            ...response,
            facets,
        };
    }

    /**
     * Create collection alias.
     * Allows one or more collections to be known by another name (to include time partitioned collections).
     * If this command is used on an existing alias, the existing alias will be replaced with the new collection details.
     *
     * @see {@link https://lucene.apache.org/solr/guide/collection-aliasing.html#createalias}
     * @public
     */
    async createAlias(params: SolrCollectionsCreateAliasParams) {
        const collectionCreateParams: SolrCollectionsCreateAliasParams = {
            collections: [this.name],
            ...params,
        };

        return this.collections.request<SolrCollectionsPostRequest>({
            method: 'post',
            data: {
                'create-alias': collectionCreateParams,
            },
        });
    }

    /**
     * Delete a collection alias.
     *
     * @see {@link https://lucene.apache.org/solr/guide/collection-aliasing.html#deletealias}
     * @public
     */
    async deleteAlias(params: SolrCollectionsDeleteAliasParams) {
        return this.collections.request<SolrCollectionsPostRequest>({
            method: 'post',
            data: {
                'delete-alias': {
                    name: params.name,
                    async: params.async,
                },
            },
        });
    }

    async setAliasProperty(params: Omit<SolrCollectionsSetAliasPropertyParams, 'name'>) {
        throw new Error('Not implemented');
    }

    async backup(params: Omit<SolrCollectionsBackupCollectionParams, 'name'>) {
        throw new Error('Not implemented');
    }

    async restore(params: Omit<SolrCollectionsRestoreCollectionParams, 'name'>) {
        throw new Error('Not implemented');
    }

    async modify(params: SolrCollectionModifyParams) {
        throw new Error('Not implemented');
    }

    async reload(params: SolrCollectionReloadParams) {
        throw new Error('Not implemented');
    }

    async moveReplica(params: SolrCollectionMoveReplicaParams) {
        throw new Error('Not implemented');
    }

    async migrateDocs(params: SolrCollectionMigrateDocsParams) {
        throw new Error('Not implemented');
    }

    async balanceShardUnique(params: SolrCollectionBalanceShardUniqueParams) {
        throw new Error('Not implemented');
    }

    async rebalanceLeaders(params: SolrCollectionRebalanceLeadersParams) {
        throw new Error('Not implemented');
    }

    async deleteReplicaProperty(params: SolrCollectionDeleteReplicaPropertyParams) {
        throw new Error('Not implemented');
    }

    async setProperty(params: Omit<SolrCollectionSetCollectionPropertyParams, 'name'>) {
        throw new Error('Not implemented');
    }
}
