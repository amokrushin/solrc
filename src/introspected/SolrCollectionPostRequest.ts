import type { SolrCollectionAddReplicaPropertyParams } from './SolrCollectionAddReplicaPropertyParams';
import type { SolrCollectionBalanceShardUniqueParams } from './SolrCollectionBalanceShardUniqueParams';
import type { SolrCollectionDeleteReplicaPropertyParams } from './SolrCollectionDeleteReplicaPropertyParams';
import type { SolrCollectionMigrateDocsParams } from './SolrCollectionMigrateDocsParams';
import type { SolrCollectionModifyParams } from './SolrCollectionModifyParams';
import type { SolrCollectionMoveReplicaParams } from './SolrCollectionMoveReplicaParams';
import type { SolrCollectionRebalanceLeadersParams } from './SolrCollectionRebalanceLeadersParams';
import type { SolrCollectionReloadParams } from './SolrCollectionReloadParams';
import type { SolrCollectionSetCollectionPropertyParams } from './SolrCollectionSetCollectionPropertyParams';

export interface SolrCollectionPostRequest {
  modify?: SolrCollectionModifyParams;
  reload?: SolrCollectionReloadParams;
  'move-replica'?: SolrCollectionMoveReplicaParams;
  'migrate-docs'?: SolrCollectionMigrateDocsParams;
  'balance-shard-unique'?: SolrCollectionBalanceShardUniqueParams;
  'rebalance-leaders'?: SolrCollectionRebalanceLeadersParams;
  'add-replica-property'?: SolrCollectionAddReplicaPropertyParams;
  'delete-replica-property'?: SolrCollectionDeleteReplicaPropertyParams;
  'set-collection-property'?: SolrCollectionSetCollectionPropertyParams;
}
