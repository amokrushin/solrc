/*
 * Introspected endpoint: /collections
 * Command: backup-collection
 */

/**
 * Backup Solr indexes and configurations for a specific collection. One copy of the indexes will be taken from each shard, and the config set for the collection will also be copied.
 */
export interface SolrCollectionsBackupCollectionParams {
  /**
   * The name of the collection to back up.
   * @version Solr 8.x, 9.x
   */
  collection: string;
  /**
   * The name of the backup.
   * @version Solr 8.x, 9.x
   */
  name: string;
  /**
   * A location on a shared drive for the backup-collection command to write to. Alternately, it can be set as a cluster property with the cluster endpoint, which also supports setting a location.
   * @version Solr 8.x, 9.x
   */
  location?: string;
  /**
   * Defines a request ID that can be used to track this action after it's submitted. The action will be processed asynchronously.
   * @version Solr 8.x, 9.x
   */
  async?: string;
  /**
   * @version Solr 9.x
   */
  indexBackup?: string;
  /**
   * A boolean parameter allowing users to choose whether to create an incremental (incremental=true) or a "snapshot" (incremental=false) backup. If unspecified, backups are done incrementally by default. Incremental backups are preferred in all known circumstances and snapshot backups are deprecated, so this parameter should only be used after much consideration.
   * @version Solr 9.x
   */
  incremental?: boolean;
  /**
   * The name of a repository to be used for the backup. If no repository is specified then the local filesystem repository will be used automatically.
   * @version Solr 9.x
   */
  repository?: string;
  /**
   * @version Solr 9.x
   */
  commitName?: string;
  /**
   * @version Solr 9.x
   */
  followAliases?: boolean;
}
