import {createAction, props} from "@ngrx/store";


import {ActionTypes} from "../actionTypes";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";
import {OurServicesInterface} from "../../../shared/interface/our-services";


export const OurServicesAction = createAction(
  ActionTypes.OUR_SERVICES,
  props<{request: OurServicesInterface}>()
)

export const OurServicesSUCCESSAction = createAction(
  ActionTypes.OUR_SERVICES_SUCCESS,
  props<{response:OurServicesInterface}>()
)

export const OurServicesFAILUREAction = createAction(
  ActionTypes.OUR_SERVICES_FAILURE,
   props<{errors: BackendErrorsInterface}>()
)
