/*
 * Introspected endpoint: /collections/{collection}
 * Command: balance-shard-unique
 */

/**
 * Ensures a property is distributed equally across all physical nodes of a collection. If the property already exists on a replica, effort is made to leave it there. However, if it does not exist on any repica, a shard will be chosen and the property added.
 * @version Solr 8.x
 */
export interface SolrCollectionBalanceShardUniqueParams {
  /**
   * The property to balance across nodes. This can be entered as 'property.<property>' or simply '<property>'. If the 'property.' prefix is not defined, it will be added automatically.
   */
  property: string;
  /**
   * Normally, a property is instantiated on active nodes only. If this parameter is specified as 'false', then inactive nodes are also included for distribution.
   */
  onlyactivenodes?: boolean;
  /**
   * There is one pre-defined property (preferredLeader) that defaults this value to 'true'. For all other properties that are balanced, this must be set to 'true' or an error message is returned.
   */
  shardUnique?: boolean;
}
