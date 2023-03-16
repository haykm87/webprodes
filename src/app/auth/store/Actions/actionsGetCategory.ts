import {createAction, props} from "@ngrx/store";

;
import {ActionTypes} from "../actionTypes";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";
import {CategoryInterface} from "../../../shared/interface/Category.interface";


export const GetCategoryAction = createAction(
  ActionTypes.GET_Category
)

export const GetCategorySUCCESSAction = createAction(
  ActionTypes.GET_Category_SUCCESS,
  props<{response:CategoryInterface[]}>()
)

export const GetCategoryFAILUREAction = createAction(
  ActionTypes.GET_Category_FAILURE,
   props<{errors: BackendErrorsInterface}>()
)
