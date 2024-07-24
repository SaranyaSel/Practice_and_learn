import { forkJoin, Observable } from "rxjs";
import appendToBody from "../append_to_body";

const a$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next('A');
    subscriber.complete();
  }, 5000);

  return () => {
    appendToBody('A teardown');
  };
});

const b$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.error('Failure!');
  }, 3000);

  return () => {
    appendToBody('B teardown');
  };
});

forkJoin([a$, b$]).subscribe({
  next: value => appendToBody(`${value}`),
  error: err => appendToBody(`Error:, ${err}`)
});
