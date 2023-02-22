import type { SolrClient } from './SolrClient.js';
import type { SolrRequestParams } from './SolrClient.js';
import { SolrConfigSet } from './SolrConfigSet.js';
import type { SolrResponse } from './types/index.js';
import type { SolrCopyFieldDefinition } from './types/index.js';

export interface SolrConfigSetsResponse extends SolrResponse {
  configSets: SolrCopyFieldDefinition[];
}

export class SolrConfigSets {
  /**
   * @protected
   */
  client: SolrClient;

  /**
   * @hidden
   */
  constructor(client: SolrClient) {
    /**
     * @type {SolrClient}
     * @private
     */
    this.client = client;
  }

  /**
   * Request a `/cluster/configs` endpoint
   *
   * @protected
   */
  async request<D = object, P = object, R = unknown>(
    params: SolrRequestParams<D, P>
  ): Promise<R> {
    const { endpoint = '', apiVersion = 'v2' } = params;

    return this.client.request({
      ...params,
      endpoint:
        apiVersion === 'v2'
          ? `/cluster/configs${endpoint}`
          : `/admin/configs${endpoint}`,
    });
  }

  /**
   * List config sets names
   *
   * @example
   * await solr.configSets.list();
   */
  async listNames() {
    const { configSets } = await this.request<
      unknown,
      unknown,
      SolrConfigSetsResponse
    >({});
    return configSets;
  }

  /**
   * Access config set by name
   *
   * @example
   * solr.configSets.get('demo.AUTOCREATED');
   */
  get(name: string) {
    return new SolrConfigSet(this, name);
  }
}
