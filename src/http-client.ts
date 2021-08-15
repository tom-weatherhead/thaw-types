// thaw-types/src/http-client.ts

import { Observable } from 'rxjs';

export interface IHttpClient {
	get(url: string): Observable<string>;
	// post(url: string, body: unknown): Observable<unknown>;
	// put(url: string, body: unknown): Observable<unknown>;
	// patch(url: string, body: unknown): Observable<unknown>;
	// delete<T>(url: string): Observable<T>;
	// head<T>(url: string): Observable<T>;
	// options<T>(url: string): Observable<T>;
}
