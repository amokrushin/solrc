import type { SolrCollectionSchemaAddCopyFieldParams } from './SolrCollectionSchemaAddCopyFieldParams.js';
import type { SolrCollectionSchemaAddDynamicFieldParams } from './SolrCollectionSchemaAddDynamicFieldParams.js';
import type { SolrCollectionSchemaAddFieldParams } from './SolrCollectionSchemaAddFieldParams.js';
import type { SolrCollectionSchemaAddFieldTypeParams } from './SolrCollectionSchemaAddFieldTypeParams.js';
import type { SolrCollectionSchemaDeleteCopyFieldParams } from './SolrCollectionSchemaDeleteCopyFieldParams.js';
import type { SolrCollectionSchemaDeleteDynamicFieldParams } from './SolrCollectionSchemaDeleteDynamicFieldParams.js';
import type { SolrCollectionSchemaDeleteFieldParams } from './SolrCollectionSchemaDeleteFieldParams.js';
import type { SolrCollectionSchemaDeleteFieldTypeParams } from './SolrCollectionSchemaDeleteFieldTypeParams.js';
import type { SolrCollectionSchemaReplaceDynamicFieldParams } from './SolrCollectionSchemaReplaceDynamicFieldParams.js';
import type { SolrCollectionSchemaReplaceFieldParams } from './SolrCollectionSchemaReplaceFieldParams.js';
import type { SolrCollectionSchemaReplaceFieldTypeParams } from './SolrCollectionSchemaReplaceFieldTypeParams.js';

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
