import assert from 'assert';
import dotenv from 'dotenv';
import find from 'lodash/find.js';
import isMatch from 'lodash/isMatch.js';
import some from 'lodash/some.js';
import sortBy from 'lodash/sortBy.js';
import process from 'process';
import { SolrClient } from '../../src/index.js';

dotenv.config();

const solr = new SolrClient({
  host: process.env.SOLR_HOST || 'localhost',
  port: Number(process.env.SOLR_PORT) || 8983,
  protocol: process.env.SOLR_PROTOCOL || 'http',
  username: process.env.SOLR_USERNAME || undefined,
  password: process.env.SOLR_PASSWORD || undefined,
});

async function main() {
  const name = `demo_${Date.now()}`;

  console.log('\nCreate collection', name);
  // Create collection
  const collection = solr.collections.get(name, { autoCommit: false });
  await collection.create();

  // Disable autoCreateFields
  await collection.config.setUserProperty('update.autoCreateFields', false);

  // Ping connection
  await collection.admin.ping();
  console.log('OK');

  /*
   * Schema
   */
  console.log('Manage schema');
  // Update collection schema
  await collection.schema.fields.add([
    {
      name: 'foo',
      type: 'string',
    },
    {
      name: 'bar',
      type: 'string',
    },
    {
      name: 'baz',
      type: 'string',
    },
    {
      name: 'multi',
      type: 'string',
      multiValued: true,
    },
  ]);
  await collection.schema.copyFields.add([
    {
      source: 'foo',
      dest: ['bar', 'baz'],
    },
  ]);
  console.log('OK');

  /*
   * Docs
   */
  console.log('Manage docs');
  // Add documents
  await collection.docs.update([
    {
      id: 1,
      foo: 'bar',
      multi: ['a', 'b'],
    },
    {
      id: 2,
      foo: 'baz',
      multi: ['c', 'd'],
    },
  ]);
  // One more document
  await collection.docs.update({
    id: 3,
    foo: 'bak',
    multi: ['e', 'f'],
  });
  // Delete one document
  await collection.docs.deleteById(2);
  // Update one document
  await collection.docs.update({
    id: 3,
    multi: null,
  });
  // Commit changes
  await collection.commit();
  console.log('OK');

  /*
   * Query
   */
  console.log('Query docs');
  const { docs } = await collection.query({
    query: '*:*',
  });
  assert(
    isMatch(sortBy(docs, 'id'), [
      {
        id: '1',
        foo: 'bar',
        bar: 'bar',
        baz: 'bar',
        multi: ['a', 'b'],
      },
      { id: '3' },
    ])
  );
  console.log('OK');

  /*
   * Alias
   */
  console.log('Create alias');
  await collection.createAlias({
    name: 'demo',
  });
  const aliases1 = await solr.collections.listAliases();
  assert(find(aliases1, ['name', 'demo'])?.collection === name);
  console.log('OK');

  console.log('Delete alias');
  await solr.collections.deleteAlias({
    name: 'demo',
  });
  const aliases2 = await solr.collections.listAliases();
  assert(!some(aliases2, ['name', 'demo']));
  console.log('OK');

  /*
   * Collection
   */
  console.log('Delete collection');
  await collection.delete();
  const collectionNames = await solr.collections.listNames();
  assert(!some(collectionNames, name));
  console.log('OK');
}

main().catch(console.error);
