// thaw-types/src/errors/http-json-client.ts

export interface IHttpJsonClientError {
	readonly ok?: boolean;
	readonly status?: number;
	readonly statusText?: string;
	readonly message?: string;
	readonly url?: string;
}
