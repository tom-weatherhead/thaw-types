// thaw-types/src/data-source.ts

import { Observable } from 'rxjs';

export interface IDataSource<T, U> {
	getData(options?: T): Observable<U>;
}
