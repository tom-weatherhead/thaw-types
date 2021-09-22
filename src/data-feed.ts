// thaw-data-sources/src/data-feed.ts

import { Observable } from 'rxjs';

export interface IDataFeedOptions<T, U> {
	readonly fnGenerateNextState?: (previousState: T, previousResult: U) => T;
	readonly initialState?: T;
	readonly maxNumIterations?: number;
}

export type IDataFeed<U> = Observable<U>;
