
import { debounceTime, fromEvent, map } from "rxjs";
import appendToBody from "../append_to_body";

const sliderInput = document.querySelector('input#slider') as HTMLElement;

fromEvent(sliderInput, 'input').pipe(
  debounceTime(2000),
  map((event: Event) => (event.target as HTMLInputElement).value),
).subscribe({
  next: value => appendToBody(`Value: ${value}`),
  error: error => appendToBody(`Error: ${error.message}`),
});
