import {CorrentUserInerface} from "../../shared/CurrentUser";
import {BackendErrorsInterface} from "../../shared/BackendError.Interface";

export interface AboutStateInterface {
  isSubmiting: boolean | null
  validationError: BackendErrorsInterface | null
}
