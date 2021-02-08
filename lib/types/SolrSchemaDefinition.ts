import { SolrCopyFieldDefinition } from './SolrCopyFieldDefinition';
import { SolrFieldDefinition }     from './SolrFieldDefinition';
import { SolrFieldTypeDefinition } from './SolrFieldTypeDefinition';

export interface SolrSchemaDefinition {
    name: string;
    version: number;
    uniqueKey: string;
    fieldTypes: SolrFieldTypeDefinition[];
    fields: SolrFieldDefinition[];
    dynamicFields: SolrFieldDefinition[];
    copyFields: SolrCopyFieldDefinition[];
}
