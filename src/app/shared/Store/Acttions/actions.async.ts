import {createAction, props} from "@ngrx/store";
import {ActionTypesHome} from "../actionTypesHome";


export const LogoutAction = createAction(
  ActionTypesHome.LOGOUT
)

