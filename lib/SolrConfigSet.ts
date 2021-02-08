import type { SolrRequestParams } from './SolrClient';
import type { SolrConfigSets }    from './SolrConfigSets';


/**
 * Конфигурация
 */
export class SolrConfigSet {
    /**
     * @protected
     */
    configSets: SolrConfigSets;
    /**
     * @protected
     */
    name: string;

    /**
     * @hidden
     */
    constructor(configSets, name) {
        this.configSets = configSets;
        this.name = name;
    }

    /**
     * Request a `/cluster/configs/{config-set}` endpoint
     *
     * @protected
     */
    async request<D = object, P = object, R = unknown>(params: SolrRequestParams<D, P>): Promise<R> {
        const { endpoint = '' } = params;

        return this.configSets.request({
            ...params,
            endpoint: `/${this.name}${endpoint}`,
            apiVersion: 'v2',
        });
    }

    /**
     * Delete config set
     *
     * @example
     * await solr.configSet('demo.AUTOCREATED').delete();
     */
    async delete() {
        return this.request({
            method: 'delete',
            params: {
                commit: true,
            },
        });
    }
}
