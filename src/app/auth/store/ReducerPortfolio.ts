import {createReducer, on} from "@ngrx/store";

import {PortfolioStateInterface} from "../types/PortfolioStateInterface";
import {CategoryAction, CategoryFAILUREAction, CategorySUCCESSAction} from "./Actions/actionsCategory";
import {GetCategoryAction, GetCategoryFAILUREAction, GetCategorySUCCESSAction} from "./Actions/actionsGetCategory";
import {AddPortfolioAction, AddPortfolioFAILUREAction, AddPortfolioSUCCESSAction} from "./Actions/actionsAddPortfolio";
import {
  GetAuthPortfolioAction,
  GetAuthPortfolioFAILUREAction,
  GetAuthPortfolioSUCCESSAction
} from "./Actions/actionsGetPortfolio";
import {
  DeleteAuthPortfolioAction,
  DeleteAuthPortfolioFAILUREAction,
  DeleteAuthPortfolioSUCCESSAction
} from "./Actions/actionsDeletePortfolio";
import {
  GetAuthPortfolioByIdAction,
  GetAuthPortfolioBYIdFAILUREAction,
  GetAuthPortfolioBYIdSUCCESSAction
} from "./Actions/actionsGetPortfolioById";
import {
  UpdateAuthPortfolioAction,
  UpdateAuthPortfolioFAILUREAction,
  UpdateAuthPortfolioSUCCESSAction
} from "./Actions/actionsUpdatePortfolio";

const intitalState : PortfolioStateInterface = {

  isSubmitting: false,
  isLoading: false,
  validationError:  null,
  Category: null,
  Portfolio_all: null,
  Portfolio_one: null,
  isDeleting: null

}

export const PortfolioReducer = createReducer(intitalState,
  on(CategoryAction, (state):PortfolioStateInterface =>
    ({
      ...state,
      isSubmitting : true,
      validationError: null,


    })
  ),

    on(CategorySUCCESSAction, (state):PortfolioStateInterface =>
      ({
        ...state,
        isSubmitting : false

      })
),

  on(CategoryFAILUREAction, (state, action):PortfolioStateInterface =>
    ({
      ...state,
      validationError: action.errors,
        isSubmitting : false

    })
  ),

  on(DeleteAuthPortfolioAction, (state):PortfolioStateInterface =>
    ({
      ...state,
      isDeleting: true,
      // validationError: null,

    })
  ),
  on(DeleteAuthPortfolioSUCCESSAction, (state):PortfolioStateInterface =>
    ({
      ...state,
      isDeleting: false,
      // validationError: null,

    })
  ),
  on(DeleteAuthPortfolioFAILUREAction, (state):PortfolioStateInterface =>
    ({
      ...state,
      isDeleting: false,

      // validationError: null,

    })
  ),


  on(UpdateAuthPortfolioAction, (state):PortfolioStateInterface =>
    ({
      ...state,
      isLoading: true,
      // validationError: null,

    })
  ),
  on(UpdateAuthPortfolioSUCCESSAction, (state, action):PortfolioStateInterface =>
    ({
      ...state,
      isLoading: true,
      Portfolio_one: action.response
      // validationError: null,

    })
  ),
  on(UpdateAuthPortfolioFAILUREAction, (state, action):PortfolioStateInterface =>
    ({
      ...state,
      isLoading: true

      // validationError: null,

    })
  ),



  on(GetAuthPortfolioByIdAction, (state):PortfolioStateInterface =>
    ({
      ...state,
      isLoading: true,
      // validationError: null,

    })
  ),
  on(GetAuthPortfolioBYIdSUCCESSAction, (state, action):PortfolioStateInterface =>
    ({
      ...state,
      isLoading: true,
      Portfolio_one: action.response
      // validationError: null,

    })
  ),
  on(GetAuthPortfolioBYIdFAILUREAction, (state, action):PortfolioStateInterface =>
    ({
      ...state,
      isLoading: true

      // validationError: null,

    })
  ),
  on(GetAuthPortfolioAction, (state):PortfolioStateInterface =>
    ({
      ...state,
      isLoading: true,
     // validationError: null,

    })
  ),
  on(GetAuthPortfolioSUCCESSAction, (state, action):PortfolioStateInterface =>
    ({
      ...state,
      isLoading: false,
      Portfolio_all: action.response
      // validationError: null,

    })
  ),

  on(GetAuthPortfolioFAILUREAction, (state):PortfolioStateInterface =>
    ({
      ...state,
      isLoading: false,

      // validationError: null,

    })
  ),
  on(GetCategoryAction, (state):PortfolioStateInterface =>
    ({
      ...state,
      isLoading: true,
      validationError: null,



    })
  ),

  on(GetCategorySUCCESSAction, (state, action):PortfolioStateInterface =>
    ({
      ...state,
      isLoading : false,
      Category: action.response


    })

  ),

  on(GetCategoryFAILUREAction, (state, action):PortfolioStateInterface =>
    ({
      ...state,
      validationError: action.errors,
      isLoading : false

    })
  ),

  on(AddPortfolioAction, (state):PortfolioStateInterface =>
    ({
      ...state,
      isSubmitting: true,
      validationError: null,



    })
  ),

  on(AddPortfolioSUCCESSAction, (state, action):PortfolioStateInterface =>
    ({
      ...state,
      isSubmitting : false,

    })

  ),

  on(AddPortfolioFAILUREAction, (state, action):PortfolioStateInterface =>
    ({
      ...state,
      validationError: action.errors,
      isSubmitting : false

    })
  ),

)

