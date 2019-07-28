import {HttpClient} from "@angular/common/http";
import {CrudOperations} from "./crudoperations.interface";
import {Observable} from "rxjs";

export class CrudService<T, ID> implements CrudOperations<T, ID> {

  protected http: HttpClient;
  protected options: Function;
  protected base: string;

  constructor(
    base: string,
    http: HttpClient,
    options: Function) {
    this.base = base;
    this.http = http;
    this.options = options;
  }

  save(t: T) {
    console.log(this.base);
    /*return this.http.post(this.base, t, this.options())
      .map(this.extractData)
      .catch(this.handleError);*/
      return null;
  }

  update(id: ID, t: T) {
    /*return this.http.put(this.base + "/" + id, t, this.options())
      .map(this.extractData)
      .catch(this.handleError);*/
      return null;
  }

  findOne(id: ID) {
    /*return this.http.get(this.base + "/" + id, this.options())
      .map(this.extractData)
      .catch(this.handleError);*/
    return null;
  }

  findAll() {
    /*console.log('as'+ JSON.stringify(this.base));
    return this.http.get(this.base, this.options())
      .map(this.extractData)
      .catch(this.handleError);*/
      return null;
  }

    delete(id: ID): Observable<any> {
        return undefined;
    }

  /*delete(id: ID) {
    return this.http.delete(this.base + '/' + id, this.options())
		 	.map(this.extractData)
      .catch(this.handleError);
	}

  protected extractData(res: Response) {
    let body = res.json() || '';
    return body;
  }

  protected handleError(error: Response | any) {
    let msg: any;
    console.log(error);
    if(error instanceof Response) {
      msg = error.json() || '';
    } else {
      msg = error.message ? error.message : error.toString();
    }

    return Observable.throw(msg);
  }*/

}
