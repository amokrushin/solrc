/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 */
import type { SolrCollectionSchemaAddFieldParams } from './SolrCollectionSchemaAddFieldParams';
import type { SolrCollectionSchemaDeleteFieldParams } from './SolrCollectionSchemaDeleteFieldParams';
import type { SolrCollectionSchemaReplaceFieldParams } from './SolrCollectionSchemaReplaceFieldParams';
import type { SolrCollectionSchemaAddDynamicFieldParams } from './SolrCollectionSchemaAddDynamicFieldParams';
import type { SolrCollectionSchemaDeleteDynamicFieldParams } from './SolrCollectionSchemaDeleteDynamicFieldParams';
import type { SolrCollectionSchemaReplaceDynamicFieldParams } from './SolrCollectionSchemaReplaceDynamicFieldParams';
import type { SolrCollectionSchemaAddFieldTypeParams } from './SolrCollectionSchemaAddFieldTypeParams';
import type { SolrCollectionSchemaDeleteFieldTypeParams } from './SolrCollectionSchemaDeleteFieldTypeParams';
import type { SolrCollectionSchemaReplaceFieldTypeParams } from './SolrCollectionSchemaReplaceFieldTypeParams';
import type { SolrCollectionSchemaAddCopyFieldParams } from './SolrCollectionSchemaAddCopyFieldParams';
import type { SolrCollectionSchemaDeleteCopyFieldParams } from './SolrCollectionSchemaDeleteCopyFieldParams';

export interface SolrCollectionSchemaPostRequest {
  'add-field'?: SolrCollectionSchemaAddFieldParams | SolrCollectionSchemaAddFieldParams[];
  'delete-field'?: SolrCollectionSchemaDeleteFieldParams | SolrCollectionSchemaDeleteFieldParams[];
  'replace-field'?: SolrCollectionSchemaReplaceFieldParams | SolrCollectionSchemaReplaceFieldParams[];
  'add-dynamic-field'?: SolrCollectionSchemaAddDynamicFieldParams;
  'delete-dynamic-field'?: SolrCollectionSchemaDeleteDynamicFieldParams;
  'replace-dynamic-field'?: SolrCollectionSchemaReplaceDynamicFieldParams;
  'add-field-type'?: SolrCollectionSchemaAddFieldTypeParams | SolrCollectionSchemaAddFieldTypeParams[];
  'delete-field-type'?: SolrCollectionSchemaDeleteFieldTypeParams | SolrCollectionSchemaDeleteFieldTypeParams[];
  'replace-field-type'?: SolrCollectionSchemaReplaceFieldTypeParams | SolrCollectionSchemaReplaceFieldTypeParams[];
  'add-copy-field'?: SolrCollectionSchemaAddCopyFieldParams | SolrCollectionSchemaAddCopyFieldParams[];
  'delete-copy-field'?: SolrCollectionSchemaDeleteCopyFieldParams | SolrCollectionSchemaDeleteCopyFieldParams[];
}
