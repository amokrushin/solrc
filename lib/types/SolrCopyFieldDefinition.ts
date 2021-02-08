export interface SolrCopyFieldDefinition {
    /**
     * The field to copy from.
     */
    source: string;
    /**
     * A field or an array of fields to which the source field will be copied. A wildcard
     * for a dynamic field can be used, but only if the source field also contains a dynamic field.
     */
    dest: string;
    /**
     * An upper limit for the number of characters to be copied. This would be useful if index size
     * is a concern. If a limit is not specified, the entire field will be copied.
     */
    maxChars?: number;
}
