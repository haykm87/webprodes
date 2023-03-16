import {createAction, props} from "@ngrx/store";

;
import {ActionTypes} from "../actionTypes";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";

import {Portfolio} from "../../../shared/interface/portfolio.interface";


export const GetAuthPortfolioByIdAction = createAction(
  ActionTypes.GET_PORTFOLIO_BY_ID_Auth,
  props<{Id:string}>()

)

export const GetAuthPortfolioBYIdSUCCESSAction = createAction(
  ActionTypes.GET_PORTFOLIO_BY_ID_Auth_SUCCESS,
  props<{response:Portfolio}>()
)

export const GetAuthPortfolioBYIdFAILUREAction = createAction(
  ActionTypes.GET_PORTFOLIO_BY_ID_Auth_FAILURE
)
