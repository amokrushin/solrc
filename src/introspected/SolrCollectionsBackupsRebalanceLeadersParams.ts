/*
 * Introspected endpoint: /collections/backups
 * Command: rebalance-leaders
 */

/**
 * Reassign leaders in a collection according to the preferredLeader property across active nodes. This command should be run after the preferredLeader property has been set with the balance-shards or add-replica-property commands.
 * @version Solr 8.x
 */
export interface SolrCollectionsBackupsRebalanceLeadersParams {
  /**
   * The maximum number of reassignments to have in the queue at one time. Values <=0 use the default value Integer.MAX_VALUE. When this number is reached, the process waits for one or more leaders to be successfully assigned before adding more to the queue.
   */
  maxAtOnce?: number;
  /**
   * Timeout, in seconds, when waiting for leaders to be reassigned. If maxAtOnce is less than the number of reassignments pending, this is the maximum interval for any single reassignment.
   */
  maxWaitSeconds?: number;
  [k: string]: unknown;
}
