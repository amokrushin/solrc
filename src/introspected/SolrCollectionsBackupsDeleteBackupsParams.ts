/*
 * Introspected endpoint: /collections/backups
 * Command: delete-backups
 */

/**
 * @version Solr 9.x
 */
export interface SolrCollectionsBackupsDeleteBackupsParams {
  async?: string;
  maxNumBackupPoints?: number;
  purgeUnused?: boolean;
  backupId?: number;
  name: string;
  location?: string;
  repository?: string;

  [k: string]: unknown;
}
