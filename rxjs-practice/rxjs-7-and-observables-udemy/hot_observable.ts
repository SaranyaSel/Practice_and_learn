import { Observable } from "rxjs";
import appendToBody from "./append_to_body";

const helloButton = document.querySelector('button#hello') as HTMLElement;

const helloClick$ = new Observable<MouseEvent>(subscriber => {
  helloButton?.addEventListener('click', (event: MouseEvent) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe({
  next: event => appendToBody(`Sub 1: ${event.type, event.x, event.y}`),
  error: error => appendToBody(`Sub 1: ${error.message}`),
});

setTimeout(() => {
  appendToBody('Subscription 2 starts');
  helloClick$.subscribe({
    next: event => appendToBody(`Sub 2: ${event.type, event.x, event.y}`),
    error: error => appendToBody(`Sub 2: ${error.message}`),
  });
}, 5000);
