import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState, loginFeatureKey } from './login.reducer';

export const selectLoginState = createFeatureSelector<LoginState>(
  loginFeatureKey
);
