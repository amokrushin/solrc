import type { SolrCollectionsBackupCollectionParams } from './SolrCollectionsBackupCollectionParams';
import type { SolrCollectionsCreateAliasParams } from './SolrCollectionsCreateAliasParams';
import type { SolrCollectionsCreateParams } from './SolrCollectionsCreateParams';
import type { SolrCollectionsDeleteAliasParams } from './SolrCollectionsDeleteAliasParams';
import type { SolrCollectionsRestoreCollectionParams } from './SolrCollectionsRestoreCollectionParams';
import type { SolrCollectionsSetAliasPropertyParams } from './SolrCollectionsSetAliasPropertyParams';

export interface SolrCollectionsPostRequest {
  create?: SolrCollectionsCreateParams;
  'create-alias'?: SolrCollectionsCreateAliasParams;
  'delete-alias'?: SolrCollectionsDeleteAliasParams;
  'set-alias-property'?: SolrCollectionsSetAliasPropertyParams;
  'backup-collection'?: SolrCollectionsBackupCollectionParams;
  'restore-collection'?: SolrCollectionsRestoreCollectionParams;
}
