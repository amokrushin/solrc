import { SolrAnalyzerFilterDefinition } from './SolrAnalyzerFilterDefinition';
import { SolrAnalyzerTokenizerDefinition } from './SolrAnalyzerTokenizerDefinition';
import { SolrCharFilterDefinition } from './SolrCharFilterDefinition';

export interface SolrAnalyzerDefinition {
  tokenizer: SolrAnalyzerTokenizerDefinition;
  filters?: SolrAnalyzerFilterDefinition[];
  charFilters?: SolrCharFilterDefinition[];
}
