import {CorrentUserInerface} from "../../shared/CurrentUser";
import {BackendErrorsInterface} from "../../shared/BackendError.Interface";

export interface AuthStateInterface
{
  isSubmiting: boolean
  currentUser : CorrentUserInerface | null
  IsLoggedIn: boolean | null
  validationError: BackendErrorsInterface | null | any
  isLoading: boolean | null,
}
