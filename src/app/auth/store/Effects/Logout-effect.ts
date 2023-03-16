import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, of, switchMap, tap} from "rxjs";

import {Router} from "@angular/router";

import {AuthService} from "../../service/auth.service";

import {LogoutAction} from "../../../shared/Store/Acttions/actions.async";
import {PersistanceService} from "../../../shared/service/persistance.service";

@Injectable()
export class LogoutEffect {
  constructor(private actions$: Actions,
              private persServ: PersistanceService,
              private router: Router
              ) {}


  LogoutSubmit$ = createEffect(
    ()=>
      this.actions$.pipe(
        ofType(LogoutAction),
        tap(
          ()=>
          {
            this.persServ.set("accessToken","")
            this.router.navigate(['/'])
          }
        )
      ),
    {dispatch: false}
  )

}
