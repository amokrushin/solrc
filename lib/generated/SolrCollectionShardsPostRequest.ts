/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 */
import type { SolrCollectionShardsSplitParams } from './SolrCollectionShardsSplitParams';
import type { SolrCollectionShardsCreateParams } from './SolrCollectionShardsCreateParams';
import type { SolrCollectionShardsAddReplicaParams } from './SolrCollectionShardsAddReplicaParams';

export interface SolrCollectionShardsPostRequest {
  'split'?: SolrCollectionShardsSplitParams;
  'create'?: SolrCollectionShardsCreateParams;
  'add-replica'?: SolrCollectionShardsAddReplicaParams;
}
