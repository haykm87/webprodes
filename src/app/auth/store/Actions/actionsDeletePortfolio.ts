import {createAction, props} from "@ngrx/store";

;
import {ActionTypes} from "../actionTypes";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";

import {Portfolio} from "../../../shared/interface/portfolio.interface";


export const DeleteAuthPortfolioAction = createAction(
  ActionTypes.Delete_PORTFOLIO_Auth,
  props<{id:string}>()

)

export const DeleteAuthPortfolioSUCCESSAction = createAction(
  ActionTypes.Delete_PORTFOLIO_Auth_SUCCESS
)

export const DeleteAuthPortfolioFAILUREAction = createAction(
  ActionTypes.Delete_PORTFOLIO_Auth_FAILURE
)
