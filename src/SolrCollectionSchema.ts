import { SolrCollectionSchemaGetRequest } from './introspected';
import { SolrRequestParams } from './SolrClient';
import type { SolrCollection } from './SolrCollection';
import { SolrCollectionSchemaCopyFields } from './SolrCollectionSchemaCopyFields';
import { SolrCollectionSchemaFields } from './SolrCollectionSchemaFields';
import { SolrCollectionSchemaFieldTypes } from './SolrCollectionSchemaFieldTypes';
import type { SolrResponse } from './types';
import type { SolrSchemaDefinition } from './types';

export interface SolrCollectionSchemaResponse extends SolrResponse {
  schema: SolrSchemaDefinition;
}

export type SolrCollectionSchemaParams = {
  collection: SolrCollection;
};

export class SolrCollectionSchema {
  /**
   * @public
   */
  fields: SolrCollectionSchemaFields;
  /**
   * @public
   */
  copyFields: SolrCollectionSchemaCopyFields;
  /**
   * @public
   */
  fieldTypes: SolrCollectionSchemaFieldTypes;

  /**
   * @protected
   */
  collection: SolrCollection;

  /**
   * @hidden
   */
  constructor(collection: SolrCollection) {
    this.collection = collection;

    this.fields = new SolrCollectionSchemaFields(this);
    Object.defineProperty(this, 'fields', { writable: false });

    this.copyFields = new SolrCollectionSchemaCopyFields(this);
    Object.defineProperty(this, 'copyFields', { writable: false });

    this.fieldTypes = new SolrCollectionSchemaFieldTypes(this);
    Object.defineProperty(this, 'fieldTypes', { writable: false });
  }

  /**
   * Request a `/collections/{collection}/schema` endpoint
   *
   * @protected
   */
  async request<D = object, P = object, R = unknown>(
    params: SolrRequestParams<D, P>
  ): Promise<R> {
    const { endpoint = '' } = params;

    return this.collection.request({
      ...params,
      endpoint: `/schema${endpoint}`,
    });
  }

  /**
   * Retrieve the entire schema information.
   * The following endpoints allow you to read how your schema has been defined.
   *
   * @see {@link https://lucene.apache.org/solr/guide/schema-api.html#retrieve-the-entire-schema}
   * @public
   */
  async read() {
    const { schema } = await this.collection.request<
      SolrCollectionSchemaGetRequest,
      object,
      SolrCollectionSchemaResponse
    >({
      endpoint: `/schema`,
    });
    return schema;
  }
}
