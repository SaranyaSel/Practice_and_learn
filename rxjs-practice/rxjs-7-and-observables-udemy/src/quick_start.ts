import { Observable } from "rxjs";
import appendToBody from "../append_to_body";

const name$ = new Observable<string>(subscriber => {
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.next('Charlie');
  subscriber.complete();
})

const observer = {
  next: (value) => appendToBody(value),
};
name$.subscribe(observer);

// alternate inline observer defaults to next:
name$.subscribe((value) => appendToBody(value));
