import { Observable } from "rxjs";
import appendToBody from "./append_to_body";

// Empty observable to show that it not async by default
const observable$ = new Observable<string>(subscriber => {
  appendToBody('Observable executed');
});

appendToBody('Before subscription');
observable$.subscribe();
appendToBody('After subscription');
