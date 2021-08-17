// thaw-types/src/http-client.ts

import { Observable } from 'rxjs';

export interface IHttpClient {
	get(url: string): Observable<string>;
}
