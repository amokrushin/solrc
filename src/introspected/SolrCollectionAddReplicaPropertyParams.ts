/*
 * Introspected endpoint: /collections/{collection}
 * Command: add-replica-property
 */

/**
 * Assign an arbitrary property to a particular replica and give it the value specified. If the property already exists, it will be overwritten with the new value.
 * @version Solr 8.x
 */
export interface SolrCollectionAddReplicaPropertyParams {
  /**
   * The name of the shard the replica belongs to.
   */
  shard: string;
  /**
   * The name of the replica.
   */
  replica: string;
  /**
   * The name of the property. This can be entered as 'property.<property>' or simply '<property>'. If the 'property.' prefix is not defined, it will be added automatically.
   */
  name: string;
  /**
   * The value to assign to the property.
   */
  value: string;
  /**
   * If true, setting this property in one replica will remove the property from all other replicas in that shard.
   */
  shardUnique?: boolean;
}
