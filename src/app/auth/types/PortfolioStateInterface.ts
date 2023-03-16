
import {BackendErrorsInterface} from "../../shared/BackendError.Interface";
import {CategoryInterface} from "../../shared/interface/Category.interface";
import {Portfolio} from "../../shared/interface/portfolio.interface";

export interface PortfolioStateInterface {
  isSubmitting: boolean | null
  validationError: BackendErrorsInterface | null,
  isLoading: boolean | null,
  isDeleting: boolean | null,
  Category: CategoryInterface[] | null,
  Portfolio_all: Portfolio[] | null
  Portfolio_one: Portfolio | null

}
