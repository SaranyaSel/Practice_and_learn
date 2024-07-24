import { Observable } from "rxjs";
import appendToBody from "../append_to_body";

// Sync emission
const observable$ = new Observable<string>(subscriber => {
  appendToBody('Observable executed');
  subscriber.next('Hello');
});

appendToBody('Before subscription');
observable$.subscribe((value) => appendToBody(value));
appendToBody('After subscription');
