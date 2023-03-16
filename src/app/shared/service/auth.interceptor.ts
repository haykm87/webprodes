import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {PersistanceService} from "./persistance.service";
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {IsLoginSelector} from "../../auth/store/selectors";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  isLogined$ : Observable<boolean>;
  constructor( private persServ: PersistanceService , private  router: Router, private  store: Store) {
    this.isLogined$ = this.store.pipe(select(IsLoginSelector));
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 if(this.persServ.get('accessToken')  ) {

   const userToken=this.persServ.get('accessToken');
   request = request.clone(
     {
      setParams: {
         auth: this.persServ.get('accessToken')//Authorization
       }
      /* setHeaders: {
         Authorization: `Bearer ${userToken}`
       //  X-Goog-User-Project: 'your-project'
       }*/
      // headers: request.headers.set('Authorization', 'Bearer ' + this.persServ.get('accessToken'))

     }
   );
 }
   return next.handle(request).pipe(
     catchError((error: HttpErrorResponse) => {
         if (error.status === 401) {
           // this.auth.logOut();
           this.router.navigate(['/admin', 'registr'],
             {
               queryParams: {LracacToken: true}
             });
         }
         return throwError(error);
       }
     ))// verj catchError;
 }

}
