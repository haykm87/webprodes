import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";
import {AuthService} from "../service/auth.service";

import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../shared/service/persistance.service";
import {Router} from "@angular/router";
import {AddAbouFAILUREtAction, AddAbouSUCCESStAction, AddAboutAction} from "./AddAbout.action";
import {AboutUsInterface} from "../../shared/interface/about.interface";

@Injectable()
export class AddAbouteEffect {
  constructor(private actions$: Actions,
              private authServ: AuthService,
              private persServ: PersistanceService,
              private router: Router) {}

  AddAboute$ = createEffect(()=>
    this.actions$.pipe(
      ofType(AddAboutAction),
      switchMap(({request})=>
      {
        return this.authServ.addAboutUs(request).pipe(

          map((response:AboutUsInterface) =>
          {//console.log( currentUser)
            // window.localStorage.setItem('accessToken', correntUser.idToken)
          //  this.persServ.set('accessToken', currentUser.idToken)
            return AddAbouSUCCESStAction({ response })
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
            // console.log(errorResponse.error.error.errors);
            return of(AddAbouFAILUREtAction({errors: errorResponse.error.error.errors}))
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
  )//end

  registrAfterSubmit$ = createEffect(
    ()=>
      this.actions$.pipe(
        ofType(AddAbouSUCCESStAction),
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
