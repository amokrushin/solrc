/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 *
 * Introspected endpoint: /collections/{collection}/schema
 * Command: delete-field
 */

/**
 * Deletes a field from the schema.
 */
export interface SolrCollectionSchemaDeleteFieldParams {
  /**
   * The name of the field to delete.
   */
  name: string;
  [k: string]: unknown;
}
