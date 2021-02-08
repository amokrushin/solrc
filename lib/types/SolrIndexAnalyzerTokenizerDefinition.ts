import { SolrTokenizerFactory } from './SolrTokenizerFactory';

export interface SolrIndexAnalyzerTokenizerDefinition {
    class: SolrTokenizerFactory;
    delimiter?: string;
}
