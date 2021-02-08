/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 *
 * Introspected endpoint: /collections
 * Command: restore-collection
 */

/**
 * Restore Solr indexes and configurations from a backup. You cannot restore into the same collection you took the backup from. The target collection must not exist before calling this command, as it will be created by the restore action. The new collection will have the same number of shards and replicas as the original collection, and all routing strategies will be retained.
 */
export interface SolrCollectionsRestoreCollectionParams {
  /**
   * The name of the collection the backup will be restored to. This collection must not exist prior to this
   */
  collection: string;
  /**
   * The name of the backup file.
   */
  name: string;
  /**
   * The location on the shared drive for the restore-collection command to read from. Alternately, it can be set as a cluster property with the cluster endpoint, which also supports setting a location.
   */
  location: string;
  /**
   * Defines a request ID that can be used to track this action after it's submitted. The action will be processed asynchronously.
   */
  async?: string;
  [k: string]: unknown;
}
