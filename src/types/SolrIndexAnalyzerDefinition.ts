import { SolrIndexAnalyzerFilterDefinition } from './SolrIndexAnalyzerFilterDefinition.js';
import { SolrIndexAnalyzerTokenizerDefinition } from './SolrIndexAnalyzerTokenizerDefinition.js';

export interface SolrIndexAnalyzerDefinition {
  tokenizer: SolrIndexAnalyzerTokenizerDefinition;
  filters?: SolrIndexAnalyzerFilterDefinition[];
}
