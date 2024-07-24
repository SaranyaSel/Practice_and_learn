import { fromEvent, Observable } from "rxjs";
import appendToBody from "../append_to_body";

// method 1
const triggerButton = document.querySelector('button#trigger') as HTMLButtonElement;

const subscription1 = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
  event => appendToBody(`Method 1 ${event.type, event.x, event.y}`)
);

// method 2
const triggerClick$ = new Observable<MouseEvent>(subscriber => {
  const clickHandlerFn = event => {
    appendToBody('Event callback executed');
    subscriber.next(event);
  };

  triggerButton.addEventListener('click', clickHandlerFn);

  return () => {
    triggerButton.removeEventListener('click', clickHandlerFn); // without this memory leak will occur
  };
});

const subscription2 = triggerClick$.subscribe(
  event => appendToBody(`Method 2 ${event.type, event.x, event.y}`)
);

setTimeout(() => {
  appendToBody('Both Unsubscribe');
  subscription1.unsubscribe();
  subscription2.unsubscribe();
}, 5000);
