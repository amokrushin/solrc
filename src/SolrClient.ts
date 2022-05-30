import assert from 'assert';
import got from 'got';
import { URLSearchParams } from 'url';
import { SolrCollectionNodeSystemGetRequest } from './introspected';
import { SolrCollectionNodePropertiesGetRequest } from './introspected/SolrCollectionNodePropertiesGetRequest';
import { SolrCollectionNodePropertiesGetResponse } from './introspected/SolrCollectionNodePropertiesGetResponse';
import { SolrCollectionNodeSystemGetResponse } from './introspected/SolrCollectionNodeSystemGetResponse';
import { SolrCollections } from './SolrCollections';
import { SolrConfigSets } from './SolrConfigSets';
import { SolrRequestError } from './SolrRequestError';
import { SolrResponse } from './types';
import preprocessParams from './utils/preprocessParams';

/**
 * @typeParam D SolrRequestDataType
 * @typeParam P SolrRequestParamsType
 */
export interface SolrRequestParams<D, P> {
  /**
   * Request method.
   * @default get
   */
  method?: 'get' | 'post' | 'delete';
  /**
   * API endpoint
   */
  endpoint?: string;
  /**
   * Request payload.
   */
  data?: D;
  /**
   * Request params.
   */
  params?: P;
  /**
   * API version.
   * @default v2
   */
  apiVersion?: 'v1' | 'v2';
}

export interface SolrClientParams {
  /**
   * @defaultValue http
   */
  protocol?: string;
  /**
   * @defaultValue localhost
   */
  host?: string;
  /**
   * @defaultValue 8983
   */
  port?: number;
  username?: string;
  password?: string;
}

export interface SolrRequest {
  request<D = object, P = object, R = unknown>(
    params: SolrRequestParams<D, P>
  ): Promise<R>;
}

export class SolrClient {
  /**
   * Solr collections
   * @public
   */
  collections: SolrCollections;
  /**
   * Solr config sets
   * @public
   */
  configSets: SolrConfigSets;

  /**
   * @protected
   */
  protocol: string;
  /**
   * @protected
   */
  host: string;
  /**
   * @protected
   */
  port: number;
  /**
   * @protected
   */
  baseUrl: string;
  /**
   * @private
   */
  solrRequestParams: SolrClientParams;

  /**
   * @example
   * ```js
   * const solr = new SolrClient({
   *     host: 'localhost',
   *     port: 8983
   * });
   * ```
   */
  constructor(params?: SolrClientParams) {
    const {
      protocol = 'http',
      host = 'localhost',
      port = 8983,
      username,
      password,
    } = params || {};

    this.protocol = protocol;
    assert(this.protocol, 'Invalid protocol value');

    this.host = host;
    assert(this.host, 'Invalid host value');

    this.port = port;
    assert(this.port, 'Invalid port value');

    this.baseUrl = `${protocol}://${host}:${port}`;

    this.solrRequestParams = {
      username,
      password,
    };

    this.collections = new SolrCollections(this);
    Object.defineProperty(this, 'collections', { writable: false });

    this.configSets = new SolrConfigSets(this);
    Object.defineProperty(this, 'configSets', { writable: false });
  }

  /**
   * @protected
   */
  getBaseUrl(apiVersion: 'v1' | 'v2') {
    if (apiVersion === 'v1') {
      return `${this.baseUrl}/solr`;
    }
    if (apiVersion === 'v2') {
      return `${this.baseUrl}/api`;
    }
    throw new Error('Invalid API version');
  }

  /**
   * Requests Solr API relative to root endpoint
   *
   * @typeParam D SolrRequestDataType
   * @typeParam P SolrRequestParamsType
   * @typeParam R SolrResponseType
   */
  async request<D = object, P = object, R = SolrResponse>(
    params: SolrRequestParams<D, P>
  ): Promise<R> {
    const {
      method = 'get',
      endpoint = '',
      data = {},
      apiVersion = 'v2',
      ...restParams
    } = params;

    const { username, password } = this.solrRequestParams;

    const uri = `${this.getBaseUrl(apiVersion)}${endpoint}`;

    const requestParams = new URLSearchParams(
      preprocessParams({
        ...restParams.params,
        omitHeader: false,
      })
    );

    try {
      const { body } = await got[method](`${uri}?${requestParams.toString()}`, {
        responseType: 'json',
        allowGetBody: true,
        http2: true,
        ...(data && {
          json: data,
        }),
        headers: {
          ...((username || password) && {
            Authorization:
              'Basic ' +
              Buffer.from(`${username}:${password}`).toString('base64'),
          }),
        },
      });

      return body as R;
    } catch (httpErrorResponse: any) {
      throw new SolrRequestError(httpErrorResponse, {
        method,
        endpoint,
        data,
        params,
      });
    }
  }

  async getSystemInfo() {
    return this.request<
      SolrCollectionNodeSystemGetRequest,
      unknown,
      SolrCollectionNodeSystemGetResponse
    >({
      method: 'get',
      endpoint: '/node/system',
    });
  }

  async getProperties() {
    return this.request<
      SolrCollectionNodePropertiesGetRequest,
      unknown,
      SolrCollectionNodePropertiesGetResponse
    >({
      method: 'get',
      endpoint: '/node/properties',
    });
  }
}
