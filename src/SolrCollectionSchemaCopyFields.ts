import castArray from 'lodash/castArray.js';
import pickFp from 'lodash/fp/pick.js';
import { SolrCollectionSchemaAddCopyFieldParams } from './introspected/index.js';
import { SolrCollectionSchemaDeleteCopyFieldParams } from './introspected/index.js';
import { SolrCollectionSchemaPostRequest } from './introspected/index.js';
import { SolrCollectionSchemaGetRequest } from './introspected/index.js';
import type { SolrCollectionSchema } from './SolrCollectionSchema.js';
import { MaybeCollection } from './types/index.js';
import type { SolrResponse } from './types/index.js';
import type { SolrCopyFieldDefinition } from './types/index.js';

export interface SolrSchemaCopyFieldsResponse extends SolrResponse {
  copyFields: SolrCopyFieldDefinition[];
}

export class SolrCollectionSchemaCopyFields {
  /**
   * @protected
   */
  schema: SolrCollectionSchema;

  /**
   * @hidden
   */
  constructor(schema: SolrCollectionSchema) {
    this.schema = schema;
  }

  /**
   * List schema copy fields
   *
   * @example
   * const fields = await collection.schema.copyFields.list();
   * @see {@link https://lucene.apache.org/solr/guide/schema-api.html#list-copy-fields}
   * @public
   */
  async list() {
    const { copyFields } = await this.schema.request<
      SolrCollectionSchemaGetRequest,
      object,
      SolrSchemaCopyFieldsResponse
    >({
      method: 'get',
      endpoint: '/copyfields',
    });

    return copyFields;
  }

  /**
   * Add a New Copy Field Rule
   * The add-copy-field command adds a new copy field rule to your schema.
   *
   * @example
   * // Add a rule to copy the field "foo" to the "bar" field
   * await collection.schema.copyFields.add({
   *   source: 'foo',
   *   dest: 'bar',
   * });
   * @see {@link https://lucene.apache.org/solr/guide/schema-api.html#add-a-new-copy-field-rule}
   * @public
   */
  async add(
    copyFields: MaybeCollection<SolrCollectionSchemaAddCopyFieldParams>
  ) {
    return this.schema.request<SolrCollectionSchemaPostRequest>({
      method: 'post',
      data: {
        'add-copy-field': castArray(copyFields),
      },
      params: {
        commit: this.schema.collection.options.autoCommit,
      },
    });
  }

  /**
   * Delete a Copy Field Rule
   * The delete-copy-field command deletes a copy field rule from your schema. If the copy field rule
   * does not exist in the schema an error is thrown.
   * The source and dest attributes are required by this command.
   *
   * @example
   * // Delete a rule to copy the field "foo" to the "bar" field
   * await collection.schema.copyFields.delete({
   *   source: 'foo',
   *   dest: 'bar',
   * });
   * @see {@link https://lucene.apache.org/solr/guide/schema-api.html#delete-a-copy-field-rule}
   * @public
   */
  async delete(
    copyFields: MaybeCollection<SolrCollectionSchemaDeleteCopyFieldParams>
  ) {
    return this.schema.request<SolrCollectionSchemaPostRequest>({
      method: 'post',
      data: {
        'delete-copy-field': castArray(copyFields),
      },
      params: {
        commit: this.schema.collection.options.autoCommit,
      },
    });
  }

  /**
   * Delete all copy field rules
   *
   * @example
   * await collection.schema.copyFields.deleteAll();
   * @public
   */
  async deleteAll() {
    const copyFields = await this.list();
    return this.delete(copyFields.map(pickFp(['source', 'dest'])));
  }
}
