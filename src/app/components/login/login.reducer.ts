import { on } from '@ngrx/store';
import * as LoginActions from './login.actions';
import { createImmerReducer } from 'ngrx-immer/store';
import { LoginReducerHelper } from './login.reducer.helper';

export const loginFeatureKey = 'login';

export interface LoginState {
  loggedIn: boolean;
  isLoading: boolean;
  hasError: boolean;
}

export const initialState: LoginState = {
  loggedIn: false,
  isLoading: false,
  hasError: false
};

const reducerHelper = new LoginReducerHelper();

export const reducer = createImmerReducer(
  initialState,

  on(LoginActions.login, reducerHelper.setLoading),
  on(LoginActions.loginSuccess, reducerHelper.setSuccess),
  on(LoginActions.loginFailure, reducerHelper.setFailure),

);

