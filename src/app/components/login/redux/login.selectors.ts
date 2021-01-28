import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState, loginFeatureKey } from './login.reducer';

export const selectLoginState = createFeatureSelector<LoginState>(
  loginFeatureKey
);

export const getLoggedIn = createSelector(
  selectLoginState,
  (state: LoginState) => state.loggedIn
);

export const loginHasError = createSelector(
  selectLoginState,
  (state: LoginState) => state.hasError
);

export const isLoging = createSelector(
  selectLoginState,
  (state: LoginState) => state.isLoading
);