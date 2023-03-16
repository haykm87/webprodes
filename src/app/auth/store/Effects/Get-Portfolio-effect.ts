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

@Injectable()
export class GetAUthPortfolioEffect {
  constructor(private actions$: Actions,
              private homeServ: HomeService,

              ) {}

  GetAuthPortfolio$ = createEffect(()=>
  this.actions$.pipe(
    ofType(GetAuthPortfolioAction),
    switchMap(()=>
      {
        return this.homeServ.GetPortfolio().pipe(

          map((response:Portfolio[]) =>
          {

            return GetAuthPortfolioSUCCESSAction({response})
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
           // console.log(errorResponse.error.error.errors);
            return of(GetAuthPortfolioFAILUREAction())
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
    )//end



}
