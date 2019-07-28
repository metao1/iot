import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export interface CrudOperations<T, ID> {
	save(t: T): Observable<T>;
	update(id: ID, t: T): Observable<T>;
	findOne(id: ID): Observable<T>;
	findAll(): Promise<T[]>;
	delete(id: ID): Observable<any>;
}
