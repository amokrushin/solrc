import type { SolrCollectionSchemaAddCopyFieldParams } from './SolrCollectionSchemaAddCopyFieldParams';
import type { SolrCollectionSchemaAddDynamicFieldParams } from './SolrCollectionSchemaAddDynamicFieldParams';
import type { SolrCollectionSchemaAddFieldParams } from './SolrCollectionSchemaAddFieldParams';
import type { SolrCollectionSchemaAddFieldTypeParams } from './SolrCollectionSchemaAddFieldTypeParams';
import type { SolrCollectionSchemaDeleteCopyFieldParams } from './SolrCollectionSchemaDeleteCopyFieldParams';
import type { SolrCollectionSchemaDeleteDynamicFieldParams } from './SolrCollectionSchemaDeleteDynamicFieldParams';
import type { SolrCollectionSchemaDeleteFieldParams } from './SolrCollectionSchemaDeleteFieldParams';
import type { SolrCollectionSchemaDeleteFieldTypeParams } from './SolrCollectionSchemaDeleteFieldTypeParams';
import type { SolrCollectionSchemaReplaceDynamicFieldParams } from './SolrCollectionSchemaReplaceDynamicFieldParams';
import type { SolrCollectionSchemaReplaceFieldParams } from './SolrCollectionSchemaReplaceFieldParams';
import type { SolrCollectionSchemaReplaceFieldTypeParams } from './SolrCollectionSchemaReplaceFieldTypeParams';

export interface SolrCollectionSchemaPostRequest {
  'add-field'?:
    | SolrCollectionSchemaAddFieldParams
    | SolrCollectionSchemaAddFieldParams[];
  'delete-field'?:
    | SolrCollectionSchemaDeleteFieldParams
    | SolrCollectionSchemaDeleteFieldParams[];
  'replace-field'?:
    | SolrCollectionSchemaReplaceFieldParams
    | SolrCollectionSchemaReplaceFieldParams[];
  'add-dynamic-field'?: SolrCollectionSchemaAddDynamicFieldParams;
  'delete-dynamic-field'?: SolrCollectionSchemaDeleteDynamicFieldParams;
  'replace-dynamic-field'?: SolrCollectionSchemaReplaceDynamicFieldParams;
  'add-field-type'?:
    | SolrCollectionSchemaAddFieldTypeParams
    | SolrCollectionSchemaAddFieldTypeParams[];
  'delete-field-type'?:
    | SolrCollectionSchemaDeleteFieldTypeParams
    | SolrCollectionSchemaDeleteFieldTypeParams[];
  'replace-field-type'?:
    | SolrCollectionSchemaReplaceFieldTypeParams
    | SolrCollectionSchemaReplaceFieldTypeParams[];
  'add-copy-field'?:
    | SolrCollectionSchemaAddCopyFieldParams
    | SolrCollectionSchemaAddCopyFieldParams[];
  'delete-copy-field'?:
    | SolrCollectionSchemaDeleteCopyFieldParams
    | SolrCollectionSchemaDeleteCopyFieldParams[];
}
