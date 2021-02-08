/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 *
 * Introspected endpoint: /collections/{collection}/config
 * Command: update-searchcomponent
 */

export interface SolrCollectionConfigUpdateSearchcomponentParams {
  /**
   * The name of this configuration item. This name will be used to update or remove this later if necessary.
   */
  name: string;
  /**
   * The configuration item class. Class names do not need to be fully qualified if they are included with Solr, so you can abbreviate the name as 'solr.SearchHandler'. Custom or third-party class names may need to be fully qualified, however.
   */
  class: string;
  /**
   * An optional parameter to use a custom .jar file that has been uploaded to Solr's blobstore. This additionally requires that the .jar has also been registered with the 'add-runtimelib' command, which is one of the available commands for the Config API.
   */
  runtimeLib?: boolean;
  [k: string]: unknown;
}
