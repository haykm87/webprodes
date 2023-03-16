import {createAction, props} from "@ngrx/store";

;
import {ActionTypes} from "../actionTypes";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";


import {SliderInterface} from "../../../shared/interface/SliderInterface";


export const AddSliderAction = createAction(
  ActionTypes.ADD_SlIDER,
  props<{request: SliderInterface}>()
)

export const AddSliderSUCCESSAction = createAction(
  ActionTypes.ADD_SlIDER_SUCCESS,
  props<{response:SliderInterface}>()
)

export const AddSliderFAILUREAction = createAction(
  ActionTypes.ADD_SlIDER_FAILURE,
   props<{errors: BackendErrorsInterface}>()
)
