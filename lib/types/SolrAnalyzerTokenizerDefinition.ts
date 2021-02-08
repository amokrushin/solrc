import { SolrTokenizerFactory } from './SolrTokenizerFactory';

export interface SolrAnalyzerTokenizerDefinition {
    class: SolrTokenizerFactory;
    mode?: string;
    outputUnknownUnigrams?: string;
    decompoundMode?: string;
}
