import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSearch from './search.reducer';

export const selectSearchState = createFeatureSelector<fromSearch.State>(
  fromSearch.searchFeatureKey
);
