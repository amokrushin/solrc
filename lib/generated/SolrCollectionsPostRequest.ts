/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 */
import type { SolrCollectionsCreateParams } from './SolrCollectionsCreateParams';
import type { SolrCollectionsCreateAliasParams } from './SolrCollectionsCreateAliasParams';
import type { SolrCollectionsDeleteAliasParams } from './SolrCollectionsDeleteAliasParams';
import type { SolrCollectionsSetAliasPropertyParams } from './SolrCollectionsSetAliasPropertyParams';
import type { SolrCollectionsBackupCollectionParams } from './SolrCollectionsBackupCollectionParams';
import type { SolrCollectionsRestoreCollectionParams } from './SolrCollectionsRestoreCollectionParams';

export interface SolrCollectionsPostRequest {
  'create'?: SolrCollectionsCreateParams;
  'create-alias'?: SolrCollectionsCreateAliasParams;
  'delete-alias'?: SolrCollectionsDeleteAliasParams;
  'set-alias-property'?: SolrCollectionsSetAliasPropertyParams;
  'backup-collection'?: SolrCollectionsBackupCollectionParams;
  'restore-collection'?: SolrCollectionsRestoreCollectionParams;
}
