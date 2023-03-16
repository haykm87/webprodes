import {ActionTypes} from "./actionTypes";
import {createAction, props} from "@ngrx/store";
import {AboutUsInterface} from "../../shared/interface/about.interface";
import {BackendErrorsInterface} from "../../shared/BackendError.Interface";


export const AddAboutAction = createAction(ActionTypes.ADD_ABOUT_US,
  props<{request: AboutUsInterface}>()
)

  export const AddAbouSUCCESStAction = createAction(ActionTypes.ADD_ABOUT_US_SUCCESS,
  props<{response: AboutUsInterface}>()
)

export const AddAbouFAILUREtAction = createAction(ActionTypes.ADD_ABOUT_US_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
