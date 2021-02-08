/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 */
import type { SolrCollectionModifyParams } from './SolrCollectionModifyParams';
import type { SolrCollectionReloadParams } from './SolrCollectionReloadParams';
import type { SolrCollectionMoveReplicaParams } from './SolrCollectionMoveReplicaParams';
import type { SolrCollectionMigrateDocsParams } from './SolrCollectionMigrateDocsParams';
import type { SolrCollectionBalanceShardUniqueParams } from './SolrCollectionBalanceShardUniqueParams';
import type { SolrCollectionRebalanceLeadersParams } from './SolrCollectionRebalanceLeadersParams';
import type { SolrCollectionAddReplicaPropertyParams } from './SolrCollectionAddReplicaPropertyParams';
import type { SolrCollectionDeleteReplicaPropertyParams } from './SolrCollectionDeleteReplicaPropertyParams';
import type { SolrCollectionSetCollectionPropertyParams } from './SolrCollectionSetCollectionPropertyParams';

export interface SolrCollectionPostRequest {
  'modify'?: SolrCollectionModifyParams;
  'reload'?: SolrCollectionReloadParams;
  'move-replica'?: SolrCollectionMoveReplicaParams;
  'migrate-docs'?: SolrCollectionMigrateDocsParams;
  'balance-shard-unique'?: SolrCollectionBalanceShardUniqueParams;
  'rebalance-leaders'?: SolrCollectionRebalanceLeadersParams;
  'add-replica-property'?: SolrCollectionAddReplicaPropertyParams;
  'delete-replica-property'?: SolrCollectionDeleteReplicaPropertyParams;
  'set-collection-property'?: SolrCollectionSetCollectionPropertyParams;
}
