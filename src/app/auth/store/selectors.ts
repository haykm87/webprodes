import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateInterface} from "../../shared/appStateInterface";
import {AuthStateInterface} from "../types/authStateInterface";
import {AboutStateInterface} from "../types/AboutStateInterface";
import {PortfolioStateInterface} from "../types/PortfolioStateInterface";
import {Aboutreducer} from "./ReducerAddAboute";
import {Authreducer} from "./Reducer";
//AppStateInterface ,
 export  const selectFeature  = createFeatureSelector <AuthStateInterface>("auth");
export  const selectFeatureAboute  = createFeatureSelector < AboutStateInterface>("auth");

export  const selectFeaturePortfolio  = createFeatureSelector < PortfolioStateInterface>("auth");

 export const isSubmitingSelector = createSelector(selectFeature,
   (auteState: AuthStateInterface) => auteState['authreducer'].isSubmiting
   );

export const ValidationErrorSelector = createSelector(selectFeature,
  (auteState: AuthStateInterface) => auteState['authreducer'].validationError
);

export const IsLoginSelector = createSelector(selectFeature,
  (auteState: AuthStateInterface) => auteState['authreducer'].IsLoggedIn
);

export const testSelector = createSelector(selectFeature,
  (auteState: any) => auteState['authreducer'].IsLoggedIn
);

export const IsAnonymousSelector = createSelector(selectFeature,
  (auteState: AuthStateInterface) => auteState['authreducer'].IsLoggedIn === false
);

export const CurrentUserSelector = createSelector(selectFeature,
  (auteState: AuthStateInterface) => auteState['authreducer'].currentUser
);

export const AbouteErrorSelector = createSelector(selectFeatureAboute,
  (about: AboutStateInterface) => about['aboutreducer'].validationError
);
export const isSubmitingAboutSelector = createSelector(selectFeatureAboute,
  (about: AboutStateInterface) => about['aboutreducer'].isSubmiting
);


export const isSubmitingPortfolioSelector = createSelector(selectFeaturePortfolio,
  (Portfolio: PortfolioStateInterface) => Portfolio['Portfolio'].isSubmitting
);

export const isLoadingPortfolioSelector = createSelector(selectFeaturePortfolio,
  (Portfolio: PortfolioStateInterface) => Portfolio['Portfolio'].isLoading
);

export const AllCategoryPortfolioSelector = createSelector(selectFeaturePortfolio,
  (Portfolio: PortfolioStateInterface) => Portfolio['Portfolio'].Category
);

export const PortfoliErrorSelector = createSelector(selectFeaturePortfolio,
  (Portfolio: PortfolioStateInterface) => Portfolio['Portfolio'].validationError
);

export const AllAuthPortfolioSelector = createSelector(selectFeaturePortfolio,
  (Portfolio: PortfolioStateInterface) => Portfolio['Portfolio'].Portfolio_all
);

export const AuthPortfolioByIDSelector = createSelector(selectFeaturePortfolio,
  (Portfolio: PortfolioStateInterface) => Portfolio['Portfolio'].Portfolio_one
);

export const UpdatePortfolioSelector = createSelector(selectFeaturePortfolio,
  (Portfolio: PortfolioStateInterface) => Portfolio['Portfolio'].Portfolio_one
);
