export interface CrudOperations<T, ID> {
	save(t: T): Promise<T>;
	update(id: ID, t: T): Promise<T>;
	findOne(id: ID): Promise<T>;
	findAll(): Promise<T[]>;
	delete(id: ID): Promise<any>;
}
