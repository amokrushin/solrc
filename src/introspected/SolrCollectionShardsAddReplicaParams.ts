/*
 * Introspected endpoint: /collections/{collection}/shards
 * Command: add-replica
 */

export interface SolrCollectionShardsAddReplicaParams {
  /**
   * The name of the shard in which this replica should be created. If this parameter is not specified, then '_route_' must be defined.
   */
  shard?: string;
  /**
   * If the exact shard name is not known, users may pass the _route_ value and the system would identify the name of the shard. Ignored if the shard param is also specified. If the 'shard' parameter is also defined, this parameter will be ignored.
   */
  _route_?: string;
  /**
   * The name of the node where the replica should be created.
   */
  node?: string;
  /**
   * An optional custom instanceDir for this replica.
   */
  instanceDir?: string;
  /**
   * An optional custom directory used to store index data for this replica.
   */
  dataDir?: string;
  /**
   * Allows adding core.properties for the collection. Some examples of core properties you may want to modify include the config set and the node name, among others.
   */
  coreProperties?: {
    [k: string]: unknown;
  };
  /**
   * Defines a request ID that can be used to track this action after it's submitted. The action will be processed asynchronously when this is defined.
   */
  async?: string;
  /**
   * The type of replica to add. NRT (default), TLOG or PULL
   */
  type?: 'NRT' | 'TLOG' | 'PULL';
  /**
   * If true then request will complete only when all affected replicas become active.
   */
  waitForFinalState?: boolean;
  /**
   * @version Solr 9.x
   */
  createNodeSet?: string[];
  /**
   * @version Solr 9.x
   */
  followAliases?: boolean;
  /**
   * @version Solr 9.x
   */
  ulogDir?: string;
  /**
   * @version Solr 9.x
   */
  skipNodeAssignment?: boolean;
  /**
   * @version Solr 9.x
   */
  name?: string;
}
