/*
 * Introspected endpoint: /collections/backups/shards/{shard}
 * Command: force-leader
 */

/**
 * In the unlikely event of a shard losing its leader, this command can be invoked to force the election of a new leader
 * @version Solr 8.x
 */
export interface SolrCollectionsBackupsShardForceLeaderParams {
  [k: string]: unknown;
}
