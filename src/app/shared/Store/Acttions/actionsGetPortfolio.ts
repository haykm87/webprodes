import {createAction, props} from "@ngrx/store";
import {SliderInterface} from "../../interface/SliderInterface";
import {ActionTypesHome} from "../actionTypesHome";
import {AboutUsInterface} from "../../interface/about.interface";
import {Portfolio} from "../../interface/portfolio.interface";


export const GETPortfolioAction = createAction(
  ActionTypesHome.GET_PORTFOLIO
)

export const GETPortfolioASUCCESSAction = createAction(
  ActionTypesHome.GET_PORTFOLIO_SUCCESS,
  props<{response:Portfolio[]}>()
)

export const GETPortfolioFAILUREAction = createAction(
  ActionTypesHome.GET_PORTFOLIO_FAILURE
)
