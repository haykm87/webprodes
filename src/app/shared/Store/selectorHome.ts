import {createFeatureSelector, createSelector} from "@ngrx/store";

import {HomeStateInterface} from "../interface/HomeStateInterface";
//AppStateInterface ,
 export  const selectFeature  = createFeatureSelector <HomeStateInterface>("home");

 export const isSubmitingHomeSelector = createSelector(selectFeature,
   (homeState: HomeStateInterface) => homeState.isSubmitting
   );
/*
export const ValidationErrorHomeSelector = createSelector(selectFeature,
  (homeState: AuthStateInterface) => homeState.validationError
);*/



export const SliderSelector = createSelector(selectFeature,
  (homeState: HomeStateInterface) => homeState.Slider
);


export const GetAboutSelector = createSelector(selectFeature,
  (homeState: HomeStateInterface) => homeState.About
);

export const GetPortfolioEightSelector = createSelector(selectFeature,
  (homeState: HomeStateInterface) => homeState.Portfolio
);

export const GetServicesSelector = createSelector(selectFeature,
  (homeState: HomeStateInterface) => homeState.Services
);

export const GetTeamSelector = createSelector(selectFeature,
  (homeState: HomeStateInterface) => homeState.Team
);

