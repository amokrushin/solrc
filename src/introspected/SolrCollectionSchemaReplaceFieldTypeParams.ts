/*
 * Introspected endpoint: /collections/{collection}/schema
 * Command: replace-field-type
 */

export interface SolrCollectionSchemaReplaceFieldTypeParams {
  /**
   * The name of the field type. This name is used when defining a field. It is strongly recommended that field type names consist only of alphanumeric or underscore characters and not start with a digit.
   */
  name: string;
  /**
   * The class name to use for the field type. Class names do not need to be fully qualified if they are included with Solr, so instead of 'org.apache.solr.schema.TextField', you can abbreviate the name as 'solr.TextField'. Custom or third-party class names may need to be fully qualified, however.
   */
  class: string;
  /**
   * The distance between the values of a multivalued field. This is used to prevent inaccurate phrase matches across two separate values of the same field.
   */
  positionIncrementGap?: number;
  /**
   * If true, phrase queries will automatically be generated for adjacent terms. If false, terms must also be enclosed in double-quotes to be treated as phrases.
   */
  autoGeneratePhraseQueries?: boolean;
  /**
   * Defines a custom DocValuesFormat to use for fields of this type. A custom DocValuesFormat requires that a schema-aware codec has also been configured in solrconfig.xml.
   */
  docValuesFormat?: string;
  /**
   * Defines a custom PostingsFormat to use for fields of this type. A custom PostingsFormat requires that a schema-aware codec has also been configured in solrconfig.xml.
   */
  postingsFormat?: string;
  /**
   * A query analyzer section defines how incoming queries to Solr will be analyzed for a field of this type.
   */
  queryAnalyzer?: {
    class?: string;
    charFilters?: {
      class: string;
      [k: string]: unknown;
    }[];
    tokenizer?: {
      class: string;
      [k: string]: unknown;
    };
    filters?: {
      class: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  /**
   * An index analyzer section defines how incoming text in documents will be analyzed for a field of this type.
   */
  indexAnalyzer?: {
    class?: string;
    charFilters?: {
      class: string;
      [k: string]: unknown;
    }[];
    tokenizer?: {
      class: string;
      [k: string]: unknown;
    };
    filters?: {
      class: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  /**
   * A multiterm analyzer section defines how incoming queries that results in Multi-Term expansion will be analyzed for a field of this type.
   */
  multiTermAnalyzer?: {
    class?: string;
    charFilters?: {
      class: string;
      [k: string]: unknown;
    }[];
    tokenizer?: {
      class: string;
      [k: string]: unknown;
    };
    filters?: {
      class: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  /**
   * An analyzer defines how both incoming text in documents and queries are analyzed for a field of this type. If a query analyzer and an index analyzer have both been defined, a general analyzer does not need to be defined for this type.
   */
  analyzer?: {
    class?: string;
    charFilters?: {
      class: string;
      [k: string]: unknown;
    }[];
    tokenizer?: {
      class: string;
      [k: string]: unknown;
    };
    filters?: {
      class: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
}
