import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";


import {HomeService} from "../../service/home.service";

import {GETServicesAction, GETServicesFAILUREAction, GETServicesSUCCESSAction} from "../Acttions/actionsGetServices";
import {OurServicesInterface} from "../../interface/our-services";

@Injectable()
export class GETServicesEffect {
  constructor(private actions$: Actions,
              private home: HomeService,
  ) {}

  GETServices$ = createEffect(()=>
    this.actions$.pipe(
      ofType(GETServicesAction),
      switchMap(()=>
      {
        return this.home.GetServices().pipe(

          map((response:OurServicesInterface[]) =>
          {
         //  console.log(response);
            return GETServicesSUCCESSAction({response})
          }),

          catchError(()=>
          {
            // console.log(errorResponse.error.error.errors);
            return of(GETServicesFAILUREAction())
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
  )//end



}
