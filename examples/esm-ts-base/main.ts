import dotenv from 'dotenv';
import process from 'process';
import { SolrClient } from '../../src';

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
  ]);

  await collection.schema.copyFields.add([
    {
      source: 'foo',
      dest: ['bar', 'baz'],
    },
  ]);

  // Add documents
  await collection.docs.update([
    {
      id: 1,
      foo: 'bar',
    },
    {
      id: 2,
      foo: 'baz',
    },
  ]);

  // One more document
  await collection.docs.update({
    id: 3,
    foo: 'bak',
  });

  // Commit changes
  await collection.commit();

  // Query docs
  const res = await collection.query({
    query: '*:*',
  });

  // Print found docs
  console.log('\nFound docs');
  console.dir(res, { colors: true, depth: 4 });

  /*
   * Alias
   */

  // Create alias
  await collection.createAlias({
    name: 'demo',
  });

  // List aliases
  const aliases = await solr.collections.listAliases();
  console.log('\naliases');
  console.dir(aliases, { colors: true, depth: 1 });

  await solr.collections.deleteAlias({
    name: 'demo',
  });

  // Delete collection
  await collection.delete();
}

main().catch(console.error);
