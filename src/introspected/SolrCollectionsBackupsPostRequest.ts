import type { SolrCollectionsBackupsListBackupsParams } from './SolrCollectionsBackupsListBackupsParams';
import type { SolrCollectionsBackupsDeleteBackupsParams } from './SolrCollectionsBackupsDeleteBackupsParams';

export interface SolrCollectionsBackupsPostRequest {
  /**
   * Lists information about each backup stored at the specified repository location. Basic metadata is returned about each backup including: the timestamp the backup was created, the Lucene version used to create the index, and the size of the backup both in number of files and total filesize.
   *
   * @see https://solr.apache.org/guide/solr/latest/deployment-guide/collection-management.html#listbackup
   */
  'list-backups'?: SolrCollectionsBackupsListBackupsParams;
  'delete-backups'?: SolrCollectionsBackupsDeleteBackupsParams;
}
