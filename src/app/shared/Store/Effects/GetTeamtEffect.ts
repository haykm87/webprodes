import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";

import {GETSliderAction, GETSliderFAILUREAction, GETSliderSUCCESSAction} from "../Acttions/actionsGetSlider";
import {HomeService} from "../../service/home.service";

import {GETTeamAction, GETTeamASUCCESSAction, GETTeamFAILUREAction} from "../Acttions/actionsGetTeam";
import {OurTeamInterface} from "../../interface/our-team";

@Injectable()
export class GETTeamEffect {
  constructor(private actions$: Actions,
              private home: HomeService,
  ) {}

  GETTeam$ = createEffect(()=>
    this.actions$.pipe(
      ofType(GETTeamAction),
      switchMap(()=>
      {
        return this.home.GetTeam().pipe(

          map((response:OurTeamInterface[]) =>
          {

            return GETTeamASUCCESSAction({response})
          }),

          catchError(()=>
          {
            // console.log(errorResponse.error.error.errors);
            return of(GETTeamFAILUREAction())
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
  )//end



}
