import {createAction, props} from "@ngrx/store";


import {ActionTypesHome} from "../actionTypesHome";

import {SliderInterface} from "../../interface/SliderInterface";


export const GETSliderAction = createAction(
  ActionTypesHome.GET_SlIDER
)

export const GETSliderSUCCESSAction = createAction(
  ActionTypesHome.GET_SlIDER_SUCCESS,
  props<{response:SliderInterface[]}>()
)

export const GETSliderFAILUREAction = createAction(
  ActionTypesHome.GET_SlIDER_FAILURE
)
