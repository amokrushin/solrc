/*
 * Introspected endpoint: /collections/{collection}
 * Command: set-collection-property
 */

/**
 * Sets a property for the collection
 */
export interface SolrCollectionSetCollectionPropertyParams {
  /**
   * The name of the property
   */
  name: string;
  /**
   * The value of the property. When not provided, the property is deleted
   */
  value?: string;
}
