import { Observable } from "rxjs";
import appendToBody from "../append_to_body";

const observable$ = new Observable<string>(subscriber => {
  appendToBody('Observable executed');
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
});

const subscription = observable$.subscribe(value => appendToBody(value));

setTimeout(() => {
  appendToBody('Unsubscribe');
  subscription.unsubscribe();
}, 3000);
