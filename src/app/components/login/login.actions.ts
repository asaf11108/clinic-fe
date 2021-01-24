import { LoginForm } from './../../model/login';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login] Load Login',
  props<LoginForm>()
);

export const loginSuccess = createAction(
  '[Login] Load Login Success',
  props<{ data: any }>()
);

export const loginFailure = createAction(
  '[Login] Load Login Failure',
  props<{ error: any }>()
);
