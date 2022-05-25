/*
 * Introspected endpoint: /collections/{collection}/schema
 * Command: delete-copy-field
 */

/**
 * Deletes a copy field rule. Both sides of the copy rule (source and destination) are required in order to delete the rule.
 */
export interface SolrCollectionSchemaDeleteCopyFieldParams {
  /**
   * The field the copy rule is defined to copy from.
   */
  source: string;
  /**
   * The field the copy rule is defined to copy to.
   */
  dest: string;
}
