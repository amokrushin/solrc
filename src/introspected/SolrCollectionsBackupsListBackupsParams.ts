/*
 * Introspected endpoint: /collections/backups
 * Command: list-backups
 */

/**
 * @version Solr 9.x
 */
export interface SolrCollectionsBackupsListBackupsParams {
  /**
   * The name of the backups to list. The backup name usually corresponds to the collection-name, but isn’t required to.
   */
  name?: string;
  /**
   * The repository location to list backups from. This parameter is required, unless a default location is defined on the repository configuration, or set as a cluster property.
   *
   * If the location path is on a mounted drive, the mount must be available on the node that serves as the overseer, even if the overseer node does not host a replica of the collection being backed up. Since any node can take the overseer role at any time, a best practice to avoid possible backup failures is to ensure the mount point is available on all nodes of the cluster.
   *
   * This must be the same value as was given as the location option when creating the backup.
   */
  location?: string;
  /**
   * The name of a repository to be used for accessing backup information. If no repository is specified then the local filesystem repository will be used automatically.
   */
  repository?: string;
}
