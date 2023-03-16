import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "./actionTypes";
import {RegistrRequestInterface} from "../types/registrRequestInterface";
import { CorrentUserInerface} from "../../shared/CurrentUser";
import {LoginRequestInterface} from "../types/LoginRequestInterface";
import {BackendErrorsInterface} from "../../shared/BackendError.Interface";


export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request:LoginRequestInterface}>()
)

export const registerSUCCESSAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser:CorrentUserInerface}>()
)

export const registerFAILUREAction = createAction(
  ActionTypes.REGISTER_FAILURE,
   props<{errors: BackendErrorsInterface}>()
)
