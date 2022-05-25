/*
 * Introspected endpoint: /collections
 * Command: create-alias
 */

/**
 * Allows one or more collections to be known by another name (to include time partitioned collections). If this command is used on an existing alias, the existing alias will be replaced with the new collection details.
 */
export interface SolrCollectionsCreateAliasParams {
  /**
   * The alias name to be created.
   */
  name: string;
  /**
   * The list of collections to be known as this alias. Incompatible with any of the routing parameters. Either this parameter or a complete set of routing parameters is required.
   */
  collections?: string[];
  /**
   * Routing specific properties to define a time routed alias.  Do not specify 'collections' when creating a time routed alias.
   */
  router?: {
    /**
     * The type of routing to perform. Currently only 'time' is supported, and it's required.
     */
    name: string;
    /**
     * The date field name in incoming documents that is consulted to decide which collection the document should be routed to.
     */
    field?: string;
    /**
     * The earliest date/time in a document that may be indexed into this alias. Documents with values less than this will return an error. For time based routing this may be a date math expression.
     */
    start?: string;
    /**
     * A specification of the width of the interval for each partition collection. For time based routing this should be a date math expression fragment starting with the + character.
     */
    interval?: string;
    /**
     * How many milliseconds into the future to accept document. Documents with a value in router.field that is greater than now() + maxFutureMs will be rejected to avoid provisioning too much resources.
     */
    maxFutureMs?: number;
    /**
     * If a document arrives with a timestamp that is after the end time of the most recent collection minus this interval, then the next collection will be created asynchronously. Without this setting, collections are created synchronously when required by the document time stamp and thus block the flow of documents until the collection is created (possibly several seconds). Preemptive creation reduces these hiccups. If set to enough time (perhaps an hour or more) then if there are problems creating a collection, this window of time might be enough to take corrective action. However after a successful preemptive creation,  the collection is consuming resources without being used, and new documents will tend to be routed through it only to be routed elsewhere. Also, note that router.autoDeleteAge is currently evaluated relative to the date of a newly created collection, and so you may want to increase the delete age by the preemptive window amount so that the oldest collection isn't deleted too soon.
     */
    preemptiveCreateMath?: string;
    /**
     * A date math expressions yielding a time in the past. Collections covering a period of time entirely before this age will be automatically deleted.
     */
    autoDeleteAge?: string;
    /**
     * The maximum number of categories allowed for this alias.
     */
    maxCardinality?: number;
    /**
     * A regular expression that the value of the field specified by `router.field` must match before a corresponding collection will be created.
     */
    mustMatch?: string;
    /**
     * A list of router property sets to be used with router type Dimensional[foo,bar] where foo and bar are valid router type names (i.e. time or category). The order must correspond to the type specification in [] in the Dimensional type, so Dimensional[category,time] would require the first set of router properties to be valid for a category routed alias, and the second set to be valid for a time routed alias. In these sets of properties, router.name will be ignored in favor of the type specified in the top level Dimensional[] router.name
     */
    routerList?: {
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  /**
   * Optional timezone for use with any date math that may exist in other parameters.  Defaults to UTC.
   */
  TZ?: string;
  /**
   * The settings to use to create a collection for each new time partition. Most options from the collection create command are available, except for 'name', 'async' and 'waitForFinalState'.
   */
  'create-collection'?: {
    [k: string]: string | number;
  };
  /**
   * Defines a request ID that can be used to track this action after it's submitted. The action will be processed asynchronously.
   */
  async?: string;
}
