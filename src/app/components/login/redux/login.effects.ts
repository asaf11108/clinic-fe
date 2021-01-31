import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import * as LoginActions from './login.actions';
import { Auth } from 'aws-amplify';
import { requestWithMinimumLoading } from '../../../utility/custom-rxjs';



@Injectable()
export class LoginEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(LoginActions.login),
      switchMap(action =>
        requestWithMinimumLoading(from(Auth.signIn({ username: action.username, password: action.password}))).pipe(
          map(data => LoginActions.loginSuccess({ data })),
          catchError(error => of(LoginActions.loginFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions) {}

}
