import { SolrResponse } from '../types';

export interface SolrCollectionConfigGetResponse extends SolrResponse {
  config: {
    znodeVersion: number;
    luceneMatchVersion: string;
    updateHandler: {
      commitWithin: { softCommit: boolean };
      autoCommit: { maxTime: number; maxDocs: number; openSearcher: boolean };
      autoSoftCommit: { maxDocs: number; maxTime: number };
    };
    query: {
      useFilterForSortedQuery: boolean;
      queryResultWindowSize: number;
      queryResultMaxDocsCached: number;
      enableLazyFieldLoading: boolean;
      maxBooleanClauses: number;
      filterCache: {
        autowarmCount: string;
        name: string;
        size: string;
        initialSize: string;
      };
      queryResultCache: {
        autowarmCount: string;
        name: string;
        size: string;
        initialSize: string;
      };
      documentCache: {
        autowarmCount: string;
        name: string;
        size: string;
        initialSize: string;
      };
      fieldValueCache: {
        name: string;
        size: string;
        showItems: string;
        initialSize: string;
      };
    };
    requestHandler: {
      '/select': {
        name: string;
        class: string;
        defaults: { rows: number; echoParams: string };
      };
      '/query': {
        name: string;
        class: string;
        defaults: { echoParams: string; wt: string; indent: string };
      };
      '/spell': {
        startup: string;
        name: string;
        class: string;
        'last-components': string[];
        defaults: {
          'spellcheck.dictionary': string;
          spellcheck: string;
          'spellcheck.extendedResults': string;
          'spellcheck.count': string;
          'spellcheck.alternativeTermCount': string;
          'spellcheck.maxResultsForSuggest': string;
          'spellcheck.collate': string;
          'spellcheck.collateExtendedResults': string;
          'spellcheck.maxCollationTries': string;
          'spellcheck.maxCollations': string;
        };
      };
      '/update': {
        useParams: string;
        class: string;
        name: string;
      };
      '/update/json': {
        useParams: string;
        class: string;
        invariants: { 'update.contentType': string };
        name: string;
      };
      '/update/csv': {
        useParams: string;
        class: string;
        invariants: { 'update.contentType': string };
        name: string;
      };
      '/update/json/docs': {
        useParams: string;
        class: string;
        invariants: {
          'update.contentType': string;
          'json.command': string;
        };
        name: string;
      };
      update: {
        class: string;
        useParams: string;
        name: string;
      };
      '/config': {
        useParams: string;
        class: string;
        name: string;
      };
      '/schema': {
        class: string;
        useParams: string;
        name: string;
      };
      '/replication': {
        class: string;
        useParams: string;
        name: string;
      };
      '/get': {
        class: string;
        useParams: string;
        defaults: { omitHeader: true };
        name: string;
      };
      '/admin/ping': {
        class: string;
        useParams: string;
        invariants: { echoParams: string; q: string };
        name: string;
      };
      '/admin/segments': {
        class: string;
        useParams: string;
        name: string;
      };
      '/admin/luke': {
        class: string;
        useParams: string;
        name: string;
      };
      '/admin/system': {
        class: string;
        useParams: string;
        name: string;
      };
      '/admin/mbeans': {
        class: string;
        useParams: string;
        name: string;
      };
      '/admin/plugins': {
        class: string;
        name: string;
      };
      '/admin/file': {
        class: string;
        useParams: string;
        name: string;
      };
      '/export': {
        class: string;
        useParams: string;
        components: ['query'];
        invariants: { rq: string; distrib: false };
        name: string;
      };
      '/graph': {
        class: string;
        useParams: string;
        invariants: { wt: string; distrib: false };
        name: string;
      };
      '/stream': {
        class: string;
        useParams: string;
        invariants: { distrib: false };
        name: string;
      };
      '/sql': {
        class: string;
        startup: string;
        useParams: string;
        invariants: { distrib: false };
        name: string;
      };
      '/terms': {
        class: string;
        useParams: string;
        components: ['terms'];
        defaults: { terms: true };
        name: string;
      };
      '/analysis/document': {
        class: string;
        startup: string;
        useParams: string;
        name: string;
      };
      '/analysis/field': {
        class: string;
        startup: string;
        useParams: string;
        name: string;
      };
      '/debug/dump': {
        class: string;
        useParams: string;
        defaults: { echoParams: string; echoHandler: true };
        name: string;
      };
      '/tasks/cancel': {
        class: string;
        useParams: string;
        components: string[];
        name: string;
      };
      '/tasks/list': {
        class: string;
        useParams: string;
        components: string[];
        name: string;
      };
    };
    searchComponent: {
      spellcheck: {
        name: string;
        class: string;
        spellchecker: {
          name: string;
          field: string;
          classname: string;
          distanceMeasure: string;
          maxEdits: number;
          minPrefix: number;
          maxInspections: number;
          minQueryLength: number;
          accuracy: number;
          maxQueryFrequency: number;
        };
        queryAnalyzerFieldType: string;
      };
    };
    updateProcessor: {
      uuid: { name: string; class: string };
      'remove-blank': {
        name: string;
        class: string;
      };
      'field-name-mutating': {
        name: string;
        class: string;
        pattern: string;
        replacement: string;
      };
      'parse-boolean': {
        name: string;
        class: string;
      };
      'parse-long': {
        name: string;
        class: string;
      };
      'parse-double': {
        name: string;
        class: string;
      };
      'parse-date': {
        name: string;
        class: string;
      };
      'add-schema-fields': {
        name: string;
        class: string;
      };
    };
    initParams: [
      {
        path: string;
        defaults: { df: string };
      }
    ];
    listener: [
      {
        event: string;
        class: string;
        queries: [];
      },
      {
        event: string;
        class: string;
        queries: [];
      }
    ];
    directoryFactory: {
      name: string;
      class: string;
    };
    codecFactory: { class: string };
    updateRequestProcessorChain: [
      {
        default: string;
        name: string;
        processor: string;
      }
    ];
    updateHandlerupdateLog: { numVersionBuckets: number; dir: string };
    requestDispatcher: {
      handleSelect: boolean;
      httpCaching: {
        never304: boolean;
        etagSeed: string;
        lastModFrom: string;
        cacheControl: null;
      };
      requestParsers: {
        multipartUploadLimitKB: number;
        formUploadLimitKB: number;
        addHttpRequestToContext: boolean;
      };
    };
    indexConfig: {
      useCompoundFile: boolean;
      maxBufferedDocs: number;
      ramBufferSizeMB: number;
      ramPerThreadHardLimitMB: number;
      maxCommitMergeWaitTime: number;
      writeLockTimeout: number;
      lockType: string;
      infoStreamEnabled: boolean;
      metrics: unknown;
    };
  };
}
