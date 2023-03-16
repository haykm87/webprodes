import {createAction, props} from "@ngrx/store";

import {ActionTypesHome} from "../actionTypesHome";

import {OurTeamInterface} from "../../interface/our-team";


export const GETTeamAction = createAction(
  ActionTypesHome.GET_OUR_TEAM
)

export const GETTeamASUCCESSAction = createAction(
  ActionTypesHome.GET_OUR_TEAM_SUCCESS,
  props<{response:OurTeamInterface[]}>()
)

export const GETTeamFAILUREAction = createAction(
  ActionTypesHome.GET_OUR_TEAM_FAILURE
)
