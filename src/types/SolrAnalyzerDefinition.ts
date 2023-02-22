import { SolrAnalyzerFilterDefinition } from './SolrAnalyzerFilterDefinition.js';
import { SolrAnalyzerTokenizerDefinition } from './SolrAnalyzerTokenizerDefinition.js';
import { SolrCharFilterDefinition } from './SolrCharFilterDefinition.js';

export interface SolrAnalyzerDefinition {
  tokenizer: SolrAnalyzerTokenizerDefinition;
  filters?: SolrAnalyzerFilterDefinition[];
  charFilters?: SolrCharFilterDefinition[];
}
