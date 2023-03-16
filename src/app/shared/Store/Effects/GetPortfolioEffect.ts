import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";

import {GETSliderAction, GETSliderFAILUREAction, GETSliderSUCCESSAction} from "../Acttions/actionsGetSlider";
import {HomeService} from "../../service/home.service";
import {SliderInterface} from "../../interface/SliderInterface";
import {GETAboutAction, GETAboutFAILUREAction, GETAboutSUCCESSAction} from "../Acttions/actionsGetAbout";
import {AboutUsInterface} from "../../interface/about.interface";
import {
  GETPortfolioAction,
  GETPortfolioASUCCESSAction,
  GETPortfolioFAILUREAction
} from "../Acttions/actionsGetPortfolio";
import {Portfolio} from "../../interface/portfolio.interface";

@Injectable()
export class GETPortfolioEffect {
  constructor(private actions$: Actions,
              private home: HomeService,
  ) {}

  GETPortfolio$ = createEffect(()=>
    this.actions$.pipe(
      ofType(GETPortfolioAction),
      switchMap(()=>
      {
        return this.home.GetPortfolio().pipe(

          map((response:Portfolio[]) =>
          {

            return GETPortfolioASUCCESSAction({response})
          }),

          catchError(()=>
          {
            // console.log(errorResponse.error.error.errors);
            return of(GETPortfolioFAILUREAction())
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
  )//end



}
