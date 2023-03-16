import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {OurTeamAction, OurTeamFAILUREAction, OurTeamSUCCESSAction} from "../Actions/actionsOurTeam";
import {OurTeamInterface} from "../../../shared/interface/our-team";
import {AuthService} from "../../service/auth.service";

@Injectable()
export class OurTemaEffect {
  constructor(private actions$: Actions,
              private authServ: AuthService,
              private router: Router) {}

  OurTema$ = createEffect(()=>
  this.actions$.pipe(
    ofType(OurTeamAction),
    switchMap(({request})=>
      {
        return this.authServ.addOurTeam(request).pipe(

          map((response:OurTeamInterface) =>
          {

            return OurTeamSUCCESSAction({response})
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
           // console.log(errorResponse.error.error.errors);
            return of(OurTeamFAILUREAction({errors: errorResponse.error.error.errors}))
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
    )//end

  OurTeamAfterSubmit$ = createEffect(
    ()=>
      this.actions$.pipe(
        ofType(OurTeamSUCCESSAction),
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
