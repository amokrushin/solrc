import type { SolrCollectionConfigParamsDeleteParams } from './SolrCollectionConfigParamsDeleteParams.js';
import type { SolrCollectionConfigParamsSetParams } from './SolrCollectionConfigParamsSetParams.js';
import type { SolrCollectionConfigParamsUpdateParams } from './SolrCollectionConfigParamsUpdateParams.js';

export interface SolrCollectionConfigParamsPostRequest {
  'set:'?: SolrCollectionConfigParamsSetParams;
  delete?: SolrCollectionConfigParamsDeleteParams;
  update?: SolrCollectionConfigParamsUpdateParams;
}
