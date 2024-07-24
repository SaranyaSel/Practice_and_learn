import { Observable } from "rxjs";
import appendToBody from "../append_to_body";

const interval$ = new Observable<number>(subscriber => {
  let counter = 0;

  const intervalId = setInterval(() => {
    appendToBody('Timeout!');
    subscriber.next(counter++);
  }, 1000);

  return () => clearInterval(intervalId);
});

const subscription = interval$.subscribe({
  next: value => appendToBody(`${value}`),
  complete: () => appendToBody('Completed')
});

setTimeout(() => {
  subscription.unsubscribe();
  appendToBody('Unsubscribe');
}, 5000);
