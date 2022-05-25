/*
 * Introspected endpoint: /collections
 * Command: set-alias-property
 */

/**
 * Allows changing the properties on an alias. If a key is set with an empty string then it will be removed
 */
export interface SolrCollectionsSetAliasPropertyParams {
  /**
   * The alias name on which to set properties.
   */
  name: string;
  /**
   * A map of key/value pairs that will be associated with the alias as alias properties (metadata). An empty value will delete any existing value for a given key.
   */
  properties?: {
    [k: string]: unknown;
  };
  /**
   * Defines a request ID that can be used to track this action after it's submitted. The action will be processed asynchronously.
   */
  async?: string;
}
