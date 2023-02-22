import { SolrResponse } from './SolrResponse.js';

export interface SolrActionResponse extends SolrResponse {
  success?: {
    [key: string]: SolrResponse & {
      core?: string;
    };
  };
  warning?: string;
}
