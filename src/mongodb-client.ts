// thaw-types/src/mongodb-client.ts

// Implementations of IMongoDBClient can include MongoDBDirectClient and MongoDBWebClient

// Adapted from argon-promisified-mongodb's IPromisifiedCollection:

export interface IMongoDBCollection {
	// Create (CRUD part 1 of 4)
	createOne(dataToInsert: unknown): Promise<unknown>;

	// Read (CRUD part 2 of 4)
	read(criteria: unknown): Promise<unknown[]>;
	readOneById(id: string): Promise<unknown>;
	readAll(): Promise<unknown[]>;

	// Update (CRUD part 3 of 4)
	updateOneById(id: string, replacementData: unknown): Promise<unknown>;

	// Delete (CRUD part 4 of 4)
	deleteOneById(id: string): Promise<boolean>;
	deleteAll(): Promise<boolean>;
}

// Adapted from argon-promisified-mongodb's IPromisifiedConnection:

export interface IMongoDBClient {
	connect(): Promise<IMongoDBClient>;
	destroy(): Promise<void>;
	getCollection(
		databaseName: string,
		collectionName: string
	): IMongoDBCollection;
}
