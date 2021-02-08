import { SolrCollection } from './SolrCollection';
import { SolrResponse }   from './types';
import preprocessParams   from './utils/preprocessParams';


interface SolrUserPropertiesResponse extends SolrResponse {
    overlay: {
        znodeVersion: number;
        userProps: {
            [key: string]: string
        };
    }
}

export const enum SolrUserPropertyNames {
    'update.autoCreateFields' = 'update.autoCreateFields',
}

/**
 * The Config API enables manipulating various aspects of your solrconfig.xml using REST-like API calls. All properties
 * set with this API update a file called configoverlay.json, but not the solrconfig.xml file itself.
 */
export class SolrCollectionConfig {
    /**
     * @protected
     */
    collection: SolrCollection;

    /**
     * @hidden
     */
    constructor(collection: SolrCollection) {
        this.collection = collection;
    }

    /**
     * Set collection user defined property
     * @see {@link https://lucene.apache.org/solr/guide/config-api.html#commands-for-user-defined-properties}
     *
     * @example
     * await collection.config.setUserProperty('update.autoCreateFields', false);
     */
    async setUserProperty(name: SolrUserPropertyNames | string, value: any) {
        await this.setUserProperties({
            [name]: value,
        });
    }

    /**
     * Set user-defined properties
     * @see {@link https://lucene.apache.org/solr/guide/config-api.html#commands-for-user-defined-properties}
     *
     * @example
     * await collection.config.setUserProperty({
     *     'update.autoCreateFields': false
     * });
     */
    async setUserProperties(userProperties) {
        await this.collection.request({
            method: 'post',
            endpoint: '/config',
            data: {
                'set-user-property': preprocessParams(userProperties),
            },
        });
    }

    /**
     * Remove a user-defined properties
     * @see {@link https://lucene.apache.org/solr/guide/config-api.html#commands-for-user-defined-properties}
     *
     * @example
     * await collection.config.unsetUserProperties({
     *     'update.autoCreateFields': false
     * });
     */
    async unsetUserProperty(name: SolrUserPropertyNames | string) {
        await this.collection.request({
            method: 'post',
            endpoint: '/config',
            data: {
                'unset-user-property': name,
            },
        });
    }

    /**
     * Get collection user defined properties
     * @returns {Promise<*>}
     */
    async getUserProperties() {
        const body = await this.collection.request<unknown, unknown, SolrUserPropertiesResponse>({
            endpoint: '/config/overlay',
        });

        return body?.overlay?.userProps;
    }


    /**
     *
     */
    async setProperty() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async unsetProperty() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async addRequestHandler() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async updateRequestHandler() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async deleteRequestHandler() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async addSearchComponent() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async updateSearchComponent() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async deleteSearchComponent() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async addInitParams() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async updateInitParams() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async deleteInitParams() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async addQueryResponseWriter() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async updateQueryResponseWriter() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async deleteQueryResponseWriter() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async addQueryParser() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async updateQueryParser() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async deleteQueryParser() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async addValueSourceParser() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async updateValueSourceParser() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async deleteValueSourceParser() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async addTransformer() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async updateTransformer() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async deleteTransformer() {
        throw new Error('Not implemented');
    }

    /**
     * Create updateProcessor entry
     * @see {@link https://lucene.apache.org/solr/guide/config-api.html#what-about-updaterequestprocessorchain}
     */
    async addUpdateProcessor() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async updateUpdateProcessor() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async deleteUpdateProcessor() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async addQueryConverter() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async updateQueryConverter() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async deleteQueryConverter() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async addListener() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async updateListener() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async deleteListener() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async addRuntimeLib() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async updateRuntimeLib() {
        throw new Error('Not implemented');
    }

    /**
     *
     */
    async deleteRuntimeLib() {
        throw new Error('Not implemented');
    }
}
