/*
 * Introspected endpoint: /collections/backups
 * Command: move-replica
 */

/**
 * This command moves a replica from one node to a new node. In case of shared filesystems the `dataDir` and `ulogDir` may be reused.
 * @version Solr 8.x
 */
export interface SolrCollectionsBackupsMoveReplicaParams {
  /**
   * The name of the replica to move. Either this parameter or shard + sourceNode is required, this parameter takes precedence.
   */
  replica?: string;
  /**
   * The name of the shard for which a replica should be moved. Either this parameter or replica is required. If replica is specified, this parameter is ignored.
   */
  shard?: string;
  /**
   * The name of the node that contains the replica. Either this parameter or replica is required. If replica is specified, this parameter is ignored.
   */
  sourceNode?: string;
  /**
   * The name of the destination node. This parameter is required.
   */
  targetNode?: string;
  /**
   * Wait for the moved replica to become active.
   */
  waitForFinalState?: boolean;
  /**
   * Number of seconds to wait for replica to become active before failing. For very large replicas this may need to be increased to ensure the old replica is deleted. Ignored for hdfs replicas.
   */
  timeout?: number;
  /**
   * For replicas that use shared filesystems allow 'in-place' move that reuses shared data.
   */
  inPlaceMove?: boolean;
  [k: string]: unknown;
}
