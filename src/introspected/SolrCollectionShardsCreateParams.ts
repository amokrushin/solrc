/*
 * Introspected endpoint: /collections/{collection}/shards
 * Command: create
 */

/**
 * @version Solr 8.x
 */
export interface SolrCollectionShardsCreateParams {
  /**
   * Defines nodes to spread the new collection across. If not provided, the collection will be spread across all live Solr nodes. The names to use are the 'node_name', which can be found by a request to the cluster/nodes endpoint.
   */
  nodeSet?: string[];
  /**
   * The name of the shard to be created.
   */
  shard: string;
  /**
   * Allows adding core.properties for the collection. Some examples of core properties you may want to modify include the config set, the node name, the data directory, among others.
   */
  coreProperties?: {
    [k: string]: unknown;
  };
  /**
   * Defines a request ID that can be used to track this action after it's submitted. The action will be processed asynchronously when this is defined.
   */
  async?: string;
  /**
   * If true then request will complete only when all affected replicas become active.
   */
  waitForFinalState?: boolean;
}
