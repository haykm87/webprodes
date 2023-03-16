
import {BackendErrorsInterface} from "../BackendError.Interface";

import {Portfolio} from "./portfolio.interface";


export interface PortfolioAllStateInterface
{
  isSubmitting: boolean | null
  validationError: BackendErrorsInterface | null
  isLoading: boolean | null,

  Portfolio: Portfolio[],

}
