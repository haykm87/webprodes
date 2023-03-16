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
  UpdateAuthPortfolioAction,
  UpdateAuthPortfolioFAILUREAction,
  UpdateAuthPortfolioSUCCESSAction
} from "../Actions/actionsUpdatePortfolio";

@Injectable()
export class UpdateAUthPortfolioEffect {
  constructor(private actions$: Actions,
              private authServ: AuthService,
              private router: Router

              ) {}

  UpdateAuthPortfolio$ = createEffect(()=>
  this.actions$.pipe(
    ofType(UpdateAuthPortfolioAction),
    switchMap(({request})=>
      {
        return this.authServ.UbdatePortfolio(request).pipe(

          map((response:Portfolio) =>
          {

            return UpdateAuthPortfolioSUCCESSAction({response})
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
           // console.log(errorResponse.error.error.errors);
            return of(UpdateAuthPortfolioFAILUREAction())
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
    )//end

  UpdatePortfolioAfterSubmit$ = createEffect(
    ()=>
      this.actions$.pipe(
        ofType(UpdateAuthPortfolioSUCCESSAction),
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
