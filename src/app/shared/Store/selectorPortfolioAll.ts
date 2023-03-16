import {createFeatureSelector, createSelector} from "@ngrx/store";


import {PortfolioAllStateInterface} from "../interface/PortfolioAllStateInterface";
//AppStateInterface ,
 export  const selectFeature  = createFeatureSelector <PortfolioAllStateInterface>("PortfolioAll");

 export const isSubmitingPortfolioAllSelector = createSelector(selectFeature,
   (PortfolioState: PortfolioAllStateInterface) => PortfolioState.isSubmitting
   );
/*
export const ValidationErrorHomeSelector = createSelector(selectFeature,
  (homeState: AuthStateInterface) => homeState.validationError
);*/




export const GetPortfolioAllSelector = createSelector(selectFeature,
  (PortfolioState: PortfolioAllStateInterface) => PortfolioState.Portfolio
);



