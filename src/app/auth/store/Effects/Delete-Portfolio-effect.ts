import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {OurTeamAction, OurTeamFAILUREAction, OurTeamSUCCESSAction} from "../Actions/actionsOurTeam";
import {OurTeamInterface} from "../../../shared/interface/our-team";
import {AuthService} from "../../service/auth.service";
import {CategoryAction, CategoryFAILUREAction, CategorySUCCESSAction} from "../Actions/actionsCategory";
import {CategoryInterface} from "../../../shared/interface/Category.interface";
import {AddPortfolioAction, AddPortfolioFAILUREAction, AddPortfolioSUCCESSAction} from "../Actions/actionsAddPortfolio";
import {Portfolio} from "../../../shared/interface/portfolio.interface";
import {OurServicesSUCCESSAction} from "../Actions/actionsOurServices";
import {
  GetAuthPortfolioAction,
  GetAuthPortfolioFAILUREAction,
  GetAuthPortfolioSUCCESSAction
} from "../Actions/actionsGetPortfolio";
import {HomeService} from "../../../shared/service/home.service";
import {
  DeleteAuthPortfolioAction,
  DeleteAuthPortfolioFAILUREAction,
  DeleteAuthPortfolioSUCCESSAction
} from "../Actions/actionsDeletePortfolio";
import {Store} from "@ngrx/store";

@Injectable()
export class DeleteAUthPortfolioEffect {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private store: Store

              ) {}

  DeleteAuthPortfolio$ = createEffect(()=>
  this.actions$.pipe(
    ofType(DeleteAuthPortfolioAction),
    switchMap(({id})=>
      {

        return this.authService.removePortfolio(id).pipe(

          map(() =>
          {

            return DeleteAuthPortfolioSUCCESSAction()
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
           // console.log(errorResponse.error.error.errors);
            return of(DeleteAuthPortfolioFAILUREAction)
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
    )//end

  PortfolioAfterDelete$ = createEffect(
    ()=>
      this.actions$.pipe(
        ofType(DeleteAuthPortfolioSUCCESSAction),
        tap(
          ()=>
          {
            this.store.dispatch(GetAuthPortfolioAction())
          }
        )
      ),
    {dispatch: false}
  )

}
