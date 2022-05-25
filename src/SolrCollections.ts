import assert from 'assert';
import { SolrCollectionsDeleteAliasParams } from './introspected';
import { SolrCollectionsPostRequest } from './introspected';
import { SolrCollectionsCreateAliasParams } from './introspected';
import { SolrClient } from './SolrClient';
import { SolrRequestParams } from './SolrClient';
import { SolrCollection } from './SolrCollection';
import type { SolrCollectionOptions } from './SolrCollection';
import type { SolrResponseHeader } from './types';

export interface SolrCollectionsListNamesResponse {
  responseHeader: SolrResponseHeader;
  collections: string[];
}

export interface SolrCollectionsListAliasesResponse {
  responseHeader: SolrResponseHeader;
  aliases: {
    [k: string]: string;
  };
  properties: {
    [k: string]: {
      [k: string]: string;
    };
  };
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
  constructor(client: SolrClient) {
    this.client = client;
    assert(this.client, 'Invalid "client" argument value');
  }

  /**
   * Request a `/collections` endpoint
   *
   * @protected
   */
  async request<D = object, P = object, R = unknown>(
    params: SolrRequestParams<D, P>
  ): Promise<R> {
    const { endpoint = '', apiVersion = 'v2' } = params;

    return this.client.request({
      ...params,
      endpoint: apiVersion === 'v2' ? `/collections${endpoint}` : endpoint,
    });
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

  /**
   * List collections names
   *
   * @see {@link https://lucene.apache.org/solr/guide/collection-management.html#list}
   *
   * @example
   * ```
   * await solr.collections.listNames();
   * ```
   */
  async listNames() {
    const { collections } = await this.client.request<
      unknown,
      unknown,
      SolrCollectionsListNamesResponse
    >({
      method: 'get',
      endpoint: '/admin/collections',
      params: { action: 'LIST' },
      apiVersion: 'v1',
    });

    return collections;
  }

  /**
   * List of all aliases in the cluster
   * @public
   * @see https://solr.apache.org/guide/solr/latest/deployment-guide/alias-management.html#listaliases
   *
   * @example
   * ```
   * await solr.collections.listAliases();
   * ```
   */
  async listAliases() {
    const body = await this.client.request<
      unknown,
      unknown,
      SolrCollectionsListAliasesResponse
    >({
      method: 'get',
      endpoint: '/cluster/aliases',
      apiVersion: 'v2',
    });

    return Object.entries(body.aliases).map(([name, collection]) => ({
      name,
      collection,
      properties: body.properties[name] || {},
    }));
  }

  /**
   * Create collection alias.
   * Allows one or more collections to be known by another name (to include time partitioned collections).
   * If this command is used on an existing alias, the existing alias will be replaced with the new collection details.
   *
   * @public
   * @see https://solr.apache.org/guide/solr/latest/deployment-guide/alias-management.html#createalias
   */
  async createAlias(params: SolrCollectionsCreateAliasParams) {
    return this.request<SolrCollectionsPostRequest>({
      method: 'post',
      data: {
        'create-alias': params,
      },
    });
  }

  /**
   * Delete a collection alias.
   *
   * @public
   * @see https://solr.apache.org/guide/solr/latest/deployment-guide/alias-management.html#deletealias
   */
  async deleteAlias(params: SolrCollectionsDeleteAliasParams) {
    return this.request<SolrCollectionsPostRequest>({
      method: 'post',
      data: {
        'delete-alias': {
          name: params.name,
          async: params.async,
        },
      },
    });
  }
}
