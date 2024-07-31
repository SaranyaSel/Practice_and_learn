
import { fromEvent, interval, switchMap } from "rxjs";
import appendToBody from "../append_to_body";

// Example 1: Restart interval on every click
fromEvent(document, 'click')
  .pipe(
    // restart counter on every click
    switchMap(() => interval(1000))
  )
  .subscribe({
    next: value => appendToBody(`${value}`),
    complete: () => appendToBody('Completed')
  });
