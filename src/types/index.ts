export * from './SolrAnalyzerDefinition';
export * from './SolrAnalyzerFilterDefinition';
export * from './SolrAnalyzerTokenizerDefinition';
export * from './SolrCharFilterDefinition';
export * from './SolrCopyFieldDefinition';
export * from './SolrFieldDefinition';
export * from './SolrFieldTypeDefinition';
export * from './SolrAnalyzerFormat';
export * from './SolrIndexAnalyzerDefinition';
export * from './SolrIndexAnalyzerFilterDefinition';
export * from './SolrIndexAnalyzerTokenizerDefinition';
export * from './SolrResponse';
export * from './SolrSchemaDefinition';
export * from './SolrTokenizerFactory';
export * from './SolrWords';
export * from './SolrQuery';

export type MaybeCollection<T> = T | T[];
export type SolrDoc = {
  [k: string]: string | number | string[] | number[] | boolean;
};
