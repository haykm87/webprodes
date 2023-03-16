import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";

import {GETSliderAction, GETSliderFAILUREAction, GETSliderSUCCESSAction} from "../Acttions/actionsGetSlider";
import {HomeService} from "../../service/home.service";
import {SliderInterface} from "../../interface/SliderInterface";
import {GETAboutAction, GETAboutFAILUREAction, GETAboutSUCCESSAction} from "../Acttions/actionsGetAbout";
import {AboutUsInterface} from "../../interface/about.interface";

@Injectable()
export class GetAboutEffect {
  constructor(private actions$: Actions,
              private home: HomeService,
  ) {}

  GGetAbout$ = createEffect(()=>
    this.actions$.pipe(
      ofType(GETAboutAction),
      switchMap(()=>
      {
        return this.home.GetAbout().pipe(

          map((response:AboutUsInterface) =>
          {

            return GETAboutSUCCESSAction({response})
          }),

          catchError(()=>
          {
            // console.log(errorResponse.error.error.errors);
            return of(GETAboutFAILUREAction())
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
  )//end



}
