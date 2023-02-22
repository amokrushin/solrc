export * from './SolrAnalyzerDefinition.js';
export * from './SolrAnalyzerFilterDefinition.js';
export * from './SolrAnalyzerTokenizerDefinition.js';
export * from './SolrCharFilterDefinition.js';
export * from './SolrCopyFieldDefinition.js';
export * from './SolrFieldDefinition.js';
export * from './SolrFieldTypeDefinition.js';
export * from './SolrAnalyzerFormat.js';
export * from './SolrIndexAnalyzerDefinition.js';
export * from './SolrIndexAnalyzerFilterDefinition.js';
export * from './SolrIndexAnalyzerTokenizerDefinition.js';
export * from './SolrResponse.js';
export * from './SolrSchemaDefinition.js';
export * from './SolrTokenizerFactory.js';
export * from './SolrWords.js';
export * from './SolrQuery.js';

export type MaybeCollection<T> = T | T[];
export type SolrDoc = {
  [k: string]: string | number | string[] | number[] | boolean | null;
};
