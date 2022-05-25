import { SolrResponse } from '../types';

/**
 * @version @version Solr 8.x, 9.x
 */
export interface SolrCollectionGetResponse extends SolrResponse {
  cluster: {
    collections: {
      [key: string]: {
        pullReplicas: string;
        replicationFactor: string;
        shards: {
          [key: string]: {
            range: string;
            state: string;
            replicas: {
              [key: string]: {
                core: string;
                base_url: string;
                node_name: string;
                state: string;
                type: string;
                force_set_state: string;
                leader: string;
              };
            };
          };
        };
        router: {
          name: string;
        };
        maxShardsPerNode: string;
        autoAddReplicas: string;
        nrtReplicas: string;
        tlogReplicas: string;
        znodeVersion: number;
        aliases?: string[];
        configName: string;
      };
    };
    aliases?: {
      [key: string]: string;
    };
    live_nodes?: string[];
  };
}
