import { Observable } from "rxjs";

// Function to append text to the body of the document
function appendToBody(message: string) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(message);
  node.appendChild(textNode);
  document.body.appendChild(node);
}

// Async emission
const observable$ = new Observable<string>(subscriber => {
  appendToBody('Observable executed');
  subscriber.next('Hello');
  setTimeout(() => {
    subscriber.next('World');
  }, 2000);
});

appendToBody('Before subscription');
observable$.subscribe((value) => appendToBody(value));
appendToBody('After subscription');
