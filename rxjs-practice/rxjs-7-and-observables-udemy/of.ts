import { Observable, of } from "rxjs";
import appendToBody from "./append_to_body";

// method 1
of('Hello', 'World').subscribe({
  next: value => appendToBody(`method 1 ${value}`),
  complete: () => appendToBody('Complete')
});


// method 2
const myObservable$ = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

myObservable$.subscribe({
  next: value => appendToBody(`method 2 ${value}`),
  complete: () => appendToBody('Complete')
});

// method 3
function myOf(...args: any[]) {
  return new Observable(subscriber => {
    args.forEach(value => subscriber.next(value));
    subscriber.complete();
  });
}

myOf('Hello', 'World').subscribe({
  next: value => appendToBody(`method 3 ${value}`),
  complete: () => appendToBody('Complete')
});

