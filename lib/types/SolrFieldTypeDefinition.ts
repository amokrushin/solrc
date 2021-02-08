import { SolrAnalyzerDefinition }      from './SolrAnalyzerDefinition';
import { SolrIndexAnalyzerDefinition } from './SolrIndexAnalyzerDefinition';

export interface SolrFieldTypeDefinition {
    /**
     * The name of the field type. This name is used when defining a field. It is strongly recommended that field type names consist only of alphanumeric or underscore characters and not start with a digit.
     */
    name: string;
    /**
     * The class name to use for the field type. Class names do not need to be fully qualified if they are included with Solr, so instead of 'org.apache.solr.schema.TextField', you can abbreviate the name as 'solr.TextField'. Custom or third-party class names may need to be fully qualified, however.
     */
    class: string;
    omitTermFreqAndPositions?: boolean;
    omitNorms?: boolean;
    maxCharsForDocValues?: string;
    stored?: boolean;
    indexAnalyzer?: SolrIndexAnalyzerDefinition;
    queryAnalyzer?: SolrIndexAnalyzerDefinition;
    sortMissingLast?: boolean;
    multiValued?: boolean;
    indexed?: boolean;
    analyzer?: SolrAnalyzerDefinition;
    docValues?: boolean;
    geo?: string;
    maxDistErr?: string;
    termOffsets?: boolean;
    distErrPct?: string;
    distanceUnits?: string;
    termPositions?: boolean;
    omitPositions?: boolean;
    /**
     * The distance between the values of a multivalued field. This is used to prevent inaccurate phrase matches across two separate values of the same field.
     */
    positionIncrementGap?: number;
    subFieldSuffix?: string;
    dimension?: string;
    /**
     * If true, phrase queries will automatically be generated for adjacent terms. If false, terms must also be enclosed in double-quotes to be treated as phrases.
     */
    autoGeneratePhraseQueries?: boolean;
}
