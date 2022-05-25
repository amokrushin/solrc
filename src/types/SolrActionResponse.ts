import { SolrResponse } from './SolrResponse';

export interface SolrActionResponse extends SolrResponse {
  success?: {
    [key: string]: SolrResponse & {
      core?: string;
    };
  };
  warning?: string;
}
