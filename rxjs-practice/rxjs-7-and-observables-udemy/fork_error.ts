import { forkJoin, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";


// Function to append text to the body of the document
function appendToBody(message: string) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(message);
  node.appendChild(textNode);
  document.body.appendChild(node);
}

const a$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next('A');
    subscriber.complete();
  }, 5000);

  return () => {
    appendToBody('A teardown');
  };
});

const b$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.error('Failure!');
  }, 3000);

  return () => {
    appendToBody('B teardown');
  };
});

forkJoin([a$, b$]).subscribe({
  next: value => appendToBody(`${value}`),
  error: err => appendToBody(`Error:, ${err}`)
});
