import { SolrTokenizerFactory } from './SolrTokenizerFactory.js';

export interface SolrAnalyzerTokenizerDefinition {
  class: SolrTokenizerFactory;
  mode?: string;
  outputUnknownUnigrams?: string;
  decompoundMode?: string;
}
