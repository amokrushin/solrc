import type { SolrCollectionShardForceLeaderParams } from './SolrCollectionShardForceLeaderParams.js';

/**
 * @version Solr 9.x
 */
export interface SolrCollectionShardPostRequest {
  'force-leader'?: SolrCollectionShardForceLeaderParams;
}
