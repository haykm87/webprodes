import {createAction, props} from "@ngrx/store";

;
import {ActionTypes} from "../actionTypes";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";
import {CategoryInterface} from "../../../shared/interface/Category.interface";


export const CategoryAction = createAction(
  ActionTypes.Category,
  props<{request: CategoryInterface}>()
)

export const CategorySUCCESSAction = createAction(
  ActionTypes.Category_SUCCESS,
  props<{response:CategoryInterface}>()
)

export const CategoryFAILUREAction = createAction(
  ActionTypes.Category_FAILURE,
   props<{errors: BackendErrorsInterface}>()
)
