/**
 * Introspected endpoint: /collections
 * Command: create
 */

/**
 * Create a collection.
 */
export interface SolrCollectionsCreateParams {
  /**
   * The name of the collection to be created.
   * Solr 8.x, 9x
   */
  name: string;
  /**
   * The name of the configuration set (which must already be stored in ZooKeeper) to use for this collection. If not provided, Solr will default to the collection name as the configuration set name.
   * Solr 8.x, 9x
   */
  config?: string;
  /**
   * These properties define how to distribute documents across a collection's shards.
   * Solr 8.x, 9x
   */
  router?: {
    /**
     * The router implementation to use for this collection. There are two options: compositeId or implicit. The compositeId option has Solr decide how to distribute documents (with some possibilities for customization). The implicit option requires you define your own routing strategy, and puts the balancing of documents in shards entirely in your hands.
     * Solr 8.x, 9x
     */
    name?: 'implicit' | 'compositeId';
    /**
     * A field to be used by Solr to identify the shard a document should be routed to. By default, the field defined as the unique ID for each document is used, but an alternative field can be defined with this parameter.
     * Solr 8.x, 9x
     */
    field?: string;
    [k: string]: unknown;
  };
  /**
   * The number of shards to be created as part of the collection. Shards are logical partitions of a single collection. Each shard has at least one replica, but more replicas for each shard can be defined with the replicationFactor property. This is a required parameter when using the 'compositeId' router.
   * Solr 8.x, 9x
   */
  numShards?: number;
  /**
   * A comma-separated list of shard names, e.g., shard-x,shard-y,shard-z. This is a required parameter when using the 'implicit' router.
   * Solr 8.x, 9x
   */
  shards?: string;
  /**
   * The number of NRT replicas to be created for each shard. Replicas are physical copies of each shard, acting as failover for the shard.
   * Solr 8.x, 9x
   */
  replicationFactor?: number;
  /**
   * The number of NRT replicas to be created for each shard. Replicas are physical copies of each shard, acting as failover for the shard. Replicas of type NRT will be updated with each document that is added to the cluster, and can use "softCommits" to get a new view of the index in Near Real Time. This parameter works in the same way as 'replicationFactor'
   * Solr 8.x, 9x
   */
  nrtReplicas?: number;
  /**
   * The number of TLOG replicas to be created for each shard. TLOG replicas update their transaction log for every update to the cluster, but only the shard leader updates the local index, other TLOG replicas will use segment replication and copy the latest index files from the leader.
   * Solr 8.x, 9x
   */
  tlogReplicas?: number;
  /**
   * The number of PULL replicas to be created for each shard. PULL replicas don't receive copies of the documents on update requests, they just replicate the latest segments periodically from the shard leader. PULL replicas can't become shard leaders, and need at least one active TLOG(recommended) or NRT replicas in the shard to replicate from.
   * Solr 8.x, 9x
   */
  pullReplicas?: number;
  /**
   * Defines nodes to spread the new collection across. If not provided, the collection will be spread across all live Solr nodes. The names to use are the 'node_name', which can be found by a request to the cluster/nodes endpoint. A special value of EMPTY will create no shards or replicas for the new collection. In this case, shards and replicas can be added later with the add-replica command available on the /collections/{collection}/shards endpoint.
   * Solr 8.x, 9x
   */
  nodeSet?: string[];
  /**
   * Controls whether or not the shard-replicas created for this collection will be assigned to the nodes specified by the nodeSet property in a sequential manner, or if the list of nodes should be shuffled prior to creating individual replicas. A 'false' value makes the results of a collection creation predictable and gives more exact control over the location of the individual shard-replicas, but 'true' can be a better choice for ensuring replicas are distributed evenly across nodes. This property is ignored if nodeSet is not also specified.
   * Solr 8.x, 9x
   */
  shuffleNodes?: boolean;
  /**
   * When creating collections, the shards and/or replicas are spread across all available, live, nodes, and two replicas of the same shard will never be on the same node. If a node is not live when the collection is created, it will not get any parts of the new collection, which could lead to too many replicas being created on a single live node. Defining maxShardsPerNode sets a limit on the number of replicas can be spread to each node. If the entire collection can not be fit into the live nodes, no collection will be created at all.
   * Solr 8.x
   */
  maxShardsPerNode?: number;
  /**
   * When set to true, enables auto addition of replicas when the number of active replicas falls below the value set for replicationFactor.
   * Solr 8.x
   */
  autoAddReplicas?: boolean;
  /**
   * Defines rules for where replicas should be located in a cluster.
   * Solr 8.x
   */
  rule?: string[];
  /**
   * Details of the snitch provider.
   * Solr 8.x
   */
  snitch?: string[];
  /**
   * Name of the collection-level policy
   * Solr 8.x
   */
  policy?: string;
  /**
   * Allows adding core.properties for the collection. Some examples of core properties you may want to modify include the config set, the node name, the data directory, among others.
   * Solr 8.x, 9x
   */
  properties?: {
    [k: string]: unknown;
  };
  /**
   * Defines a request ID that can be used to track this action after it's submitted. The action will be processed asynchronously.
   * Solr 8.x, 9x
   */
  async?: string;
  /**
   * If true then request will complete only when all affected replicas become active.
   * Solr 8.x, 9x
   */
  waitForFinalState?: boolean;
  /**
   * If true the states of individual replicas will be maintained as individual child of the state.json.
   * Solr 9.x
   */
  perReplicaState?: boolean;
}
