import { SolrAnalyzerFormat } from './SolrAnalyzerFormat';

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
