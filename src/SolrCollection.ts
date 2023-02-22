import { SolrCollectionsBackupsPostRequest } from './introspected/index.js';
import { SolrCollectionsBackupsListBackupsParams } from './introspected/index.js';
import type { SolrCollectionSetCollectionPropertyParams } from './introspected/index.js';
import type { SolrCollectionDeleteReplicaPropertyParams } from './introspected/index.js';
import type { SolrCollectionRebalanceLeadersParams } from './introspected/index.js';
import type { SolrCollectionBalanceShardUniqueParams } from './introspected/index.js';
import type { SolrCollectionMoveReplicaParams } from './introspected/index.js';
import type { SolrCollectionReloadParams } from './introspected/index.js';
import type { SolrCollectionModifyParams } from './introspected/index.js';
import type { SolrCollectionDeleteRequest } from './introspected/index.js';
import type { SolrCollectionsPostRequest } from './introspected/index.js';
import type { SolrCollectionsCreateParams } from './introspected/index.js';
import type { SolrCollectionsCreateAliasParams } from './introspected/index.js';
import type { SolrCollectionsSetAliasPropertyParams } from './introspected/index.js';
import type { SolrCollectionsBackupCollectionParams } from './introspected/index.js';
import type { SolrCollectionsRestoreCollectionParams } from './introspected/index.js';
import type { SolrCollectionMigrateDocsParams } from './introspected/index.js';
import type { SolrCollectionGetResponse } from './introspected/index.js';
import { SolrCollectionsBackupsListBackupsResponse } from './introspected/SolrCollectionsBackupsListBackupsResponse.js';
import type { SolrRequestParams } from './SolrClient.js';
import type { SolrCollectionAdminPingResponse } from './SolrCollectionAdmin.js';
import { SolrCollectionAdmin } from './SolrCollectionAdmin.js';
import { SolrCollectionConfig } from './SolrCollectionConfig.js';
import { SolrCollectionDocs } from './SolrCollectionDocs.js';
import type { SolrCollections } from './SolrCollections.js';
import { SolrCollectionSchema } from './SolrCollectionSchema.js';
import type { SolrQuery } from './types/index.js';
import type { SolrResponse } from './types/index.js';
import type { SolrResponseHeader } from './types/index.js';
import type { Params } from './utils/preprocessParams.js';
import preprocessParams from './utils/preprocessParams.js';

export type SolrCollectionOptions = {
  autoCommit?: boolean;
};

export type SolrCollectionParams = {
  collections: SolrCollections;
  name: string;
  options?: SolrCollectionOptions;
};

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
  };
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
  constructor(
    collections: SolrCollections,
    name: string,
    options?: SolrCollectionOptions
  ) {
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
  async request<D = object, P = object, R = unknown>(
    params: SolrRequestParams<D, P>
  ): Promise<R> {
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
  async create(
    params?: Omit<SolrCollectionsCreateParams, 'name' | 'properties'> & {
      properties?: Params;
    }
  ) {
    const collectionCreateParams: SolrCollectionsCreateParams = {
      ...SolrCollection.defaultCollectionDef,
      name: this.name,
    };

    if (params) {
      const { properties, ...restParams } = params;
      Object.assign(collectionCreateParams, restParams);

      if (properties) {
        collectionCreateParams.properties = preprocessParams(properties);
      }
    }

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
    return await this.collections.request<
      unknown,
      unknown,
      SolrCollectionGetResponse
    >({
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
  async query<T>(query: SolrQuery, params?: any) {
    const { response, facets, ...meta } = await this.request<
      SolrQuery,
      unknown,
      SolrCollectionQueryResponse<T>
    >({
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
      meta,
    };
  }

  /**
   * Create collection alias.
   * Allows one or more collections to be known by another name (to include time partitioned collections).
   * If this command is used on an existing alias, the existing alias will be replaced with the new collection details.
   *
   * @public
   * @see https://solr.apache.org/guide/solr/latest/deployment-guide/alias-management.html#createalias
   */
  async createAlias(
    params: Omit<SolrCollectionsCreateAliasParams, 'collections'>
  ) {
    const collectionCreateParams: SolrCollectionsCreateAliasParams = {
      ...params,
      collections: [this.name],
    };

    return this.collections.request<SolrCollectionsPostRequest>({
      method: 'post',
      data: {
        'create-alias': collectionCreateParams,
      },
    });
  }

  async setAliasProperty(
    params: Omit<SolrCollectionsSetAliasPropertyParams, 'name'>
  ) {
    throw new Error('Not implemented');
  }

  async backup(
    params: Omit<SolrCollectionsBackupCollectionParams, 'collection' | 'name'>
  ) {
    return this.collections.request<SolrCollectionsPostRequest>({
      method: 'post',
      data: {
        'backup-collection': {
          ...params,
          collection: this.name,
          name: this.name,
        },
      },
    });
  }

  async restore(
    params: Omit<SolrCollectionsRestoreCollectionParams, 'collection' | 'name'>
  ) {
    return this.collections.request<SolrCollectionsPostRequest>({
      method: 'post',
      data: {
        'restore-collection': {
          ...params,
          collection: this.name,
          name: this.name,
        },
      },
    });
  }

  /**
   * Lists information about each backup stored at the specified repository location. Basic metadata is returned about each backup including: the timestamp the backup was created, the Lucene version used to create the index, and the size of the backup both in number of files and total filesize.
   *
   * The file structure used by Solr internally to represent backups changed in 8.9.0. While backups created prior to this format change can still be restored, the LISTBACKUP and DELETEBACKUP API commands are only valid on this newer format. Attempting to use them on a location holding an older backup will result in an error message.
   *
   * @see https://solr.apache.org/guide/solr/latest/deployment-guide/collection-management.html#listbackup
   *
   * @example
   * ```
   * await solr.collections.listBackups();
   * ```
   */
  async listBackups(
    params: Omit<SolrCollectionsBackupsListBackupsParams, 'name'>
  ) {
    return this.collections.request<
      SolrCollectionsBackupsPostRequest,
      unknown,
      SolrCollectionsBackupsListBackupsResponse
    >({
      method: 'post',
      endpoint: '/backups',
      apiVersion: 'v2',
      data: {
        'list-backups': {
          ...params,
          name: this.name,
        },
      },
    });
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

  async deleteReplicaProperty(
    params: SolrCollectionDeleteReplicaPropertyParams
  ) {
    throw new Error('Not implemented');
  }

  async setProperty(
    params: Omit<SolrCollectionSetCollectionPropertyParams, 'name'>
  ) {
    throw new Error('Not implemented');
  }

  /**
   * Renaming a collection sets up a standard alias that points to the underlying collection, so that the same (unmodified) collection can now be referred to in query, index and admin operations using the new name.
   *
   * This command does NOT actually rename the underlying Solr collection - it sets up a new one-to-one alias using the new name, or renames the existing alias so that it uses the new name, while still referring to the same underlying Solr collection. However, from the user’s point of view the collection can now be accessed using the new name, and the new name can be also referred to in other aliases.
   *
   * The following limitations apply:
   * - the existing name must be either a SolrCloud collection or a standard alias referring to a single collection. Aliases that refer to more than 1 collection are not supported.
   * - the existing name must not be a Routed Alias.
   * - the target name must not be an existing alias.
   *
   * @param name Target name of the collection. This will be the new alias that refers to the underlying SolrCloud collection. The original name (or alias) of the collection will be replaced also in the existing aliases so that they also refer to the new name. Target name must not be an existing alias.
   */
  async rename(name: string) {
    const body = await this.collections.request<
      unknown,
      unknown,
      SolrCollectionAdminPingResponse
    >({
      endpoint: '/admin/collections',
      params: {
        action: 'RENAME',
        name: this.name,
        target: name,
      },
      apiVersion: 'v1',
    });
    this.name = name;
    return body;
  }
}
