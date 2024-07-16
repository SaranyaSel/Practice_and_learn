import { Observable } from "rxjs";


// Function to append text to the body of the document
function appendToBody(message: string) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(message);
  node.appendChild(textNode);
  document.body.appendChild(node);
}

// Teardown and complete notification
const observable$ = new Observable<string>(subscriber => {
  appendToBody('Observable executed');
  subscriber.next('Hello');
  setTimeout(() => {
    subscriber.next('World');
    subscriber.complete();
  }, 2000);

  return () => {
    appendToBody('Teardown');
  };
});

appendToBody('Before subscription');
observable$.subscribe({
  next: (value) => appendToBody(value),
  complete: () => appendToBody('Completed')
});
appendToBody('After subscription');
