import { Injectable } from "@angular/core";

import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { LocalStorageService } from "./local-storage.service";
import { environment } from "../../../../../environment";
@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private storage: LocalStorageService) {}

  private setHeaders() {
    const headersConfig = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
    return new HttpHeaders(headersConfig);
  }

  private formatErrors(xhr: HttpErrorResponse) {
    return Observable.throw(xhr.error);
  }

  get(
    path: string,
    params: HttpParams = new HttpParams(),
    responseType?,
    apiVersionString = "/api"
  ): Observable<any> {
    return this.http
      .get(`${environment.ApiUrl}${apiVersionString}/${path}`, {
        headers: this.setHeaders(),
        params,
        responseType
      })
      .catch(this.formatErrors);
  }

  put(
    path: string,
    body: Object = {},
    apiVersionString = "/api/"
  ): Observable<any> {
    return this.http
      .put(
        `${environment.ApiUrl}${apiVersionString}/${path}`,
        JSON.stringify(body),
        {
          headers: this.setHeaders()
        }
      )
      .catch(this.formatErrors);
  }

  post(
    path: string,
    body: Object = {},
    apiVersionString = "/api/"
  ): Observable<any> {
    return this.http
      .post(
        `${environment.ApiUrl}${apiVersionString}/${path}`,
        JSON.stringify(body),
        {
          headers: this.setHeaders()
        }
      )
      .catch(this.formatErrors);
  }

  delete(path, apiVersionString = "/api"): Observable<any> {
    return this.http
      .delete(`${environment.ApiUrl}${apiVersionString}/${path}`, {
        headers: this.setHeaders()
      })
      .catch(this.formatErrors);
  }
}
