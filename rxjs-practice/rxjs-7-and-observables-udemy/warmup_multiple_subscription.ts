import { Observable } from "rxjs";
import appendToBody from "./append_to_body";

const observable$ = new Observable<string>(subscriber => {
  appendToBody('Observable executed');
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
});

appendToBody('Subscription 1 starts');
observable$.subscribe(value => appendToBody(`Subscription 1: ${value}`));

setTimeout(() => {
  appendToBody('Subscription 2 starts');
  observable$.subscribe(value => appendToBody(`Subscription 2: ${value}`));
}, 1000);
