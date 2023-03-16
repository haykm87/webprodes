import {createAction, props} from "@ngrx/store";

;
import {ActionTypes} from "../actionTypes";


import {Portfolio} from "../../../shared/interface/portfolio.interface";


export const UpdateAuthPortfolioAction = createAction(
  ActionTypes.UPDATE_PORTFOLIO_Auth,
  props<{request: Portfolio}>()

)

export const UpdateAuthPortfolioSUCCESSAction = createAction(
  ActionTypes.UPDATE_PORTFOLIO_Auth_SUCCESS,
  props<{response:Portfolio}>()
)

export const UpdateAuthPortfolioFAILUREAction = createAction(
  ActionTypes.UPDATE_PORTFOLIO_Auth_FAILURE
)
