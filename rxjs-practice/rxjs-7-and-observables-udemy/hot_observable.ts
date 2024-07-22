import { Observable } from "rxjs";


// Function to append text to the body of the document
function appendToBody(message: string) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(message);
  node.appendChild(textNode);
  document.body.appendChild(node);
}

const helloButton = document.querySelector('button#hello') as HTMLElement;

const helloClick$ = new Observable<MouseEvent>(subscriber => {
  helloButton?.addEventListener('click', (event: MouseEvent) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe({
  next: event => appendToBody(`Sub 1: ${event.type, event.x, event.y}`),
  error: error => appendToBody(`Sub 1: ${error.message}`),
});

setTimeout(() => {
  appendToBody('Subscription 2 starts');
  helloClick$.subscribe({
    next: event => appendToBody(`Sub 2: ${event.type, event.x, event.y}`),
    error: error => appendToBody(`Sub 2: ${error.message}`),
  });
}, 5000);
