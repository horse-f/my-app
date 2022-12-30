import { BehaviorSubject, catchError } from "rxjs";

export function runAsyncObservable(observable) {
    // use a subject to keep track of the async status and data
    const emit = new BehaviorSubject({disposition: 'loading', data: null});
    // emit data and status on success or failure
    observable.pipe(
        catchError(err => emit.next({disposition: 'error', data: err.message}))
    ).subscribe(data => emit.next({disposition: 'loaded', data}));
    return emit.asObservable();
}