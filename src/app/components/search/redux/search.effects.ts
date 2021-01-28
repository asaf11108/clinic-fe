import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SearchActions from './search.actions';



@Injectable()
export class SearchEffects {

  loadSearchs$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SearchActions.loadSearchs),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SearchActions.loadSearchsSuccess({ data })),
          catchError(error => of(SearchActions.loadSearchsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
