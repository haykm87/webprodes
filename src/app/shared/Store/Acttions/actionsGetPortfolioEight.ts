import {createAction, props} from "@ngrx/store";
import {SliderInterface} from "../../interface/SliderInterface";
import {ActionTypesHome} from "../actionTypesHome";
import {AboutUsInterface} from "../../interface/about.interface";
import {Portfolio} from "../../interface/portfolio.interface";


export const GETPortfolioEightAction = createAction(
  ActionTypesHome.GET_PORTFOLIO_EIGHT
)

export const GETPortfolioEightASUCCESSAction = createAction(
  ActionTypesHome.GET_PORTFOLIO_EIGHT_SUCCESS,
  props<{response:Portfolio[]}>()
)

export const GETPortfolioEightFAILUREAction = createAction(
  ActionTypesHome.GET_PORTFOLIO_EIGHT_FAILURE
)
