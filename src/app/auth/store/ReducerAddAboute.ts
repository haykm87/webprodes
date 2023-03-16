import {createReducer, on} from "@ngrx/store";

import {AboutStateInterface} from "../types/AboutStateInterface";
import {AddAbouFAILUREtAction, AddAbouSUCCESStAction, AddAboutAction} from "./AddAbout.action";
import {OurTeamAction, OurTeamFAILUREAction, OurTeamSUCCESSAction} from "./Actions/actionsOurTeam";
import {OurServicesAction, OurServicesFAILUREAction, OurServicesSUCCESSAction} from "./Actions/actionsOurServices";
import {AddSliderAction, AddSliderFAILUREAction} from "./Actions/actionsAddSlider";

const intitalState : AboutStateInterface = {

  isSubmiting: false,
  validationError:  null,

}

export const Aboutreducer = createReducer(intitalState,
  on(AddAboutAction, (state):AboutStateInterface =>
    ({
      ...state,
      isSubmiting : true,
      validationError: null

    })
  ),

    on(AddAbouSUCCESStAction, (state):AboutStateInterface =>
      ({
        ...state,
         isSubmiting : false


      })
),

  on(AddAbouFAILUREtAction, (state, action):AboutStateInterface =>
    ({
      ...state,
   validationError: action.errors,
      isSubmiting : false,


    })
  ),

  on(OurTeamAction, (state):AboutStateInterface =>
    ({
      ...state,
      isSubmiting : true,
      validationError: null

    })
  ),

  on(OurTeamSUCCESSAction, (state):AboutStateInterface =>
    ({
      ...state,
      isSubmiting : false


    })
  ),

  on(OurTeamFAILUREAction, (state, action):AboutStateInterface =>
    ({
      ...state,
      validationError: action.errors,
      isSubmiting : false,


    })
  ),

  on(OurServicesAction, (state):AboutStateInterface =>
    ({
      ...state,
      isSubmiting : true,
      validationError: null

    })
  ),

  on(OurServicesSUCCESSAction, (state):AboutStateInterface =>
    ({
      ...state,
      isSubmiting : false


    })
  ),

  on(OurServicesFAILUREAction, (state, action):AboutStateInterface =>
    ({
      ...state,
      validationError: action.errors,
      isSubmiting : false,


    })
  ),

  on(AddSliderAction, (state):AboutStateInterface =>
    ({
      ...state,
      isSubmiting : true,
      validationError: null

    })
  ),

  on(AddAbouSUCCESStAction, (state):AboutStateInterface =>
    ({
      ...state,
      isSubmiting : false


    })
  ),

  on(AddSliderFAILUREAction, (state, action):AboutStateInterface =>
    ({
      ...state,
      validationError: action.errors,
      isSubmiting : false,


    })
  ),

)

