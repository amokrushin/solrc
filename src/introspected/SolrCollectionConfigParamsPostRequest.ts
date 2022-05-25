import type { SolrCollectionConfigParamsDeleteParams } from './SolrCollectionConfigParamsDeleteParams';
import type { SolrCollectionConfigParamsSetParams } from './SolrCollectionConfigParamsSetParams';
import type { SolrCollectionConfigParamsUpdateParams } from './SolrCollectionConfigParamsUpdateParams';

export interface SolrCollectionConfigParamsPostRequest {
  'set:'?: SolrCollectionConfigParamsSetParams;
  delete?: SolrCollectionConfigParamsDeleteParams;
  update?: SolrCollectionConfigParamsUpdateParams;
}
