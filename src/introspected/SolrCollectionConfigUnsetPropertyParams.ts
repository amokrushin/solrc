/*
 * Introspected endpoint: /collections/{collection}/config
 * Command: unset-property
 */

/**
 * Removes one or more of several pre-defined properties. These properties set cache sizes and classes, commit rules, JMX settings, and request dispatcher settings. See the documentation for the list of properties that are supported. The value of the property does not need to be defined with the list of properties, only the name of the property.
 */
export type SolrCollectionConfigUnsetPropertyParams = string[];
