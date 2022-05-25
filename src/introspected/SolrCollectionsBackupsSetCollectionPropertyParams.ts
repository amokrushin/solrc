/*
 * Introspected endpoint: /collections/backups
 * Command: set-collection-property
 */

/**
 * Sets a property for the collection
 * @version Solr 8.x
 */
export interface SolrCollectionsBackupsSetCollectionPropertyParams {
  /**
   * The name of the property
   */
  name: string;
  /**
   * The value of the property. When not provided, the property is deleted
   */
  value?: string;
  [k: string]: unknown;
}
