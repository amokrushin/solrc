/*
 * Introspected endpoint: /collections/{collection}/schema
 * Command: add-field
 */

export interface SolrCollectionSchemaAddFieldParams {
  /**
   * The name of the field. Names should be alphanumeric or underscore characters only, and not start with a digit. Names also cannot begin and end with an underscore, as such field names are reserved by the system.
   */
  name: string;
  /**
   * The name of the fieldType for this field.
   */
  type: string;
  /**
   * An optional default value that should be added automatically to any document that does not have a value for this field.
   */
  defaultValue?: string;
  /**
   * If true, the field will be indexed and will be available for use in queries to retrieve matching documents. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to true.
   */
  indexed?: boolean;
  /**
   * If true, the actual value of the field can be retrieved by queries and be displayed in results. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to true.
   */
  stored?: boolean;
  /**
   * If true, length normalization and index-time boosting for a field are omitted from the index. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to true for all primitive field types (such as dates, strings, boolean, and numeric fields), but will default to false for non-primitive field types.
   */
  omitNorms?: boolean;
  /**
   * If true, all term frequency, positions, and payloads will not be indexed. This means that phrase queries, proximity queries and similar queries that rely on analysis of the frequency of a query term or the position of a term to other terms will not be supported. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to true for all field types that are not text fields.
   */
  omitTermFreqAndPositions?: boolean;
  /**
   * If true, term vectors will be stored which can be used to optimize More Like This and optimizing highlighting wildcard queries. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to false.
   */
  termVectors?: boolean;
  /**
   * If true, term vectors will include positions. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to false.
   */
  termPositions?: boolean;
  /**
   * If true, term vectors will include offsets. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to false.
   */
  termOffsets?: boolean;
  /**
   * If true, a single document can have multiple values in a single field, and these values will be indexed. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to false.
   */
  multiValued?: boolean;
  /**
   * If true, when sorting by the field, any documents missing a value for the field will be placed at the top of the list. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to false. If sortMissingFirst and sortMissingLast are both false, documents missing this field will be placed at the top when sorting in ascending order (asc) or at the bottom when sorting in descending order (desc).
   */
  sortMissingFirst?: boolean;
  /**
   * If true, when sorting by the field, any documents missing a value for the field will be placed at the bottom of the list. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to false. If sortMissingFirst and sortMissingLast are both false, documents missing this field will be placed at the top when sorting in ascending order (asc) or at the bottom when sorting in descending order (desc).
   */
  sortMissingLast?: boolean;
  /**
   * If true, any document that does not have a value for the field will be rejected. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to false.
   */
  required?: boolean;
  /**
   * If true, information about the position of terms in a document will not be stored in the index, which means phrase queries, proximity queries, and similar will not be supported for this field. It is similar to 'omitTermFreqAndPositions', but 'omitPositions' will allow term frequency information to be stored. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to true for all field types that are not text fields.
   */
  omitPositions?: boolean;
  /**
   * If true, term offsets will be stored with positions in the postings list in the index. This optimizes highlighting with the UnifiedHighlighter. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to false.
   */
  storeOffsetsWithPositions?: boolean;
  /**
   * If true, field values will be stored in a column-oriented docValues structure. This can be more efficient for some fields, particularly those used for faceting. More information is available from https://solr.apache.org/guide/docvalues.html. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to true for all non-text fields (such as dates, integers, longs, etc.).
   */
  docValues?: boolean;
  /**
   * If true, term vectors will include payloads. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to false.
   */
  termPayloads?: boolean;
  /**
   * If true and docValues are enabled for the field, the field will be returned when all fields are requested (using '*' with the fl parameter), even if it is not stored. If this is not defined, it will inherit the value from the fieldType. If the fieldType does not define a value, it will default to true.
   */
  useDocValuesAsStored?: boolean;
  /**
   * If true, indicates that an indexed="true" docValues="false" field can be "un-inverted" at query time
   * to build up large in memory data structure to serve in place of DocValues. Defaults to true for historical
   * reasons, but users are strongly encouraged to set this to false for stability and use docValues="true" as needed.
   * @version Solr 9.x
   */
  uninvertible?: boolean;
}
