import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login] Load Login'
);

export const loginSuccess = createAction(
  '[Login] Load Login Success',
  props<{ data: any }>()
);

export const loginFailure = createAction(
  '[Login] Load Login Failure',
  props<{ error: any }>()
);
