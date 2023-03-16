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
import {GetCategoryAction, GetCategoryFAILUREAction, GetCategorySUCCESSAction} from "../Actions/actionsGetCategory";

@Injectable()
export class GetCategoryEffect {
  constructor(private actions$: Actions,
              private authServ: AuthService,
            ) {}

  GetCategory$ = createEffect(()=>
  this.actions$.pipe(
    ofType(GetCategoryAction),
    switchMap(()=>
      {
        return this.authServ.GetCategory().pipe(

          map((response:CategoryInterface[]) =>
          {

            return GetCategorySUCCESSAction({response})
          }),

          catchError((errorResponse: HttpErrorResponse)=>
          {
           // console.log(errorResponse.error.error.errors);
            return of(GetCategoryFAILUREAction({errors: errorResponse.error.error.errors}))
          })
        )//end pipe
      })// end switchMap
    ) //end pipe
    )//end



}
