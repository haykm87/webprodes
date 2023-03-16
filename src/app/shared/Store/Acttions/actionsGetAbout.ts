import {createAction, props} from "@ngrx/store";
import {SliderInterface} from "../../interface/SliderInterface";
import {ActionTypesHome} from "../actionTypesHome";
import {AboutUsInterface} from "../../interface/about.interface";


export const GETAboutAction = createAction(
  ActionTypesHome.GET_ABOUT_US
)

export const GETAboutSUCCESSAction = createAction(
  ActionTypesHome.GET_ABOUT_US_SUCCESS,
  props<{response:AboutUsInterface}>()
)

export const GETAboutFAILUREAction = createAction(
  ActionTypesHome.GET_ABOUT_US_FAILURE
)
