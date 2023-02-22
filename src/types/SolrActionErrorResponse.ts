import { SolrActionError } from './SolrActionError.js';
import { SolrActionException } from './SolrActionException.js';
import { SolrResponse } from './SolrResponse.js';

export interface SolrActionErrorResponse extends SolrResponse {
  error?: SolrActionError;
  exception?: SolrActionException;
}
