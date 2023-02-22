import { SolrTokenizerFactory } from './SolrTokenizerFactory.js';

export interface SolrIndexAnalyzerTokenizerDefinition {
  class: SolrTokenizerFactory;
  delimiter?: string;
}
