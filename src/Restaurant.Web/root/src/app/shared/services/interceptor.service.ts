import { Injectable } from "@angular/core";

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";

import { Observable, of } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { catchError } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const requestWithAuth = req.clone({
      setHeaders: { authorization: `Bearer ${this.storage.IDToken}` }
    });
    return next.handle(requestWithAuth).pipe(
      catchError(event => {
        if (event instanceof HttpErrorResponse) {
          if (event.status === 401) {
            if (
              this.storage.IDToken  
            ) {
              this.storage.store("attemptedRoute", this.router.url);
              this.router.navigate(["/auth/login"]);
            } else {
              this.router.navigate(["/unauth"]);
            }
          }
        }
        return Observable.throw(event);
      })
    );
  }
}
