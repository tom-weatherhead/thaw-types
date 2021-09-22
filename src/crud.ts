// thaw-data-sources/src/crud.ts

export interface ICrudCollection<T, K> {
	// K is the key type; e.g. _id: string;
	createOne(data: T): T & K; // I.e. HTTP POST

	readOne(key: K): T & K; // I.e. HTTP GET
	readAll(): Iterable<T & K>;
	// findOne(criteria: unknown): T & K; // ?
	// findMany(criteria: unknown): Iterable<T & K>; // ?

	updateOne(key: K, data: T): T & K; // I.e. HTTP PUT, not PATCH.

	deleteOne(key: K): boolean; // I.e. HTTP DELETE
	deleteAll(): boolean;
}

export interface IAsyncCrudCollection<T, K> {
	// K is the key type; e.g. _id: string;
	createOne(data: T): Promise<T & K>; // I.e. HTTP POST

	readOne(key: K): Promise<T & K>; // I.e. HTTP GET
	// readAll(): Promise<Iterable<T & K>>; // Or AsyncIterable<T & K> ? See node_modules/typescript/lib/lib.es2018.asynciterable.d.ts
	readAll(): AsyncIterable<T & K>;
	// findOne(criteria: unknown): T & K; // ?
	// findMany(criteria: unknown): Iterable<T & K>; // ?

	updateOne(key: K, data: T): Promise<T & K>; // I.e. HTTP PUT, not PATCH.

	deleteOne(key: K): Promise<boolean>; // I.e. HTTP DELETE
	deleteAll(): Promise<boolean>;
}
