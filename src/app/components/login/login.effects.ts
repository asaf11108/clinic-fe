import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as LoginActions from './login.actions';



@Injectable()
export class LoginEffects {

  loadLogin$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(LoginActions.loadLogin),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => LoginActions.loadLoginSuccess({ data })),
          catchError(error => of(LoginActions.loadLoginFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
