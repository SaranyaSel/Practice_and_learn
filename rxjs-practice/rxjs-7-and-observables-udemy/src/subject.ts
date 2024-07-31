
import { fromEvent, map, Subject } from "rxjs";
import appendToBody from "../append_to_body";


const emitButton = document.querySelector('button#emit') as HTMLButtonElement;
const inputElement: HTMLInputElement = document.querySelector('#value-input') as HTMLInputElement;
const subscribeButton = document.querySelector('button#subscribe') as HTMLButtonElement;

const value$ = new Subject<string>();

fromEvent(emitButton, 'click').pipe(
  map(() => inputElement.value)
).subscribe(value$);

fromEvent(subscribeButton, 'click').subscribe(
  () => {
    appendToBody('New Subscription');
    value$.subscribe(value => appendToBody(value));
  }
);
