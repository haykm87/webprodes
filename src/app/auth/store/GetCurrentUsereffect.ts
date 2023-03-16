import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";
import {AuthService} from "../service/auth.service";
import {CorrentUserInerface} from "../../shared/CurrentUser";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../shared/service/persistance.service";

import {
  GetCurrentUserActions,
  GetCurrentUserFAILUREActions,
  GetCurrentUserSUCCESSActions
} from "./Get-Current-User.actions";

@Injectable()
export class GetCurrentUsereffect {
  constructor(private actions$: Actions,
              private authServ: AuthService,
              private persServ: PersistanceService,
             ) {}

 GetCurrentUser$ = createEffect(()=>
  this.actions$.pipe(
    ofType(GetCurrentUserActions),
    switchMap(()=>
      {
        const  token = this.persServ.get('accessToken');
        if(!token)
        {
          return of(GetCurrentUserFAILUREActions())
        }
        return this.authServ.GetCurrentUser().pipe(

          map((currentUser:CorrentUserInerface) =>
          {


           // window.localStorage.setItem('accessToken', correntUser.idToken)
                     //  this.persServ.set('accessToken', currentUser.idToken)

            return GetCurrentUserSUCCESSActions({currentUser})
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
           // console.log(errorResponse.error.error.errors);
            return of(GetCurrentUserFAILUREActions())
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
    )//end



}
