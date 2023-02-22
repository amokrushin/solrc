import { SolrResponseHeader } from '../types/index.js';

/**
 * @version Solr 9.x
 */
export interface SolrCollectionsBackupsListBackupsResponse {
  responseHeader: SolrResponseHeader;
  collection: string;
  backups: {
    indexFileCount: number;
    indexSizeMB: number;
    shardBackupIds: { [k: string]: string };
    'collection.configName': string;
    backupId: number;
    collectionAlias: string;
    startTime: string;
    indexVersion: string;
    endTime: string;
  }[];
}
