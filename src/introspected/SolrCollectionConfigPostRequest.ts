import type { SolrCollectionConfigAddInitparamsParams } from './SolrCollectionConfigAddInitparamsParams.js';
import type { SolrCollectionConfigAddListenerParams } from './SolrCollectionConfigAddListenerParams.js';
import type { SolrCollectionConfigAddQueryconverterParams } from './SolrCollectionConfigAddQueryconverterParams.js';
import type { SolrCollectionConfigAddQueryparserParams } from './SolrCollectionConfigAddQueryparserParams.js';
import type { SolrCollectionConfigAddQueryresponsewriterParams } from './SolrCollectionConfigAddQueryresponsewriterParams.js';
import type { SolrCollectionConfigAddRequesthandlerParams } from './SolrCollectionConfigAddRequesthandlerParams.js';
import type { SolrCollectionConfigAddRuntimelibParams } from './SolrCollectionConfigAddRuntimelibParams.js';
import type { SolrCollectionConfigAddSearchcomponentParams } from './SolrCollectionConfigAddSearchcomponentParams.js';
import type { SolrCollectionConfigAddTransformerParams } from './SolrCollectionConfigAddTransformerParams.js';
import type { SolrCollectionConfigAddUpdateprocessorParams } from './SolrCollectionConfigAddUpdateprocessorParams.js';
import type { SolrCollectionConfigAddValuesourceparserParams } from './SolrCollectionConfigAddValuesourceparserParams.js';
import type { SolrCollectionConfigDeleteInitparamsParams } from './SolrCollectionConfigDeleteInitparamsParams.js';
import type { SolrCollectionConfigDeleteListenerParams } from './SolrCollectionConfigDeleteListenerParams.js';
import type { SolrCollectionConfigDeleteQueryconverterParams } from './SolrCollectionConfigDeleteQueryconverterParams.js';
import type { SolrCollectionConfigDeleteQueryparserParams } from './SolrCollectionConfigDeleteQueryparserParams.js';
import type { SolrCollectionConfigDeleteQueryresponsewriterParams } from './SolrCollectionConfigDeleteQueryresponsewriterParams.js';
import type { SolrCollectionConfigDeleteRequesthandlerParams } from './SolrCollectionConfigDeleteRequesthandlerParams.js';
import type { SolrCollectionConfigDeleteRuntimelibParams } from './SolrCollectionConfigDeleteRuntimelibParams.js';
import type { SolrCollectionConfigDeleteSearchcomponentParams } from './SolrCollectionConfigDeleteSearchcomponentParams.js';
import type { SolrCollectionConfigDeleteTransformerParams } from './SolrCollectionConfigDeleteTransformerParams.js';
import type { SolrCollectionConfigDeleteUpdateprocessorParams } from './SolrCollectionConfigDeleteUpdateprocessorParams.js';
import type { SolrCollectionConfigDeleteValuesourceparserParams } from './SolrCollectionConfigDeleteValuesourceparserParams.js';
import type { SolrCollectionConfigSetPropertyParams } from './SolrCollectionConfigSetPropertyParams.js';
import type { SolrCollectionConfigUnsetPropertyParams } from './SolrCollectionConfigUnsetPropertyParams.js';
import type { SolrCollectionConfigUpdateInitparamsParams } from './SolrCollectionConfigUpdateInitparamsParams.js';
import type { SolrCollectionConfigUpdateListenerParams } from './SolrCollectionConfigUpdateListenerParams.js';
import type { SolrCollectionConfigUpdateQueryconverterParams } from './SolrCollectionConfigUpdateQueryconverterParams.js';
import type { SolrCollectionConfigUpdateQueryparserParams } from './SolrCollectionConfigUpdateQueryparserParams.js';
import type { SolrCollectionConfigUpdateQueryresponsewriterParams } from './SolrCollectionConfigUpdateQueryresponsewriterParams.js';
import type { SolrCollectionConfigUpdateRequesthandlerParams } from './SolrCollectionConfigUpdateRequesthandlerParams.js';
import type { SolrCollectionConfigUpdateRuntimelibParams } from './SolrCollectionConfigUpdateRuntimelibParams.js';
import type { SolrCollectionConfigUpdateSearchcomponentParams } from './SolrCollectionConfigUpdateSearchcomponentParams.js';
import type { SolrCollectionConfigUpdateTransformerParams } from './SolrCollectionConfigUpdateTransformerParams.js';
import type { SolrCollectionConfigUpdateUpdateprocessorParams } from './SolrCollectionConfigUpdateUpdateprocessorParams.js';
import type { SolrCollectionConfigUpdateValuesourceparserParams } from './SolrCollectionConfigUpdateValuesourceparserParams.js';

export interface SolrCollectionConfigPostRequest {
  'set-property:'?: SolrCollectionConfigSetPropertyParams;
  'unset-property'?: SolrCollectionConfigUnsetPropertyParams;
  'add-requesthandler'?: SolrCollectionConfigAddRequesthandlerParams;
  'update-requesthandler'?: SolrCollectionConfigUpdateRequesthandlerParams;
  'delete-requesthandler'?: SolrCollectionConfigDeleteRequesthandlerParams;
  'add-searchcomponent'?: SolrCollectionConfigAddSearchcomponentParams;
  'update-searchcomponent'?: SolrCollectionConfigUpdateSearchcomponentParams;
  'delete-searchcomponent'?: SolrCollectionConfigDeleteSearchcomponentParams;
  'add-initparams'?: SolrCollectionConfigAddInitparamsParams;
  'update-initparams'?: SolrCollectionConfigUpdateInitparamsParams;
  'delete-initparams'?: SolrCollectionConfigDeleteInitparamsParams;
  'add-queryresponsewriter'?: SolrCollectionConfigAddQueryresponsewriterParams;
  'update-queryresponsewriter'?: SolrCollectionConfigUpdateQueryresponsewriterParams;
  'delete-queryresponsewriter'?: SolrCollectionConfigDeleteQueryresponsewriterParams;
  'add-queryparser'?: SolrCollectionConfigAddQueryparserParams;
  'update-queryparser'?: SolrCollectionConfigUpdateQueryparserParams;
  'delete-queryparser'?: SolrCollectionConfigDeleteQueryparserParams;
  'add-valuesourceparser'?: SolrCollectionConfigAddValuesourceparserParams;
  'update-valuesourceparser'?: SolrCollectionConfigUpdateValuesourceparserParams;
  'delete-valuesourceparser'?: SolrCollectionConfigDeleteValuesourceparserParams;
  'add-transformer'?: SolrCollectionConfigAddTransformerParams;
  'update-transformer'?: SolrCollectionConfigUpdateTransformerParams;
  'delete-transformer'?: SolrCollectionConfigDeleteTransformerParams;
  'add-updateprocessor'?: SolrCollectionConfigAddUpdateprocessorParams;
  'update-updateprocessor'?: SolrCollectionConfigUpdateUpdateprocessorParams;
  'delete-updateprocessor'?: SolrCollectionConfigDeleteUpdateprocessorParams;
  'add-queryconverter'?: SolrCollectionConfigAddQueryconverterParams;
  'update-queryconverter'?: SolrCollectionConfigUpdateQueryconverterParams;
  'delete-queryconverter'?: SolrCollectionConfigDeleteQueryconverterParams;
  'add-listener'?: SolrCollectionConfigAddListenerParams;
  'update-listener'?: SolrCollectionConfigUpdateListenerParams;
  'delete-listener'?: SolrCollectionConfigDeleteListenerParams;
  /**
   * @version Solr 8.x
   */
  'add-runtimelib'?: SolrCollectionConfigAddRuntimelibParams;
  /**
   * @version Solr 8.x
   */
  'update-runtimelib'?: SolrCollectionConfigUpdateRuntimelibParams;
  /**
   * @version Solr 8.x
   */
  'delete-runtimelib'?: SolrCollectionConfigDeleteRuntimelibParams;
}
