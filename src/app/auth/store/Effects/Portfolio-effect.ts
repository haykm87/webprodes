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

@Injectable()
export class PortfolioEffect {
  constructor(private actions$: Actions,
              private authServ: AuthService,
              private router: Router
              ) {}

  Portfolio$ = createEffect(()=>
  this.actions$.pipe(
    ofType(AddPortfolioAction),
    switchMap(({request})=>
      {
        return this.authServ.addPortfolio(request).pipe(

          map((response:Portfolio) =>
          {

            return AddPortfolioSUCCESSAction({response})
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
           // console.log(errorResponse.error.error.errors);
            return of(AddPortfolioFAILUREAction({errors: errorResponse.error.error.errors}))
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
    )//end

  PortfolioAfterSubmit$ = createEffect(
    ()=>
      this.actions$.pipe(
        ofType(AddPortfolioSUCCESSAction),
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
