import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {registerAction, registerFAILUREAction, registerSUCCESSAction} from "./actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {AuthService} from "../service/auth.service";
import {CorrentUserInerface} from "../../shared/CurrentUser";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../shared/service/persistance.service";
import {Router} from "@angular/router";

@Injectable()
export class RegistrEffect {
  constructor(private actions$: Actions,
              private authServ: AuthService,
              private persServ: PersistanceService,
              private router: Router) {}

 registr$ = createEffect(()=>
  this.actions$.pipe(
    ofType(registerAction),
    switchMap(({request})=>
      {
        return this.authServ.LogIn(request).pipe(

          map((currentUser:CorrentUserInerface) =>
          {
           // window.localStorage.setItem('accessToken', correntUser.idToken)
                       this.persServ.set('accessToken', currentUser.idToken)
            return registerSUCCESSAction({currentUser})
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
           // console.log(errorResponse.error.error.errors);
            return of(registerFAILUREAction({errors: errorResponse.error.error.errors}))
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
    )//end

  registrAfterSubmit$ = createEffect(
    ()=>
      this.actions$.pipe(
        ofType(registerSUCCESSAction),
        tap(
          ()=>
          {
           this.router.navigate(['/','dashboard'])
          }
        )
      ),
    {dispatch: false}
  )

}
