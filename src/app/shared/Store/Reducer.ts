import {createReducer, on} from "@ngrx/store";


import {HomeStateInterface} from "../interface/HomeStateInterface";

import {GETSliderAction, GETSliderFAILUREAction, GETSliderSUCCESSAction} from "./Acttions/actionsGetSlider";
import {GETAboutAction, GETAboutFAILUREAction, GETAboutSUCCESSAction} from "./Acttions/actionsGetAbout";
import {GetCategoryFAILUREAction} from "../../auth/store/Actions/actionsGetCategory";
import {
  GETPortfolioAction,
  GETPortfolioASUCCESSAction,
  GETPortfolioFAILUREAction
} from "./Acttions/actionsGetPortfolio";
import {GETServicesAction, GETServicesFAILUREAction, GETServicesSUCCESSAction} from "./Acttions/actionsGetServices";
import {GETTeamAction, GETTeamASUCCESSAction, GETTeamFAILUREAction} from "./Acttions/actionsGetTeam";
import {
  GETPortfolioEightAction,
  GETPortfolioEightASUCCESSAction,
  GETPortfolioEightFAILUREAction
} from "./Acttions/actionsGetPortfolioEight";

const intitalState : HomeStateInterface = {

  isSubmitting: false,
  validationError:  null,
  isLoading: false,
  Slider: null,
  About: null,
  Portfolio: null,
  Services: null,
  Team: null,

}

export const HomeReducer = createReducer(intitalState,

  on(GETSliderAction, (state):HomeStateInterface =>
    ({
      ...state,
      isLoading: true


    })
  ),

  on(GETSliderSUCCESSAction, (state, action):HomeStateInterface =>
    ({
      ...state,
      isLoading: false,
      Slider: action.response

    })
  ),
  on(GETSliderFAILUREAction, (state, action):HomeStateInterface =>
    ({
      ...state,
      // validationError: action.errors,
      isLoading: false,
      Slider: null

    })
  ),

  on(GETAboutAction, (state):HomeStateInterface =>
    ({
      ...state,
      isLoading: true


    })
  ),

  on(GETAboutSUCCESSAction, (state, action):HomeStateInterface =>
    ({
      ...state,
      isLoading: false,
      About: action.response

    })
  ),
  on(GETAboutFAILUREAction, (state, action):HomeStateInterface =>
    ({
      ...state,
      // validationError: action.errors,
      isLoading: false,
      About: null

    })
  ),

  on(GETPortfolioEightAction, (state):HomeStateInterface =>
    ({
      ...state,
      isLoading: true


    })
  ),

  on(GETPortfolioEightASUCCESSAction, (state, action):HomeStateInterface =>
    ({
      ...state,
      isLoading: false,
      Portfolio: action.response

    })
  ),
  on(GETPortfolioEightFAILUREAction, (state, action):HomeStateInterface =>
    ({
      ...state,
      // validationError: action.errors,
      isLoading: false,
      Portfolio: null

    })
  ),

  on(GETServicesAction, (state):HomeStateInterface =>
    ({
      ...state,
      isLoading: true


    })
  ),

  on(GETServicesSUCCESSAction, (state, action):HomeStateInterface =>
    ({
      ...state,
      isLoading: false,
      Services: action.response

    })
  ),
  on(GETServicesFAILUREAction, (state, action):HomeStateInterface =>
    ({
      ...state,
      // validationError: action.errors,
      isLoading: false,
      Services: null

    })
  ),

  on(GETTeamAction, (state):HomeStateInterface =>
    ({
      ...state,
      isLoading: true


    })
  ),

  on(GETTeamASUCCESSAction, (state, action):HomeStateInterface =>
    ({
      ...state,
      isLoading: false,
      Team: action.response

    })
  ),
  on(GETTeamFAILUREAction, (state, action):HomeStateInterface =>
    ({
      ...state,
      // validationError: action.errors,
      isLoading: false,
      Team: null

    })
  ),

)

