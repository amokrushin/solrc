import type { SolrCollectionAddReplicaPropertyParams } from './SolrCollectionAddReplicaPropertyParams.js';
import type { SolrCollectionBalanceShardUniqueParams } from './SolrCollectionBalanceShardUniqueParams.js';
import type { SolrCollectionDeleteReplicaPropertyParams } from './SolrCollectionDeleteReplicaPropertyParams.js';
import type { SolrCollectionMigrateDocsParams } from './SolrCollectionMigrateDocsParams.js';
import type { SolrCollectionModifyParams } from './SolrCollectionModifyParams.js';
import type { SolrCollectionMoveReplicaParams } from './SolrCollectionMoveReplicaParams.js';
import type { SolrCollectionRebalanceLeadersParams } from './SolrCollectionRebalanceLeadersParams.js';
import type { SolrCollectionReloadParams } from './SolrCollectionReloadParams.js';
import type { SolrCollectionSetCollectionPropertyParams } from './SolrCollectionSetCollectionPropertyParams.js';

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
