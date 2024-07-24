import { Observable, timer } from "rxjs";
import appendToBody from "../append_to_body";

// method 1 without tear down logic
timer(2000).subscribe({
  next: value => appendToBody(`Method 1 ${value}`),
  complete: () => appendToBody('Method 1 Completed')
});

const subscription = timer(2000).subscribe({
  next: value => appendToBody(`Method 1 ${value}`),
  complete: () => appendToBody('Method 1 Completed')
});

setTimeout(() => {
  subscription.unsubscribe();
  appendToBody('Method 1 Unsubscribe');
}, 1000);

//  method 2 with tear down logic
const customTimer$ = new Observable(subscriber => {
  const source$ = timer(2000);

  const subscription = source$.subscribe({
    next: value => {
      subscriber.next(value);
    },
    complete: () => {
      subscriber.complete();
    }
  });

  // Return the tear-down logic
  return () => {
    subscription.unsubscribe(); // Unsubscribe from the source observable
    appendToBody('Method 2 Custom tear-down logic executed');
  };
});

const subscription1 = customTimer$.subscribe({
  next: value => appendToBody(`Method 2 ${value}`),
  complete: () => appendToBody('Method 2 Completed')
});

setTimeout(() => {
  subscription1.unsubscribe();
  appendToBody('Method 2 Unsubscribe');
}, 1000);

// method 3 with tear down logic
const timer$ = new Observable<number>(subscriber => {
  const timeoutId = setTimeout(() => {
    appendToBody('Method 3 Timeout!');
    subscriber.next(0);
    subscriber.complete();
  }, 2000);

  return () => clearTimeout(timeoutId);
});

const subscription2 = timer$.subscribe({
  next: value => appendToBody(`Method 3 ${value}`),
  complete: () => appendToBody('Method 3 Completed')
});

setTimeout(() => {
  subscription2.unsubscribe();
  appendToBody('Method 3 Unsubscribe');
}, 1000);



