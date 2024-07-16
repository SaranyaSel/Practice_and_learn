import { Observable } from "rxjs";

// Function to append text to the body of the document
function appendToBody(message: string) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(message);
  node.appendChild(textNode);
  document.body.appendChild(node);
}

// Empty observable to show that it not async by default
const observable$ = new Observable<string>(subscriber => {
  appendToBody('Observable executed');
});

appendToBody('Before subscription');
observable$.subscribe();
appendToBody('After subscription');
