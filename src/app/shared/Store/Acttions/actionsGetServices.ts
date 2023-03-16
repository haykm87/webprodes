import {createAction, props} from "@ngrx/store";

import {ActionTypesHome} from "../actionTypesHome";

import {OurServicesInterface} from "../../interface/our-services";


export const GETServicesAction = createAction(
  ActionTypesHome.GET_SERVICES
)

export const GETServicesSUCCESSAction = createAction(
  ActionTypesHome.GET_SERVICES_SUCCESS,
  props<{response:OurServicesInterface[]}>()
)

export const GETServicesFAILUREAction = createAction(
  ActionTypesHome.GET_SERVICES_FAILURE
)
