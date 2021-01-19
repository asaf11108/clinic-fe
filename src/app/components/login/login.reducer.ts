import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';

export const loginFeatureKey = 'login';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(LoginActions.loadLogin, state => state),
  on(LoginActions.loadLoginSuccess, (state, action) => state),
  on(LoginActions.loadLoginFailure, (state, action) => state),

);

