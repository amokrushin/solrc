import { SolrCollectionConfigOverlayGetResponse } from './introspected';
import type { SolrCollectionConfigGetResponse } from './introspected';
import type { SolrCollection } from './SolrCollection';
import preprocessParams from './utils/preprocessParams';

export const enum SolrUserPropertyNames {
  'update.autoCreateFields' = 'update.autoCreateFields',
}

export interface SolrUserProperties {
  [k: string]: string;
}

/**
 * The Config API enables manipulating various aspects of your solrconfig.xml using REST-like API calls. All properties
 * set with this API update a file called configoverlay.json, but not the solrconfig.xml file itself.
 */
export class SolrCollectionConfig {
  /**
   * @protected
   */
  collection: SolrCollection;

  /**
   * @hidden
   */
  constructor(collection: SolrCollection) {
    this.collection = collection;
  }

  /**
   * Gets the Solr configuration for a collection.
   * @returns {Promise<*>}
   */
  async getAll() {
    return this.collection.request<
      unknown,
      unknown,
      SolrCollectionConfigGetResponse
    >({
      endpoint: '/config',
    });
  }

  /**
   * Set user-defined properties
   * @see https://solr.apache.org/guide/solr/latest/configuration-guide/config-api.html#creating-and-updating-user-defined-properties
   *
   * @example
   * await collection.config.setUserProperty({
   *     'update.autoCreateFields': false
   * });
   */
  async setUserProperties(userProperties: SolrUserProperties) {
    await this.collection.request({
      method: 'post',
      endpoint: '/config',
      data: {
        'set-user-property': preprocessParams(userProperties),
      },
    });
  }

  /**
   * Set collection user defined property
   * @see https://solr.apache.org/guide/solr/latest/configuration-guide/config-api.html#creating-and-updating-user-defined-properties
   *
   * @example
   * await collection.config.setUserProperty('update.autoCreateFields', false);
   */
  async setUserProperty(name: SolrUserPropertyNames | string, value: any) {
    await this.setUserProperties({
      [name]: value,
    });
  }

  /**
   * Remove a user-defined properties
   * @see https://solr.apache.org/guide/solr/latest/configuration-guide/config-api.html#creating-and-updating-user-defined-properties
   *
   * @example
   * await collection.config.unsetUserProperties({
   *     'update.autoCreateFields': false
   * });
   */
  async unsetUserProperty(name: SolrUserPropertyNames | string) {
    await this.collection.request({
      method: 'post',
      endpoint: '/config',
      data: {
        'unset-user-property': name,
      },
    });
  }

  /**
   * Get collection user defined properties
   * @returns {Promise<*>}
   */
  async getUserProperties() {
    const body = await this.collection.request<
      unknown,
      unknown,
      SolrCollectionConfigOverlayGetResponse
    >({
      endpoint: '/config/overlay',
    });

    return body.overlay.userProps;
  }

  /**
   * Get collection user defined property
   * @returns {Promise<*>}
   */
  async getUserProperty(name: string) {
    const userProps = await this.getUserProperties();
    return userProps[name];
  }

  /**
   *
   */
  async setProperty() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async unsetProperty() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async addRequestHandler() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async updateRequestHandler() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async deleteRequestHandler() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async addSearchComponent() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async updateSearchComponent() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async deleteSearchComponent() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async addInitParams() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async updateInitParams() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async deleteInitParams() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async addQueryResponseWriter() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async updateQueryResponseWriter() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async deleteQueryResponseWriter() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async addQueryParser() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async updateQueryParser() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async deleteQueryParser() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async addValueSourceParser() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async updateValueSourceParser() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async deleteValueSourceParser() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async addTransformer() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async updateTransformer() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async deleteTransformer() {
    throw new Error('Not implemented');
  }

  /**
   * Create updateProcessor entry
   * @see {@link https://lucene.apache.org/solr/guide/config-api.html#what-about-updaterequestprocessorchain}
   */
  async addUpdateProcessor() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async updateUpdateProcessor() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async deleteUpdateProcessor() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async addQueryConverter() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async updateQueryConverter() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async deleteQueryConverter() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async addListener() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async updateListener() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async deleteListener() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async addRuntimeLib() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async updateRuntimeLib() {
    throw new Error('Not implemented');
  }

  /**
   *
   */
  async deleteRuntimeLib() {
    throw new Error('Not implemented');
  }
}
