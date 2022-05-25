export interface SolrResponseHeader {
  status: number;
  QTime: number;
}

export interface SolrResponse {
  responseHeader: SolrResponseHeader;
}
