import {createReducer, on} from "@ngrx/store";
import {AuthStateInterface} from "../types/authStateInterface";
import {registerAction, registerFAILUREAction, registerSUCCESSAction} from "./actions";
import {CorrentUserInerface} from "../../shared/CurrentUser";
import {BackendErrorMessageComponent} from "../../shared/backend-error-message/backend-error-message.component";
import {BackendErrorsInterface} from "../../shared/BackendError.Interface";
import {GetCurrentUserActions, GetCurrentUserSUCCESSActions} from "./Get-Current-User.actions";
import {LogoutAction} from "../../shared/Store/Acttions/actions.async";

const intitalState : AuthStateInterface = {

  isSubmiting: false,
  currentUser : null,
  IsLoggedIn:  null,
  validationError:  null,
  isLoading: false,

}

export const Authreducer = createReducer(intitalState,
  on(registerAction, (state):AuthStateInterface =>
    ({
      ...state,
      isSubmiting : true,
      validationError: null

    })
  ),

    on(registerSUCCESSAction, (state, action):AuthStateInterface =>
      ({
        ...state,
        IsLoggedIn: true,
        currentUser: action.currentUser,
        isSubmiting : false,


      })
),

  on(registerFAILUREAction, (state, action):AuthStateInterface =>
    ({
      ...state,
   validationError: action.errors,
      isSubmiting : false,


    })
  ),
  on(GetCurrentUserActions, (state):AuthStateInterface =>
    ({
      ...state,
      isLoading: true


    })
  ),

  on(GetCurrentUserSUCCESSActions, (state, action):AuthStateInterface =>
    ({
      ...state,
      isLoading: false,
      IsLoggedIn: true,
      currentUser: action.currentUser,

    })
  ),
  on(registerFAILUREAction, (state, action):AuthStateInterface =>
    ({
      ...state,
     // validationError: action.errors,
      isLoading: false,
      IsLoggedIn: false,
      currentUser: null

    })
  ),
  on(LogoutAction, (): AuthStateInterface =>
    ({
      ...intitalState,
      IsLoggedIn: false
    })
  )

)

