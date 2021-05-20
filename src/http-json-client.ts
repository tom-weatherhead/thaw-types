// thaw-types/src/http-json-client.ts

import { Observable } from 'rxjs';

export interface IHttpJsonClient {
	get<T>(url: string): Observable<T>;
	post(url: string, body: unknown): Observable<unknown>;
	put(url: string, body: unknown): Observable<unknown>;
	patch(url: string, body: unknown): Observable<unknown>;
	delete<T>(url: string): Observable<T>;
	head<T>(url: string): Observable<T>;
	options<T>(url: string): Observable<T>;
}
