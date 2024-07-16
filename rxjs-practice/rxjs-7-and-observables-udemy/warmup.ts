import { Observable } from "rxjs";

// Function to append text to the body of the document
function appendToBody(message: string) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(message);
  node.appendChild(textNode);
  document.body.appendChild(node);
}

const observable$ = new Observable<string>(subscriber => {
  appendToBody('Observable executed');
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
});

const subscription = observable$.subscribe(value => appendToBody(value));

setTimeout(() => {
  appendToBody('Unsubscribe');
  subscription.unsubscribe();
}, 3000);
