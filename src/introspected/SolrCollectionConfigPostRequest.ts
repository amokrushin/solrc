import type { SolrCollectionConfigAddInitparamsParams } from './SolrCollectionConfigAddInitparamsParams';
import type { SolrCollectionConfigAddListenerParams } from './SolrCollectionConfigAddListenerParams';
import type { SolrCollectionConfigAddQueryconverterParams } from './SolrCollectionConfigAddQueryconverterParams';
import type { SolrCollectionConfigAddQueryparserParams } from './SolrCollectionConfigAddQueryparserParams';
import type { SolrCollectionConfigAddQueryresponsewriterParams } from './SolrCollectionConfigAddQueryresponsewriterParams';
import type { SolrCollectionConfigAddRequesthandlerParams } from './SolrCollectionConfigAddRequesthandlerParams';
import type { SolrCollectionConfigAddRuntimelibParams } from './SolrCollectionConfigAddRuntimelibParams';
import type { SolrCollectionConfigAddSearchcomponentParams } from './SolrCollectionConfigAddSearchcomponentParams';
import type { SolrCollectionConfigAddTransformerParams } from './SolrCollectionConfigAddTransformerParams';
import type { SolrCollectionConfigAddUpdateprocessorParams } from './SolrCollectionConfigAddUpdateprocessorParams';
import type { SolrCollectionConfigAddValuesourceparserParams } from './SolrCollectionConfigAddValuesourceparserParams';
import type { SolrCollectionConfigDeleteInitparamsParams } from './SolrCollectionConfigDeleteInitparamsParams';
import type { SolrCollectionConfigDeleteListenerParams } from './SolrCollectionConfigDeleteListenerParams';
import type { SolrCollectionConfigDeleteQueryconverterParams } from './SolrCollectionConfigDeleteQueryconverterParams';
import type { SolrCollectionConfigDeleteQueryparserParams } from './SolrCollectionConfigDeleteQueryparserParams';
import type { SolrCollectionConfigDeleteQueryresponsewriterParams } from './SolrCollectionConfigDeleteQueryresponsewriterParams';
import type { SolrCollectionConfigDeleteRequesthandlerParams } from './SolrCollectionConfigDeleteRequesthandlerParams';
import type { SolrCollectionConfigDeleteRuntimelibParams } from './SolrCollectionConfigDeleteRuntimelibParams';
import type { SolrCollectionConfigDeleteSearchcomponentParams } from './SolrCollectionConfigDeleteSearchcomponentParams';
import type { SolrCollectionConfigDeleteTransformerParams } from './SolrCollectionConfigDeleteTransformerParams';
import type { SolrCollectionConfigDeleteUpdateprocessorParams } from './SolrCollectionConfigDeleteUpdateprocessorParams';
import type { SolrCollectionConfigDeleteValuesourceparserParams } from './SolrCollectionConfigDeleteValuesourceparserParams';
import type { SolrCollectionConfigSetPropertyParams } from './SolrCollectionConfigSetPropertyParams';
import type { SolrCollectionConfigUnsetPropertyParams } from './SolrCollectionConfigUnsetPropertyParams';
import type { SolrCollectionConfigUpdateInitparamsParams } from './SolrCollectionConfigUpdateInitparamsParams';
import type { SolrCollectionConfigUpdateListenerParams } from './SolrCollectionConfigUpdateListenerParams';
import type { SolrCollectionConfigUpdateQueryconverterParams } from './SolrCollectionConfigUpdateQueryconverterParams';
import type { SolrCollectionConfigUpdateQueryparserParams } from './SolrCollectionConfigUpdateQueryparserParams';
import type { SolrCollectionConfigUpdateQueryresponsewriterParams } from './SolrCollectionConfigUpdateQueryresponsewriterParams';
import type { SolrCollectionConfigUpdateRequesthandlerParams } from './SolrCollectionConfigUpdateRequesthandlerParams';
import type { SolrCollectionConfigUpdateRuntimelibParams } from './SolrCollectionConfigUpdateRuntimelibParams';
import type { SolrCollectionConfigUpdateSearchcomponentParams } from './SolrCollectionConfigUpdateSearchcomponentParams';
import type { SolrCollectionConfigUpdateTransformerParams } from './SolrCollectionConfigUpdateTransformerParams';
import type { SolrCollectionConfigUpdateUpdateprocessorParams } from './SolrCollectionConfigUpdateUpdateprocessorParams';
import type { SolrCollectionConfigUpdateValuesourceparserParams } from './SolrCollectionConfigUpdateValuesourceparserParams';

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
