import {createAction, props} from "@ngrx/store";

import {OurTeamInterface} from "../../../shared/interface/our-team";
import {ActionTypes} from "../actionTypes";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";


export const OurTeamAction = createAction(
  ActionTypes.OUR_TEAM,
  props<{request: OurTeamInterface}>()
)

export const OurTeamSUCCESSAction = createAction(
  ActionTypes.OUR_TEAM_SUCCESS,
  props<{response:OurTeamInterface}>()
)

export const OurTeamFAILUREAction = createAction(
  ActionTypes.OUR_TEAM_FAILURE,
   props<{errors: BackendErrorsInterface}>()
)
