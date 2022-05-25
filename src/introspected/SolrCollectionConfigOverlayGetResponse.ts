export interface SolrCollectionConfigOverlayGetResponse {
  overlay: {
    znodeVersion: number;
    userProps: {
      [key: string]: string;
    };
  };
}
