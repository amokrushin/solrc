/*
 * Introspected endpoint: /collections/backups
 * Command: reload
 */

/**
 * Reloads a collection so new configuration changes can take effect and be available for use by the system.
 * @version Solr 8.x
 */
export interface SolrCollectionsBackupsReloadParams {
  /**
   * Defines a request ID that can be used to track this action after it's submitted. The action will be processed asynchronously when this is defined.
   */
  async?: string;
  [k: string]: unknown;
}
