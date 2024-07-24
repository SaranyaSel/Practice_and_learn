import { Observable } from "rxjs";
import appendToBody from "../append_to_body";

// Async emission
const observable$ = new Observable<string>(subscriber => {
  appendToBody('Observable executed');
  subscriber.next('Hello');
  setTimeout(() => {
    subscriber.next('World');
  }, 2000);
});

appendToBody('Before subscription');
observable$.subscribe((value) => appendToBody(value));
appendToBody('After subscription');
