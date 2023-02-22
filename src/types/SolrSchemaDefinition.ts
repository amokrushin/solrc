import { SolrCopyFieldDefinition } from './SolrCopyFieldDefinition.js';
import { SolrFieldDefinition } from './SolrFieldDefinition.js';
import { SolrFieldTypeDefinition } from './SolrFieldTypeDefinition.js';

export interface SolrSchemaDefinition {
  name: string;
  version: number;
  uniqueKey: string;
  fieldTypes: SolrFieldTypeDefinition[];
  fields: SolrFieldDefinition[];
  dynamicFields: SolrFieldDefinition[];
  copyFields: SolrCopyFieldDefinition[];
}
