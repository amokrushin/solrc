/*
 * Introspected endpoint: /collections/backups
 * Command: migrate-docs
 */

/**
 * Moves documents with a given routing key to another collection. The source collection will continue to have the same documents, but will start re-routing write requests to the new collection. This command only works on collections using the 'compositeId' type of document routing.
 * @version Solr 8.x
 */
export interface SolrCollectionsBackupsMigrateDocsParams {
  /**
   * The name of the collection to which documents will be migrated.
   */
  target: string;
  /**
   * The routing key prefix. For example, if uniqueKey is a!123, then you would use split.key=a! This key may span multiple shards on source and target collections. The migration will be completed shard-by-shard in a single thread.
   */
  splitKey: string;
  /**
   * The timeout, in seconds, until which write requests made to the source collection for the given splitKey will be forwarded to the target shard. Once this time is up, write requests will be routed to the target collection. Any applications sending read or write requests should be modified once the migration is complete to send documents to the right collection.
   */
  forwardTimeout?: number;
  /**
   * Defines a request ID that can be used to track this action after it's submitted. The action will be processed asynchronously when this is defined. This command can be long-running, so running it asynchronously is recommended.
   */
  async?: string;
  [k: string]: unknown;
}
