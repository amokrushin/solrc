/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 *
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
  [k: string]: unknown;
}
