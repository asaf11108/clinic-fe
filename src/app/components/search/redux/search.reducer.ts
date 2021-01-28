import { Action, createReducer, on } from '@ngrx/store';
import * as SearchActions from './search.actions';

export const searchFeatureKey = 'search';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(SearchActions.loadSearchs, state => state),
  on(SearchActions.loadSearchsSuccess, (state, action) => state),
  on(SearchActions.loadSearchsFailure, (state, action) => state),

);

