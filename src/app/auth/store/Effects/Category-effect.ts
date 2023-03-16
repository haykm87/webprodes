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

@Injectable()
export class CategoryEffect {
  constructor(private actions$: Actions,
              private authServ: AuthService,
              private router: Router) {}

  Category$ = createEffect(()=>
  this.actions$.pipe(
    ofType(CategoryAction),
    switchMap(({request})=>
      {
        return this.authServ.addCategory(request).pipe(

          map((response:CategoryInterface) =>
          {

            return CategorySUCCESSAction({response})
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
           // console.log(errorResponse.error.error.errors);
            return of(CategoryFAILUREAction({errors: errorResponse.error.error.errors}))
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
    )//end



}
