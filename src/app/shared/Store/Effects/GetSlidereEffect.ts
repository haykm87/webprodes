import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";

import {GETSliderAction, GETSliderFAILUREAction, GETSliderSUCCESSAction} from "../Acttions/actionsGetSlider";
import {HomeService} from "../../service/home.service";
import {SliderInterface} from "../../interface/SliderInterface";

@Injectable()
export class GetSliderEffect {
  constructor(private actions$: Actions,
              private home: HomeService,
  ) {}

  GetSlide$ = createEffect(()=>
    this.actions$.pipe(
      ofType(GETSliderAction),
      switchMap(()=>
      {
        return this.home.GetSlider().pipe(

          map((response:SliderInterface[]) =>
          {

            return GETSliderSUCCESSAction({response})
          }),

          catchError(()=>
          {
            // console.log(errorResponse.error.error.errors);
            return of(GETSliderFAILUREAction())
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
  )//end



}
