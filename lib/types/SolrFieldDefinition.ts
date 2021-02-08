/**
 * @see {@link https://lucene.apache.org/solr/guide/field-type-definitions-and-properties.html#field-type-properties}
 */
export interface SolrFieldDefinition {
    name: string,
    type: string,
    /**
     * If true, the value of the field can be used in queries to retrieve matching documents.
     */
    indexed?: boolean,
    /**
     * If true, the actual value of the field can be retrieved by queries.
     */
    stored?: boolean,
    /**
     * If true, the value of the field will be put in a column-oriented DocValues structure.
     */
    docValues?: boolean,
    /**
     * Control the placement of documents when a sort field is not present.
     */
    sortMissingFirst?: boolean,
    /**
     * Control the placement of documents when a sort field is not present.
     */
    sortMissingLast?: boolean,
    /**
     * If true, indicates that a single document might contain multiple values for this field type.
     */
    multiValued?: boolean,
    /**
     * If true, indicates that an indexed="true" docValues="false" field can be "un-inverted" at query time
     * to build up large in memory data structure to serve in place of DocValues. Defaults to true for historical
     * reasons, but users are strongly encouraged to set this to false for stability and use docValues="true" as needed.
     */
    uninvertible?: boolean,
    /**
     * If true, omits the norms associated with this field (this disables length normalization for the field,
     * and saves some memory). Defaults to true for all primitive (non-analyzed) field types,
     * such as int, float, data, bool, and string. Only full-text fields or fields need norms.
     */
    omitNorms?: boolean,
    /**
     * If true, omits term frequency, positions, and payloads from postings for this field. This can be a performance
     * boost for fields that don’t require that information. It also reduces the storage space required for the index.
     * Queries that rely on position that are issued on a field with this option will silently fail to find documents.
     * This property defaults to true for all field types that are not text fields.
     */
    omitTermFreqAndPositions?: boolean,
    /**
     * Similar to omitTermFreqAndPositions but preserves term frequency information.
     */
    omitPositions?: boolean,
    /**
     * These options instruct Solr to maintain full term vectors for each document, optionally including position,
     * offset and payload information for each term occurrence in those vectors. These can be used to accelerate
     * highlighting and other ancillary functionality, but impose a substantial cost in terms of index size.
     * They are not necessary for typical uses of Solr.
     */
    termVectors?: boolean,
    /**
     * These options instruct Solr to maintain full term vectors for each document, optionally including position,
     * offset and payload information for each term occurrence in those vectors. These can be used to accelerate
     * highlighting and other ancillary functionality, but impose a substantial cost in terms of index size.
     * They are not necessary for typical uses of Solr.
     */
    termPositions?: boolean,
    /**
     * These options instruct Solr to maintain full term vectors for each document, optionally including position,
     * offset and payload information for each term occurrence in those vectors. These can be used to accelerate
     * highlighting and other ancillary functionality, but impose a substantial cost in terms of index size.
     * They are not necessary for typical uses of Solr.
     */
    termOffsets?: boolean,
    /**
     * These options instruct Solr to maintain full term vectors for each document, optionally including position,
     * offset and payload information for each term occurrence in those vectors. These can be used to accelerate
     * highlighting and other ancillary functionality, but impose a substantial cost in terms of index size.
     * They are not necessary for typical uses of Solr.
     */
    termPayloads?: boolean,
    /**
     * Instructs Solr to reject any attempts to add a document which does not have a value for this field.
     * This property defaults to false.
     */
    required?: boolean,
    /**
     * If the field has docValues enabled, setting this to true would allow the field to be returned
     * as if it were a stored field (even if it has stored=false) when matching “*” in an fl parameter.
     */
    useDocValuesAsStored?: boolean,
    /**
     * Large fields are always lazy loaded and will only take up space in the document cache if the actual
     * value is < 512KB. This option requires stored="true" and multiValued="false". It’s intended for fields
     * that might have very large values so that they don’t get cached in memory.
     */
    large?: boolean,
}
