import { SolrWords } from './SolrWords';

export interface SolrIndexAnalyzerFilterDefinition {
    class: string;
    words?: SolrWords | string;
    ignoreCase?: string;
    protected?: string;
    catenateNumbers?: string;
    generateNumberParts?: string;
    splitOnCaseChange?: string;
    generateWordParts?: string;
    catenateAll?: string;
    catenateWords?: string;
    maxGramSize?: string;
    minGramSize?: string;
    expand?: string;
    synonyms?: string;
    maxPosQuestion?: string;
    maxFractionAsterisk?: string;
    maxPosAsterisk?: string;
    withOriginal?: string;
}
