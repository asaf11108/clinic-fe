import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as LoginActions from './login.actions';



@Injectable()
export class LoginEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(LoginActions.login),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => LoginActions.loginSuccess({ data })),
          catchError(error => of(LoginActions.loginFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
