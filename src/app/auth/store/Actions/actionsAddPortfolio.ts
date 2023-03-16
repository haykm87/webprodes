import {createAction, props} from "@ngrx/store";

;
import {ActionTypes} from "../actionTypes";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";

import {Portfolio} from "../../../shared/interface/portfolio.interface";


export const AddPortfolioAction = createAction(
  ActionTypes.ADD_PORTFOLIO,
  props<{request: Portfolio}>()
)

export const AddPortfolioSUCCESSAction = createAction(
  ActionTypes.ADD_PORTFOLIO_SUCCESS,
  props<{response:Portfolio}>()
)

export const AddPortfolioFAILUREAction = createAction(
  ActionTypes.ADD_PORTFOLIO_FAILURE,
   props<{errors: BackendErrorsInterface}>()
)
