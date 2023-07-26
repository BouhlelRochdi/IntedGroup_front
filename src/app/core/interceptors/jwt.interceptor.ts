import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HTTP_INTERCEPTORS
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Injectable, inject } from '@angular/core';
import { GLOBAL_SERVICE } from '../constants/tokens.constants';
  
  @Injectable({
    providedIn: 'root'
  })
  export class JwtInterceptor implements HttpInterceptor {
    _globalService = inject(GLOBAL_SERVICE);
  
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      // add authorization header with jwt token if available
      const currentAccessToken = this._globalService.currentAccessTokenSubject.value;
      console.log('currentAccessToken ', currentAccessToken)
      if (currentAccessToken) {
        request = request.clone({
          setHeaders: {
            authorization: `${currentAccessToken}`
          }
        });
      }else{
        console.log('Jwt interceptor Not found AccessToken');
      }
      return next.handle(request);
    }
  }
  
  export const jwtInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  };
  