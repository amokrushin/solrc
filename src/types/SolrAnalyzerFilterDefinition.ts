import { SolrAnalyzerFormat } from './SolrAnalyzerFormat.js';

export interface SolrAnalyzerFilterDefinition {
  class: string;
  encoder?: string;
  inject?: string;
  words?: string;
  ignoreCase?: string;
  articles?: string;
  language?: string;
  format?: SolrAnalyzerFormat | string;
  stemDerivational?: string;
  tags?: string;
  minimumLength?: string;
  dictionary?: string;
}
