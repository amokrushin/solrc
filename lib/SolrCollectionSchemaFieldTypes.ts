import castArray                                      from 'lodash/castArray';
import pickFp                                         from 'lodash/fp/pick';
import { SolrCollectionSchemaGetRequest }             from './generated';
import { SolrCollectionSchemaReplaceFieldTypeParams } from './generated';
import { SolrCollectionSchemaDeleteFieldTypeParams }  from './generated';
import { SolrCollectionSchemaAddFieldTypeParams }     from './generated';
import { SolrCollectionSchemaPostRequest }            from './generated';
import type { SolrCollectionSchema }                  from './SolrCollectionSchema';
import { MaybeCollection }                            from './types';
import type { SolrFieldTypeDefinition }               from './types';
import type { SolrResponse }                          from './types';


export interface SolrSchemaFieldTypesResponse extends SolrResponse {
    fieldTypes: SolrFieldTypeDefinition[];
}

export class SolrCollectionSchemaFieldTypes {
    /**
     * @protected
     */
    static defaultFieldProperties: Omit<SolrCollectionSchemaAddFieldTypeParams, 'name' | 'class'> = {};

    /**
     * @protected
     */
    schema: SolrCollectionSchema;

    /**
     * @hidden
     */
    constructor(schema) {
        this.schema = schema;
    }

    /**
     * List schema field types
     *
     * @example
     * const fields = await collection.schema.fieldTypes.list();
     * @see {@link https://lucene.apache.org/solr/guide/schema-api.html#list-field-types}
     * @public
     */
    async list() {
        const { fieldTypes } = await this.schema.request<SolrCollectionSchemaGetRequest, object, SolrSchemaFieldTypesResponse>({
            method: 'get',
            endpoint: '/fieldtypes',
        });

        return fieldTypes;
    }

    /**
     * Add a field type
     *
     * @example
     * await collection.schema.fieldTypes.add({
     *   name: 'test_field_type_1',
     * });
     * @see {@link https://lucene.apache.org/solr/guide/field-type-definitions-and-properties.html#general-properties}
     * @public
     */
    async add(filedTypes: MaybeCollection<SolrCollectionSchemaAddFieldTypeParams>) {
        return this.schema.request<SolrCollectionSchemaPostRequest>({
            method: 'post',
            data: {
                'add-field-type': castArray(filedTypes).map((fieldType) => ({
                    ...SolrCollectionSchemaFieldTypes.defaultFieldProperties,
                    ...fieldType,
                })),
            },
            params: {
                commit: this.schema.collection.options.autoCommit,
            },
        });
    }

    /**
     * Delete field types.
     * The delete-field-type command removes a field type from your schema. If the field type
     * does not exist in the schema, or if any field or dynamic field rule in the schema uses
     * the field type, an error is thrown.
     *
     * @example
     * // For example, to delete the field type named "myNewTxtField", you can make a POST request as follows:
     * await collection.schema.fieldTypes.delete({
     *   name: 'myNewTxtField',
     * });
     * @see {@link https://lucene.apache.org/solr/guide/schema-api.html#delete-a-field-type}
     * @public
     */
    async delete(fieldTypes: MaybeCollection<Pick<SolrCollectionSchemaDeleteFieldTypeParams, 'name'>>) {
        return this.schema.request<SolrCollectionSchemaPostRequest>({
            method: 'post',
            data: {
                'delete-field-type': castArray(fieldTypes).map(pickFp(['name'])),
            },
            params: {
                commit: this.schema.collection.options.autoCommit,
            },
        });
    }

    /**
     * Replace field types
     * @public
     */
    async replace(fieldTypes: MaybeCollection<SolrCollectionSchemaReplaceFieldTypeParams>) {
        await this.schema.request<SolrCollectionSchemaPostRequest>({
            method: 'post',
            data: {
                'replace-field-type': castArray(fieldTypes).map((fieldType) => ({
                    ...SolrCollectionSchemaFieldTypes.defaultFieldProperties,
                    ...fieldType,
                })),
            },
            params: {
                commit: this.schema.collection.options.autoCommit,
            },
        });
    }
}
