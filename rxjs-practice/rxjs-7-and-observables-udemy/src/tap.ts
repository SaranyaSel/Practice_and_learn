
import { filter, map, of, tap } from "rxjs";
import appendToBody from "../append_to_body";

// example 1
of(1,8,6,3,9)
.pipe(
  filter(value => value > 5), // filter the values
  tap(value => {  // tap is used to perform side effects
    appendToBody(`Spy: ${value}`)
  }),
  map(value => value * 2), // map the values
)
.subscribe({
  next: value => appendToBody(`Value: ${value}`),
  complete: () => appendToBody('Complete')
});

// example 2
const source$ = of(1,2,4,6);
        source$.pipe(
          tap(val => appendToBody(`Before map: ${val}`)),
          map(val => val + 10),
          tap(val => appendToBody(`After map: ${val}`)),
          filter(val => val > 15),
          tap(val => appendToBody(`After filter: ${val}`))
        ).subscribe({
          next: value => appendToBody(`Value: ${value}`),
          complete: () => appendToBody('Complete')
        });
