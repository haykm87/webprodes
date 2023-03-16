import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

import {AuthService} from "../../service/auth.service";

import {AddSliderAction, AddSliderFAILUREAction, AddSliderSUCCESSAction} from "../Actions/actionsAddSlider";
import {SliderInterface} from "../../../shared/interface/SliderInterface";

@Injectable()
export class SliderEffect {
  constructor(private actions$: Actions,
              private authServ: AuthService,
              ) {}

  Slider$ = createEffect(()=>
  this.actions$.pipe(
    ofType(AddSliderAction),
    switchMap(({request})=>
      {
        return this.authServ.addSlider(request).pipe(

          map((response:SliderInterface) =>
          {

            return AddSliderSUCCESSAction({response})
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
           // console.log(errorResponse.error.error.errors);
            return of(AddSliderFAILUREAction({errors: errorResponse.error.error.errors}))
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
    )//end



}
