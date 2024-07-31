

import { catchError, concatMap, EMPTY, fromEvent, map, Observable, of } from "rxjs";
import appendToBody from "../append_to_body";
import { ajax } from "rxjs/ajax";

const source$ = new Observable(subscriber => {
  setTimeout(() => subscriber.next('A'), 2000);
  setTimeout(() => subscriber.next('B'), 5000);
});

appendToBody('App started');
source$.subscribe({
  next: value => appendToBody(`${value}`),
  complete: () => appendToBody('Completed')
});

source$.pipe(
  concatMap(value => of(1,2))
).subscribe({
  next: value => appendToBody(`${value}`),
  complete: () => appendToBody('Completed')
});

// methods 2 dynamic http requests with first solution
const endpointInput: HTMLInputElement = document.querySelector('input#endpoint') as HTMLInputElement;
const fetchButton = document.querySelector('button#fetch') as HTMLButtonElement;

fromEvent(fetchButton, 'click').pipe(
  map(() => endpointInput.value),
  concatMap(value =>
    ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
      catchError(error => of(`Could not fetch data: ${error}`))
    )
  )
).subscribe({
  next: value => appendToBody(JSON.stringify(value)),
  error: error => appendToBody(`Error: ${error.message}`),
  complete: () => appendToBody('Completed')
});

// methods 2 dynamic http requests with second solution
fromEvent(fetchButton, 'click').pipe(
  map(() => endpointInput.value),
  concatMap(value =>ajax(`https://random-data-api.com/api/${value}/random_${value}`)),
  catchError(() => EMPTY)
).subscribe({
  next: value => appendToBody(JSON.stringify(value)),
  error: error => appendToBody(`Error: ${error.message}`),
  complete: () => appendToBody('Completed')
});
