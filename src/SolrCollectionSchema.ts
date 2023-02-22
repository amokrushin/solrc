import { SolrCollectionSchemaGetRequest } from './introspected/index.js';
import { SolrRequestParams } from './SolrClient.js';
import type { SolrCollection } from './SolrCollection.js';
import { SolrCollectionSchemaCopyFields } from './SolrCollectionSchemaCopyFields.js';
import { SolrCollectionSchemaFields } from './SolrCollectionSchemaFields.js';
import { SolrCollectionSchemaFieldTypes } from './SolrCollectionSchemaFieldTypes.js';
import type { SolrResponse } from './types/index.js';
import type { SolrSchemaDefinition } from './types/index.js';

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
