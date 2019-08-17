import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CrudDataOperations} from "@persoinfo/services/cruddataoperations.interface";
import {Page} from "@persoinfo/model/paging/page.model";
import {SERVER_API_URL} from "app/app.constants";

export class CrudDataService<T, ID> implements CrudDataOperations<T, ID> {

    private http: HttpClient;
    protected options: any;
    protected base: string;
    protected component_type: string;

    constructor(
        base: string,
        component_type: string,
        http: HttpClient,
        options: any) {
        this.base = base;
        this.http = http;
        this.options = options;
        this.component_type = component_type;
    }

    findAllDailyAverageByComponent(id: ID, page: number): Observable<Page<T>> {
        return undefined;
    }

    findAllDailyHighByComponent(id: ID, page: number): Observable<Page<T>> {
        return undefined;
    }

    findAllDailyLowByComponent(id: ID, page: number): Observable<Page<T>> {
        return undefined;
    }

    findAllHourlyAverageByComponent(id: ID, page: number): Observable<Page<T>> {
        return undefined;
    }

    findAllHourlyHighByComponent(id: ID, page: number): Observable<Page<T>> {
        return undefined;
    }

    findAllHourlyLowByComponent(id: ID, page: number): Observable<Page<T>> {
        return undefined;
    }

    findAllMonthlyAverageByComponent(id: ID, page: number): Observable<Page<T>> {
        return undefined;
    }

    findCustomByComponent(id: ID, path: string, page: number): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = this.base + id + this.component_type + path + '?page=' + page;
            console.log('getting all:' + SERVER_API_URL + url);
            this.http.get<Page<T>>(SERVER_API_URL + url)
                .subscribe(data => {
                    //console.log('find custome: '+ JSON.stringify(data));
                    resolve(data)
                }, error => reject(this.handleError(error)));
        });
    }

    protected handleError(error: Response | any) {
        let msg: any;
        if (error instanceof Response) {
            msg = error.json() || '';
        } else {
            msg = error.message ? error.message : error.toString();
        }
        console.log(error + ':' + msg);
    }

}
