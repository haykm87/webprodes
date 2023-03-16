import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {OurTeamAction, OurTeamFAILUREAction, OurTeamSUCCESSAction} from "../Actions/actionsOurTeam";
import {OurTeamInterface} from "../../../shared/interface/our-team";
import {AuthService} from "../../service/auth.service";
import {OurServicesAction, OurServicesFAILUREAction, OurServicesSUCCESSAction} from "../Actions/actionsOurServices";
import {OurServicesInterface} from "../../../shared/interface/our-services";

@Injectable()
export class OurServicesffect {
  constructor(private actions$: Actions,
              private authServ: AuthService,
              private router: Router) {}

  OurServices$ = createEffect(()=>
  this.actions$.pipe(
    ofType(OurServicesAction),
    switchMap(({request})=>
      {
        return this.authServ.addOurServices(request).pipe(

          map((response:OurServicesInterface) =>
          {

            return OurServicesSUCCESSAction({response})
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
           // console.log(errorResponse.error.error.errors);
            return of(OurServicesFAILUREAction({errors: errorResponse.error.error.errors}))
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
    )//end

  OurServiceAfterSubmit$ = createEffect(
    ()=>
      this.actions$.pipe(
        ofType(OurServicesSUCCESSAction),
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
