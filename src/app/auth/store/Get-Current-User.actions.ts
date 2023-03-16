import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "./actionTypes";
import {CorrentUserInerface} from "../../shared/CurrentUser";


export const GetCurrentUserActions =  createAction(ActionTypes.GET_CURRENT_USER)

export const GetCurrentUserSUCCESSActions = createAction(ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: CorrentUserInerface}>()
  )
export const GetCurrentUserFAILUREActions = createAction(ActionTypes.GET_CURRENT_USER_FAILURE
  )
