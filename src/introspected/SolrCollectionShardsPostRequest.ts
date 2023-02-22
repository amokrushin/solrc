import type { SolrCollectionShardsAddReplicaParams } from './SolrCollectionShardsAddReplicaParams.js';
import type { SolrCollectionShardsCreateParams } from './SolrCollectionShardsCreateParams.js';
import type { SolrCollectionShardsSplitParams } from './SolrCollectionShardsSplitParams.js';

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
