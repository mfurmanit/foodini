export interface ResponseModel<T> {
    offset: number;
    number: number;
    results: T[];
    totalResults: number;
    baseUri: string;
}
