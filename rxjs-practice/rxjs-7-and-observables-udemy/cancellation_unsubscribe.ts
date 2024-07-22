import { Observable } from "rxjs";

// Function to append text to the body of the document
function appendToBody(message: string) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(message);
  node.appendChild(textNode);
  document.body.appendChild(node);
}

const interval$ = new Observable<number>(subscriber => {
  let counter = 1;

  const intervalId = setInterval(() => {
    appendToBody(`Emitted ${counter}`);
    subscriber.next(counter++);
  }, 2000);

  return () => {
    clearInterval(intervalId);// with out this will be memory leak will be still executing.
  };
});

const subscription = interval$.subscribe(value => appendToBody(value.toString()));

setTimeout(() => {
  appendToBody('Unsubscribe');
  subscription.unsubscribe();
}, 7000);
