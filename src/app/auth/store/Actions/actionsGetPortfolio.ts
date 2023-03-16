import {createAction, props} from "@ngrx/store";

;
import {ActionTypes} from "../actionTypes";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";

import {Portfolio} from "../../../shared/interface/portfolio.interface";


export const GetAuthPortfolioAction = createAction(
  ActionTypes.GET_PORTFOLIO_Auth

)

export const GetAuthPortfolioSUCCESSAction = createAction(
  ActionTypes.GET_PORTFOLIO_Auth_SUCCESS,
  props<{response:Portfolio[]}>()
)

export const GetAuthPortfolioFAILUREAction = createAction(
  ActionTypes.GET_PORTFOLIO_Auth_FAILURE
)
