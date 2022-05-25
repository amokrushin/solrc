const dotenv = require('dotenv');
const { SolrClient } = require('solrc');

dotenv.config();

const solr = new SolrClient({
  host: process.env.SOLR_HOST || 'localhost',
  port: Number(process.env.SOLR_PORT) || 8983,
  protocol: process.env.SOLR_PROTOCOL || 'http',
  username: process.env.SOLR_USERNAME || undefined,
  password: process.env.SOLR_PASSWORD || undefined,
});

async function main() {
  const collectionNames = await solr.collections.listNames();
  console.log('collectionNames:', collectionNames);
}

main().catch(console.error);
