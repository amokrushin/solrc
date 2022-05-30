import assert from 'assert';
import { boolean } from 'boolean';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import { JSONSchema4 } from 'json-schema';
import { compile } from 'json-schema-to-typescript';
import traverse from 'json-schema-traverse';
import camelCase from 'lodash/camelCase';
import difference from 'lodash/difference';
import upperFirst from 'lodash/upperFirst';
import Path from 'path';
import process from 'process';
import shell from 'shelljs';
import { SolrClientParams } from '../src';
import { SolrClient } from '../src';

dotenv.config();

// prettier-ignore
const endpoints = {
  '/collections': 'SolrCollections',
  '/collections/{collection}': 'SolrCollection',
  '/collections/{collection}/admin/ping': 'SolrCollectionAdmin', // not implemented in v2
  '/collections/{collection}/config': 'SolrCollectionConfig',
  '/collections/{collection}/config/jmx': 'SolrCollectionConfigJmx',
  '/collections/{collection}/config/overlay': 'SolrCollectionConfigOverlay',
  '/collections/{collection}/config/params': 'SolrCollectionConfigParams',
  '/collections/{collection}/config/params/{params_set}': 'SolrCollectionConfigParamsSet',
  '/collections/{collection}/config/query': 'SolrCollectionConfigQuery',
  '/collections/{collection}/config/requestDispatcher': 'SolrCollectionConfigRequestDispatcher',
  '/collections/{collection}/config/znodeVersion': 'SolrCollectionConfigZnodeVersion',
  '/collections/{collection}/config/{plugin}': 'SolrCollectionConfigPlugin',
  '/collections/{collection}/export': 'SolrCollectionExport',
  '/collections/{collection}/get': 'SolrCollectionGet',
  '/collections/{collection}/node/health': 'SolrCollectionNodeHealth',
  '/collections/{collection}/node/properties': 'SolrCollectionNodeProperties',
  '/collections/{collection}/node/threads': 'SolrCollectionNodeThreads',
  '/collections/{collection}/node/system': 'SolrCollectionNodeSystem',
  '/collections/{collection}/schema': 'SolrCollectionSchema',
  '/collections/{collection}/schema/copyfields': 'SolrCollectionSchemaCopyFields',
  '/collections/{collection}/schema/dynamicfields': 'SolrCollectionSchemaDynamicFields',
  '/collections/{collection}/schema/dynamicfields/{name}': 'SolrCollectionSchemaDynamicFieldsName',
  '/collections/{collection}/schema/name': 'SolrCollectionSchemaName',
  '/collections/{collection}/schema/fields': 'SolrCollectionSchemaFields',
  '/collections/{collection}/schema/fields/{name}': 'SolrCollectionSchemaField',
  '/collections/{collection}/schema/fieldtypes': 'SolrCollectionSchemaFieldTypes',
  '/collections/{collection}/schema/fieldtypes/{name}': 'SolrCollectionSchemaFieldType',
  '/collections/{collection}/schema/similarity': 'SolrCollectionSchemaSimilarity',
  '/collections/{collection}/schema/solrqueryparser': 'SolrCollectionSchemaSolrQueryParser',
  '/collections/{collection}/schema/uniquekey': 'SolrCollectionSchemaUniqueKey',
  '/collections/{collection}/schema/version': 'SolrCollectionSchemaVersion',
  '/collections/{collection}/schema/zkversion': 'SolrCollectionSchemaZkVersion',
  '/collections/{collection}/select': 'SolrCollectionSelect',
  '/collections/{collection}/shards': 'SolrCollectionShards',
  '/collections/{collection}/shards/{shard}': 'SolrCollectionShard',
  '/collections/{collection}/shards/{shard}/{replica}': 'SolrCollectionShardReplica',
  '/collections/{collection}/tasks/cancel': 'SolrCollectionTasksCancel',
  '/collections/{collection}/tasks/list': 'SolrCollectionTasksList',
  '/collections/{collection}/terms': 'SolrCollectionTerms',
  '/collections/{collection}/query': 'SolrCollectionQuery',
  '/collections/{collection}/update': 'SolrCollectionUpdate',
  '/collections/{collection}/update/bin': 'SolrCollectionUpdateBin',
  '/collections/{collection}/update/csv': 'SolrCollectionUpdateCsv',
  '/collections/{collection}/update/json': 'SolrCollectionUpdateJson',
  '/collections/{collection}/update/json/commands': 'SolrCollectionUpdateJsonCommands',
  '/collections/{collection}/update/xml': 'SolrCollectionUpdateXml',
  '/collections/backups': 'SolrCollectionsBackups',
  '/collections/backups/shards/{shard}': 'SolrCollectionsBackupsShard',
  '/collections/backups/shards/{shard}/{replica}': 'SolrCollectionsBackupsShardReplica',
};

const availableEndpoints = new Set();
const availableSubPaths = new Set();

type IntrospectParams = {
  outDir: string;
  solrClientParams: SolrClientParams;
};

interface IntrospectionResponse {
  spec: IntrospectionSpec[];
  availableSubPaths?: {
    [path: string]: string[];
  };
}

interface IntrospectionSpec {
  documentation: string;
  description: string;
  methods?: string[];
  url?: {
    paths: string[];
  };
  commands?: {
    [key: string]: unknown;
  };
}

const createBannerComment = (endpoint: string, command: string) => {
  return `
/*
 * Introspected endpoint: ${endpoint}
 * Command: ${command}
 */
`;
};

type CommandTypes = {
  [key: string]: string;
};

interface Params {
  (name: string, commandTypes: CommandTypes): string;
}

const maybeCollectionTypes = new Set([
  'SolrCollectionSchemaAddFieldParams',
  'SolrCollectionSchemaDeleteFieldParams',
  'SolrCollectionSchemaReplaceFieldParams',
  // 'SolrCollectionSchemaAddDynamicFieldParams',
  // 'SolrCollectionSchemaDeleteDynamicFieldParams',
  // 'SolrCollectionSchemaReplaceDynamicFieldParams',
  'SolrCollectionSchemaAddFieldTypeParams',
  'SolrCollectionSchemaDeleteFieldTypeParams',
  'SolrCollectionSchemaReplaceFieldTypeParams',
  'SolrCollectionSchemaAddCopyFieldParams',
  'SolrCollectionSchemaDeleteCopyFieldParams',
]);

const createRequestType: Params = (name, commandTypes) => {
  return [
    ...Object.values(commandTypes).map(
      (typeName) => `import type { ${typeName} } from './${typeName}';`
    ),
    '',
    `export interface ${name} {`,
    ...Object.entries(commandTypes).map(([command, commandType]) =>
      maybeCollectionTypes.has(commandType)
        ? `  '${command}'?: ${commandType} | ${commandType}[];`
        : `  '${command}'?: ${commandType};`
    ),
    '}',
  ]
    .join('\n')
    .concat('\n');
};

const fixDefaultValues = (schema: any) => {
  traverse(schema, (val: any) => {
    if (val.type === 'boolean' && typeof val.default === 'string') {
      val.default = boolean(val.default);
    }
    if (val.type === 'integer' && typeof val.default === 'string') {
      val.default = Number(val.default);
    }
  });
};

async function introspect(params: IntrospectParams): Promise<void> {
  assert(params.outDir && params.outDir.includes('solrc'));

  console.log('clean target dir', params.outDir);
  await shell.mkdir('-p', params.outDir);
  await shell.rm('-rf', `${params.outDir}/*`);

  const solr = new SolrClient(params.solrClientParams);

  const collectionName = `introspect_${Date.now()}`;
  const collection = solr.collections.get(collectionName);
  await collection.create();

  const index: string[] = [];

  for (const [endpointTemplate, namespace] of Object.entries(endpoints)) {
    const endpoint = endpointTemplate
      .replace('{collection}', collectionName)
      .concat('/_introspect');
    console.log('fetch', endpoint);
    let introspectionResult;
    try {
      introspectionResult = (await solr.request({
        endpoint,
      })) as IntrospectionResponse;
      if (introspectionResult.availableSubPaths) {
        Object.keys(introspectionResult.availableSubPaths).forEach((path) => {
          availableSubPaths.add(path.replace(collectionName, '{collection}'));
        });
      }
    } catch (introspectionError: any) {
      console.error(
        'introspection failed',
        endpoint,
        introspectionError?.message
      );
    }
    if (introspectionResult && Array.isArray(introspectionResult.spec)) {
      for (const spec of introspectionResult.spec) {
        const commandTypes: CommandTypes = {};
        if (spec?.commands) {
          for (const [command, schema] of Object.entries(spec.commands)) {
            fixDefaultValues(schema);
            const typeName = upperFirst(
              camelCase([namespace, command, 'Params'].join('-'))
            );
            try {
              const typedef = await compile(schema as JSONSchema4, typeName, {
                bannerComment: createBannerComment(endpointTemplate, command),
              });
              const path = Path.join(params.outDir, `${typeName}.ts`);
              index.push(typeName);
              await fs.writeFile(path, typedef);
              commandTypes[command] = typeName;
            } catch (compilationError: any) {
              console.error(
                'compilation failed',
                endpoint,
                compilationError?.message
              );
            }
          }
        }
        if (Array.isArray(spec?.methods) && spec.methods.length === 1) {
          const method = spec.methods[0];
          const typeName = upperFirst(
            camelCase([namespace, method, 'Request'].join('-'))
          );
          index.push(typeName);
          const path = Path.join(params.outDir, `${typeName}.ts`);
          const typedef = createRequestType(typeName, commandTypes);
          await fs.writeFile(path, typedef);
        }
        if (spec.url && Array.isArray(spec.url.paths)) {
          spec.url.paths.forEach((path) => {
            availableEndpoints.add(
              path
                .replace(collectionName, '{collection}')
                .replace('/c/', '/collections/')
                .replace(/\/c$/, '/collections')
            );
          });
        }
      }
    }
    // }
  }

  const indexFile = index
    .sort()
    .map((name) => `export * from './${name}';`)
    .join('\n');
  await fs.writeFile(Path.join(params.outDir, 'index.ts'), indexFile);
  await collection.delete();

  const introspectedEndpoints = Array.from(
    new Set([...availableEndpoints.keys(), ...availableSubPaths.keys()])
  );
  console.log('introspectedEndpoints');
  console.dir(introspectedEndpoints, { colors: true, depth: 2 });

  const newEndpoints = difference(
    introspectedEndpoints,
    Object.keys(endpoints)
  );
  console.log('newEndpoints');
  console.dir(newEndpoints, { colors: true, depth: 2 });
}

introspect({
  solrClientParams: {
    host: process.env.SOLR_HOST || 'localhost',
    port: Number(process.env.SOLR_PORT) || 8983,
    protocol: process.env.SOLR_PROTOCOL || 'http',
    username: process.env.SOLR_USERNAME || undefined,
    password: process.env.SOLR_PASSWORD || undefined,
  },
  outDir: Path.join(
    `${process.cwd()}`,
    `generated_${process.env.SOLR_VERSION?.replace('.', '')}`
  ),
}).catch(console.error);
