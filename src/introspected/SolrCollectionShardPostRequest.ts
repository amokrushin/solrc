import type { SolrCollectionShardForceLeaderParams } from './SolrCollectionShardForceLeaderParams';

/**
 * @version Solr 9.x
 */
export interface SolrCollectionShardPostRequest {
  'force-leader'?: SolrCollectionShardForceLeaderParams;
}
