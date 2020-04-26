import {HttpClient} from "@angular/common/http";
import {CrudOperations} from "./crudoperations.interface";
import {Observable} from "rxjs";
import {SERVER_API_URL} from "app/app.constants";

export class CrudService<T, ID> implements CrudOperations<T, ID> {

    protected http: HttpClient;
    protected options: any;
    protected base: string;

    constructor(
        base: string,
        http: HttpClient,
        options: any) {
        this.base = SERVER_API_URL + base;
        this.http = http;
        this.options = options;
    }

    save(t: T): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(this.base, t)
                .subscribe(
                    data => {
                        //console.log(data);
                        resolve(data)
                    },
                    error => reject(this.handleError(error)));
        });
    }

    update(id: ID, t: T): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get<T>(this.base + "/" + id)
                .subscribe(
                    data => {
                        //console.log(data);
                        resolve(data)
                    },
                    error => reject(this.handleError(error)));
        });
    }

    findOne(id: ID): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get<T>(this.base + "/" + id)
                .subscribe(
                    data => {
                        console.log(data);
                        resolve(data)
                    },
                    error => reject(this.handleError(error)));
        });
    }

    findAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            //'getting all:' + this.base);
            this.http.get<T[]>(this.base)
                .subscribe(
                    data => {
                        //console.log(data);
                        resolve(data)
                    },
                    error => reject(this.handleError(error)));
        });
    }

    delete(id: ID): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.delete<T>(this.base + "/" + id)
                .subscribe(
                    data => {
                        //console.log(data);
                        resolve(data)
                    },
                    error => reject(this.handleError(error)));
        });
    }

    protected handleError(error: Response | any) {
        let msg: any;
        if (error instanceof Response) {
            msg = error.json() || '';
        } else {
            msg = error.message ? error.message : error.toString();
        }
        console.log(msg);
    }
}
