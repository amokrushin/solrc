/*
 * Introspected endpoint: /collections/{collection}
 * Command: modify
 */

/**
 * Modifies specific attributes of a collection. Multiple attributes can be changed at one time.
 * @version Solr 8.x
 */
export interface SolrCollectionModifyParams {
  /**
   * Modifies the rules for where replicas should be located in a cluster.
   */
  rule?: string[];
  /**
   * Details of the snitch provider
   */
  snitch?: string[];
  /**
   * Name of the collection-level policy
   */
  policy?: string;
  /**
   * When set to true, enables auto addition of replicas when the number of active replicas falls below the value set for replicationFactor.
   */
  autoAddReplicas?: boolean;
  /**
   * The number of replicas to be created for each shard. Replicas are physical copies of each shard, acting as failover for the shard. Note that changing this value on an existing collection does not automatically add more replicas to the collection. However, it will allow add-replica commands to succeed.
   */
  replicationFactor?: number;
  /**
   * When creating collections, the shards and/or replicas are spread across all available, live, nodes, and two replicas of the same shard will never be on the same node. If a node is not live when the collection is created, it will not get any parts of the new collection, which could lead to too many replicas being created on a single live node. Defining maxShardsPerNode sets a limit on the number of replicas can be spread to each node. If the entire collection can not be fit into the live nodes, no collection will be created at all.
   */
  maxShardsPerNode?: number;
}
