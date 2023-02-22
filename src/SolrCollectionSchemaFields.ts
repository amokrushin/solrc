import castArray from 'lodash/castArray.js';
import difference from 'lodash/difference.js';
import pickFp from 'lodash/fp/pick.js';
import intersection from 'lodash/intersection.js';
import isMatch from 'lodash/isMatch.js';
import keyBy from 'lodash/keyBy.js';
import { SolrCollectionSchemaGetRequest } from './introspected/index.js';
import { SolrCollectionSchemaPostRequest } from './introspected/index.js';
import { SolrCollectionSchemaAddFieldParams } from './introspected/index.js';
import type { SolrCollectionSchema } from './SolrCollectionSchema.js';
import { MaybeCollection } from './types/index.js';
import type { SolrFieldDefinition } from './types/index.js';
import type { SolrResponse } from './types/index.js';

export interface SolrSchemaFieldsResponse extends SolrResponse {
  fields: SolrFieldDefinition[];
}

export class SolrCollectionSchemaFields {
  /**
   * @protected
   */
  static defaultFieldProperties: Omit<
    SolrCollectionSchemaAddFieldParams,
    'name' | 'type'
  > = {
    /**
     * Defaults to true for historical reasons, but users are strongly encouraged to set this to false
     * for stability and use docValues="true" as needed.
     */
    uninvertible: false,
  };

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
   * List schema fields
   *
   * @example
   * const fields = await collection.schema.fields.list();
   * @see {@link https://lucene.apache.org/solr/guide/schema-api.html#list-fields}
   * @public
   */
  async list() {
    const { fields } = await this.schema.request<
      SolrCollectionSchemaGetRequest,
      object,
      SolrSchemaFieldsResponse
    >({
      method: 'get',
      endpoint: '/fields',
    });
    return fields;
  }

  /**
   * Add a new field.
   * The add-field command adds a new field definition to your schema. If a field with the same name
   * exists an error is thrown.
   *
   * @example
   * // Add multiple fields at once
   * await collection.schema.fields.add([
   *   {
   *     name: 'test_field_1',
   *     type: 'string',
   *   },
   *   {
   *     name: 'test_field_2',
   *     type: 'string',
   *   },
   * ]);
   *
   * @example
   * // Add a single field
   * await collection.schema.fields.add({
   *   name: 'test_field_1',
   *   type: 'string',
   * });
   * @see {@link https://lucene.apache.org/solr/guide/schema-api.html#add-a-new-field}
   * @public
   */
  async add(fields: MaybeCollection<SolrCollectionSchemaAddFieldParams>) {
    await this.schema.request<SolrCollectionSchemaPostRequest>({
      method: 'post',
      data: {
        'add-field': castArray(fields).map((field) => ({
          ...SolrCollectionSchemaFields.defaultFieldProperties,
          ...field,
        })),
      },
      params: {
        commit: this.schema.collection.options.autoCommit,
      },
    });
  }

  /**
   * Replace a field.
   * The replace-field command replaces a field’s definition. Note that you must supply
   * the full definition for a field - this command will not partially modify a field’s
   * definition. If the field does not exist in the schema an error is thrown.
   *
   * @example
   * await collection.schema.fields.replace({
   *   name: 'test_field_1',
   *   type: 'string',
   * });
   * @see {@link https://lucene.apache.org/solr/guide/schema-api.html#replace-a-field}
   * @public
   */
  async replace(fields: MaybeCollection<SolrCollectionSchemaAddFieldParams>) {
    await this.schema.request<SolrCollectionSchemaPostRequest>({
      method: 'post',
      data: {
        'replace-field': castArray(fields).map((field) => ({
          ...SolrCollectionSchemaFields.defaultFieldProperties,
          ...field,
        })),
      },
      params: {
        commit: this.schema.collection.options.autoCommit,
      },
    });
  }

  /**
   * Delete a field.
   * The delete-field command removes a field definition from your schema. If the field does not exist
   * in the schema, or if the field is the source or destination of a copy field rule, an error is thrown.
   *
   * @example
   * await collection.schema.fields.delete({
   *   name: 'test_field_1',
   * });
   * @see {@link https://lucene.apache.org/solr/guide/schema-api.html#delete-a-field}
   * @public
   */
  async delete(
    fields: MaybeCollection<Pick<SolrCollectionSchemaAddFieldParams, 'name'>>
  ) {
    await this.schema.request<SolrCollectionSchemaPostRequest>({
      method: 'post',
      data: {
        'delete-field': castArray(fields).map(pickFp(['name'])),
      },
      params: {
        commit: this.schema.collection.options.autoCommit,
      },
    });
  }

  /**
   * Delete all fields.
   *
   * @example
   * await collection.schema.fields.deleteAll();
   * @public
   */
  async deleteAll() {
    const fields = await this.list();
    await this.delete(fields);
  }

  /**
   * Update fields.
   * The update command removes existent fields not listed in source, adds new fields
   * and replaces existent fields. Note that you must supply the full definition for
   * a field - this command will not partially modify a field’s definition.
   *
   * @example
   * await collection.schema.fields.update({
   *   name: 'test_field_1',
   * });
   * @public
   */
  async update(fields: MaybeCollection<SolrCollectionSchemaAddFieldParams>) {
    const fieldsByName = keyBy(castArray(fields), 'name');
    const fieldNames = Object.keys(fieldsByName);

    const prevUnfilteredFields = await this.list();
    const prevFields = prevUnfilteredFields.filter(
      (field) => !field.name.startsWith('_')
    );
    const prevFieldsByName = keyBy(prevFields, 'name');
    const prevFieldNames = Object.keys(prevFieldsByName);

    const fieldNamesToReplace = intersection(fieldNames, prevFieldNames).filter(
      (filedName) => {
        return !isMatch(
          (prevFieldsByName as any)[filedName],
          (fieldsByName as any)[filedName]
        );
      }
    );
    const fieldNamesToAdd = difference(fieldNames, prevFieldNames);
    const fieldNamesToDelete = difference(prevFieldNames, fieldNames).filter(
      (name) => name !== 'id'
    );

    await this.schema.request<SolrCollectionSchemaPostRequest>({
      method: 'post',
      data: {
        'delete-field': fieldNamesToDelete.map((name) => ({ name })),
        'add-field': fieldNamesToAdd.map(
          (name) => fieldsByName[name]
        ) as SolrCollectionSchemaAddFieldParams[],
        'replace-field': fieldNamesToReplace.map(
          (name) => fieldsByName[name]
        ) as SolrCollectionSchemaAddFieldParams[],
      },
      params: {
        commit: this.schema.collection.options.autoCommit,
      },
    });
  }
}
