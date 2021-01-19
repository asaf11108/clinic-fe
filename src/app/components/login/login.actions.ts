import { createAction, props } from '@ngrx/store';

export const loadLogin = createAction(
  '[Login] Load Login'
);

export const loadLoginSuccess = createAction(
  '[Login] Load Login Success',
  props<{ data: any }>()
);

export const loadLoginFailure = createAction(
  '[Login] Load Login Failure',
  props<{ error: any }>()
);
