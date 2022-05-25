import type { SolrCollectionsBackupsListBackupsParams } from './SolrCollectionsBackupsListBackupsParams';
import type { SolrCollectionsBackupsDeleteBackupsParams } from './SolrCollectionsBackupsDeleteBackupsParams';

export interface SolrCollectionsBackupsPostRequest {
  'list-backups'?: SolrCollectionsBackupsListBackupsParams;
  'delete-backups'?: SolrCollectionsBackupsDeleteBackupsParams;
}
