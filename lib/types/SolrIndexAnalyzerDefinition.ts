import { SolrIndexAnalyzerFilterDefinition }    from './SolrIndexAnalyzerFilterDefinition';
import { SolrIndexAnalyzerTokenizerDefinition } from './SolrIndexAnalyzerTokenizerDefinition';

export interface SolrIndexAnalyzerDefinition {
    tokenizer: SolrIndexAnalyzerTokenizerDefinition;
    filters?: SolrIndexAnalyzerFilterDefinition[];
}
