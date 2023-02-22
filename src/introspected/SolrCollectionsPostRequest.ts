import type { SolrCollectionsBackupCollectionParams } from './SolrCollectionsBackupCollectionParams.js';
import type { SolrCollectionsCreateAliasParams } from './SolrCollectionsCreateAliasParams.js';
import type { SolrCollectionsCreateParams } from './SolrCollectionsCreateParams.js';
import type { SolrCollectionsDeleteAliasParams } from './SolrCollectionsDeleteAliasParams.js';
import type { SolrCollectionsRestoreCollectionParams } from './SolrCollectionsRestoreCollectionParams.js';
import type { SolrCollectionsSetAliasPropertyParams } from './SolrCollectionsSetAliasPropertyParams.js';

export interface SolrCollectionsPostRequest {
  create?: SolrCollectionsCreateParams;
  'create-alias'?: SolrCollectionsCreateAliasParams;
  'delete-alias'?: SolrCollectionsDeleteAliasParams;
  'set-alias-property'?: SolrCollectionsSetAliasPropertyParams;
  'backup-collection'?: SolrCollectionsBackupCollectionParams;
  'restore-collection'?: SolrCollectionsRestoreCollectionParams;
}
