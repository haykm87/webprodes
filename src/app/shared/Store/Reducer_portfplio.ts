import {createReducer, on} from "@ngrx/store";





import {
  GETPortfolioAction,
  GETPortfolioASUCCESSAction,
  GETPortfolioFAILUREAction
} from "./Acttions/actionsGetPortfolio";

import {PortfolioAllStateInterface} from "../interface/PortfolioAllStateInterface";

const intitalState : PortfolioAllStateInterface = {

  isSubmitting: false,
  validationError:  null,
  isLoading: false,


  Portfolio: null,


}

 export const PortfolioAllReducer = createReducer(intitalState,



  on(GETPortfolioAction, (state):PortfolioAllStateInterface =>
    ({
      ...state,
      isLoading: true


    })
  ),

  on(GETPortfolioASUCCESSAction, (state, action):PortfolioAllStateInterface =>
    ({
      ...state,
      isLoading: false,
      Portfolio: action.response

    })
  ),
  on(GETPortfolioFAILUREAction, (state, action):PortfolioAllStateInterface =>
    ({
      ...state,
      // validationError: action.errors,
      isLoading: false,
      Portfolio: null

    })
  ),


)

