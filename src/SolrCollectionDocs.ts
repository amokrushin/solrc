import ary from 'lodash/ary';
import map from 'lodash/map';
import { Writable } from 'stream';
import { WritableOptions } from 'stream';
import type { SolrCollection } from './SolrCollection';
import { SolrDoc } from './types';
import { castArray } from './utils/generic';

type SolrDeleteDef = string | string[] | { query: string };

export class SolrCollectionDocs {
  /**
   * @protected
   */
  collection: SolrCollection;

  /**
   * @hidden
   */
  constructor(collection: SolrCollection) {
    this.collection = collection;
  }

  /**
   * Updates collection documents
   *
   * @example
   * await collection.docs.update([
   *   {
   *     id: 1,
   *     foo: 'bar'
   *   },
   *   {
   *     id: 2,
   *     foo: 'baz'
   *   },
   * ]);
   */
  async update(docs: SolrDoc | SolrDoc[]) {
    await this.collection.request({
      method: 'post',
      endpoint: `/update/json/commands`,
      data: {
        add: castArray(docs),
      },
      params: { commit: this.collection.options.autoCommit },
    });
  }

  /**
   * @param {string[]|number[]|Object[]|Object} deleteDef
   * @returns {Promise<*>}
   * @private
   */
  async delete(deleteDef: SolrDeleteDef) {
    await this.collection.request({
      method: 'post',
      endpoint: '/update',
      data: {
        delete: deleteDef,
      },
      params: { commit: this.collection.options.autoCommit },
      apiVersion: 'v1',
    });
  }

  /**
   * Deletes collection document by query.
   *
   * @example
   * await collection.docs.deleteByQuery('*:*');
   */
  async deleteByQuery(query: string) {
    await this.delete({ query });
  }

  /**
   * Deletes collection document by id.
   *
   * @example
   * await collection.docs.deleteById([1, 2]);
   */
  async deleteById(ids: string | string[] | number | number[]) {
    await this.delete(castArray(ids).filter(Boolean).map(String));
  }

  /**
   * Deletes all collection documents.
   *
   * @example
   * await collection.docs.deleteAll();
   */
  async deleteAll() {
    await this.deleteByQuery('*:*');
  }

  /**
   * Create collection documents writeable stream.
   *
   * @example
   * const collectionWriteableStream = collection.docs.createWritableStream();
   */
  createWritableStream(options?: Omit<WritableOptions, 'objectMode'>) {
    const collection = this.collection;

    return new Writable({
      highWaterMark: 1000,
      ...options,
      objectMode: true,
      write(doc, encoding, callback) {
        collection.docs.update(doc).catch(callback).finally(ary(callback, 0));
      },
      writev(chunks, callback) {
        const docs = map(chunks, 'chunk');
        collection.docs.update(docs).catch(callback).finally(ary(callback, 0));
      },
      final(callback) {
        collection.commit().catch(callback).finally(ary(callback, 0));
      },
    });
  }
}
