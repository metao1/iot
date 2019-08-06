import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Page} from "../model/paging/page.model";

export interface CrudDataOperations<T, ID> {
    findCustomByComponent(id: ID, path: string, page: number):  Promise<T>;

    findAllMonthlyAverageByComponent(id: ID, page: number): Observable<Page<T>>;

    findAllDailyAverageByComponent(id: ID, page: number): Observable<Page<T>>;

    findAllDailyHighByComponent(id: ID, page: number): Observable<Page<T>>;

    findAllDailyLowByComponent(id: ID, page: number): Observable<Page<T>>;

    findAllHourlyAverageByComponent(id: ID, page: number): Observable<Page<T>>;

    findAllHourlyHighByComponent(id: ID, page: number): Observable<Page<T>>;

    findAllHourlyLowByComponent(id: ID, page: number): Observable<Page<T>>;
}
