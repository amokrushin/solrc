/*
 * Introspected endpoint: /collections/{collection}/config
 * Command: update-runtimelib
 */

/**
 * Allows you to register .jars that have been uploaded to the .system collection in Solr. Note that uploading the .jar must occur before using this API.
 * @version Solr 8.x
 */
export interface SolrCollectionConfigUpdateRuntimelibParams {
  /**
   * The name of the .jar blob in .system collection. This is the name you provided when you uploaded it.
   */
  name: string;
  /**
   * The version of the blob in .system collection. Be sure to use the correct version if you have multiple versions of the same .jar uploaded.
   */
  version: number;
  /**
   * The sha1 signature of the .jar, if it was signed before uploading. If you signed the sha1 digest of your .jar file prior to uploading it to the .system collection, this is where you need to provide the signature.
   */
  sig?: string;
}
