import type { SolrRequestParams } from './SolrClient.js';
import type { SolrConfigSets } from './SolrConfigSets.js';

/**
 * Конфигурация
 */
export class SolrConfigSet {
  /**
   * @protected
   */
  configSets: SolrConfigSets;
  /**
   * @protected
   */
  name: string;

  /**
   * @hidden
   */
  constructor(configSets: SolrConfigSets, name: string) {
    this.configSets = configSets;
    this.name = name;
  }

  /**
   * Request a `/cluster/configs/{config-set}` endpoint
   *
   * @protected
   */
  async request<D = object, P = object, R = unknown>(
    params: SolrRequestParams<D, P>
  ): Promise<R> {
    const { endpoint = '' } = params;

    return this.configSets.request({
      ...params,
      endpoint: `/${this.name}${endpoint}`,
      apiVersion: 'v2',
    });
  }

  /**
   * Delete config set
   *
   * @example
   * await solr.configSet('demo.AUTOCREATED').delete();
   */
  async delete() {
    return this.request({
      method: 'delete',
      params: {
        commit: true,
      },
    });
  }
}
