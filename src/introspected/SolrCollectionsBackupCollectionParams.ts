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
   * Controls whether aliases are resolved when trying to back up the specified collection, or whether Solr should only backup the provided collection name if it matches a concrete collection.
   * @version Solr 8.x, Solr 9.x
   */
  followAliases?: boolean;
  /**
   * An internal property that controls whether the backup should use the standard 'incremental' file format or the deprecated 'full-snapshot' based format.
   * @version Solr 8.x, Solr 9.x
   */
  incremental?: boolean;
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
   * The name of a repository to be used for the backup. If no repository is specified then the local filesystem repository will be used automatically.
   * @version Solr 9.x
   */
  repository?: string;
  /**
   * @version Solr 9.x
   */
  commitName?: string;
}
