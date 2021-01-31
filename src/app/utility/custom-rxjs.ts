import { map } from 'rxjs/operators';
import { combineLatest, Observable, timer } from 'rxjs';

export function requestWithMinimumLoading<T>(request: Observable<T>): Observable<T> {
    return combineLatest([timer(1000), request]).pipe(map(res => res[1])); // TODO: fix catch error timer
}