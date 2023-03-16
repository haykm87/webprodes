import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

import {AuthService} from "../../service/auth.service";

import {Portfolio} from "../../../shared/interface/portfolio.interface";


import {
  GetAuthPortfolioByIdAction,
  GetAuthPortfolioBYIdFAILUREAction,
  GetAuthPortfolioBYIdSUCCESSAction
} from "../Actions/actionsGetPortfolioById";

@Injectable()
export class GetAUthPortfolioByIdEffect {
  constructor(private actions$: Actions,
              private authSerrv: AuthService,

              ) {}

  GetAuthPortfolioById$ = createEffect(()=>
  this.actions$.pipe(
    ofType(GetAuthPortfolioByIdAction),
    switchMap(({Id})=>
      {

        return this.authSerrv.GetPortfolioById(Id).pipe(

          map((response:Portfolio) =>
          {

            return GetAuthPortfolioBYIdSUCCESSAction({response})
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
           // console.log(errorResponse.error.error.errors);
            return of(GetAuthPortfolioBYIdFAILUREAction())
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
    )//end



}
