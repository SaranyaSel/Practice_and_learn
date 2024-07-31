

import { catchError, EMPTY, Observable, of } from "rxjs";
import appendToBody from "../append_to_body";

const failingHttpRequest$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.error(new Error('Timeout'));
  }, 3000);
});

appendToBody('App started');

failingHttpRequest$.pipe(
  catchError(error => of(`Error: ${error.message}`))
).subscribe({
  next: value => appendToBody(`${value}`),
  complete: () => appendToBody('Completed')
});


// Empty will complete the observable
failingHttpRequest$.pipe(
  catchError(error => EMPTY)
).subscribe({
  next: value => appendToBody(`${value} 2`),
  complete: () => appendToBody('Completed 2')
});

