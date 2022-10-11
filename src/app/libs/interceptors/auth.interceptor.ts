import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { ApiService } from '../../services/api.service';
import StorageHelper from '../helpers/storage.helper';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private apiS: ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.url.includes('rickandmorty') || request.url.includes('pokemon')){

      let originalReq = request;
      
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + StorageHelper.getItem('session').token
        }
      })

      return next.handle(request).pipe(
        catchError(err => {
          if(err instanceof HttpErrorResponse && err.status === 401){

            return this.refreshToken(originalReq, next)

          }
          return throwError(() => err)
        })
      )

    }


    return next.handle(request);
  }



  private refreshToken(originalReq: HttpRequest<unknown>, next: HttpHandler){

    return this.apiS.refreshToken().pipe(
      switchMap(res => {

        StorageHelper.setItem('session', res)

        originalReq = originalReq.clone({
          setHeaders: {
            Authorization: 'Bearer ' + StorageHelper.getItem('session').token
          }
        })

        return next.handle(originalReq)

      })
    )

  }
}
