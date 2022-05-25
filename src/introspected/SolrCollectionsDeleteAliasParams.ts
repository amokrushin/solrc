/*
 * Introspected endpoint: /collections
 * Command: delete-alias
 */

/**
 * Deletes a collection alias
 */
export interface SolrCollectionsDeleteAliasParams {
  /**
   * The name of the alias to delete.
   */
  name: string;
  /**
   * Defines a request ID that can be used to track this action after it's submitted. The action will be processed asynchronously.
   */
  async?: string;
}
