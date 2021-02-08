export interface SolrActionError {
    metadata: string[];
    msg: string;
    code: number;
    details?: {
        errorMessages?: string[];
    }[];
}
