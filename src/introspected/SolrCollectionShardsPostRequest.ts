import type { SolrCollectionShardsAddReplicaParams } from './SolrCollectionShardsAddReplicaParams';
import type { SolrCollectionShardsCreateParams } from './SolrCollectionShardsCreateParams';
import type { SolrCollectionShardsSplitParams } from './SolrCollectionShardsSplitParams';

export interface SolrCollectionShardsPostRequest {
  /**
   * Solr 8.x
   */
  split?: SolrCollectionShardsSplitParams;
  /**
   * Solr 8.x
   */
  create?: SolrCollectionShardsCreateParams;
  /**
   * Solr 8.x, 9.x
   */
  'add-replica'?: SolrCollectionShardsAddReplicaParams;
}
