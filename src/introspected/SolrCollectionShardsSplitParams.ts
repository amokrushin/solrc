/*
 * Introspected endpoint: /collections/{collection}/shards
 * Command: split
 */

/**
 * Splits an existing shard into two or more new shards. During this action, the existing shard will continue to contain the original data, but new data will be routed to the new shards once the split is complete. New shards will have as many replicas as the existing shards. A soft commit will be done automatically. An explicit commit request is not required because the index is automatically saved to disk during the split operation. New shards will use the original shard name as the basis for their names, adding an underscore and a number to differentiate the new shard. For example, 'shard1' would become 'shard1_0' and 'shard1_1'. Note that this operation can take a long time to complete.
 * @version Solr 8.x
 */
export interface SolrCollectionShardsSplitParams {
  /**
   * The name of the shard to be split.
   */
  shard?: string;
  /**
   * A comma-separated list of hexadecimal hash ranges that will be used to split the shard into new shards containing each defined range, e.g. ranges=0-1f4,1f5-3e8,3e9-5dc. This is the only option that allows splitting a single shard into more than 2 additional shards. If neither this parameter nor splitKey are defined, the shard will be split into two equal new shards.
   */
  ranges?: string;
  /**
   * A route key to use for splitting the index. If this is defined, the shard parameter is not required because the route key will identify the correct shard. A route key that spans more than a single shard is not supported. If neither this parameter nor ranges are defined, the shard will be split into two equal new shards.
   */
  splitKey?: string;
  /**
   * Allows adding core.properties for the collection. Some examples of core properties you may want to modify include the config set, the node name, the data directory, among others.
   */
  coreProperties?: {
    [k: string]: unknown;
  };
  /**
   * Defines a request ID that can be used to track this action after it's submitted. The action will be processed asynchronously when this is defined. This command can be long-running, so running it asynchronously is recommended.
   */
  async?: string;
  /**
   * If true then request will complete only when all affected replicas become active.
   */
  waitForFinalState?: boolean;
}
