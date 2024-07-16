import { Observable } from "rxjs";

// Function to append text to the body of the document
function appendToBody(message: string) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(message);
  node.appendChild(textNode);
  document.body.appendChild(node);
}

const name$ = new Observable<string>(subscriber => {
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.next('Charlie');
  subscriber.complete();
})

const observer = {
  next: (value) => appendToBody(value),
};
name$.subscribe(observer);

// alternate inline observer defaults to next:
name$.subscribe((value) => appendToBody(value));
