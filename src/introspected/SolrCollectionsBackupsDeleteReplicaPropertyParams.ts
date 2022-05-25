/*
 * Introspected endpoint: /collections/backups
 * Command: delete-replica-property
 */

/**
 * Deletes an arbitrary property from a particular replica
 * @version Solr 8.x
 */
export interface SolrCollectionsBackupsDeleteReplicaPropertyParams {
  /**
   * The name of the shard the replica belongs to.
   */
  shard: string;
  /**
   * The name of the replica.
   */
  replica: string;
  /**
   * The name of the property to remove.
   */
  property: string;
  [k: string]: unknown;
}
