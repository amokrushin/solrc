import { SolrActionError }     from './SolrActionError';
import { SolrActionException } from './SolrActionException';
import { SolrResponse }        from './SolrResponse';

export interface SolrActionErrorResponse extends SolrResponse {
    error?: SolrActionError;
    exception?: SolrActionException;
}
