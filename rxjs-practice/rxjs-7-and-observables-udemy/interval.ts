import { Observable, timer } from "rxjs";


// Function to append text to the body of the document
function appendToBody(message: string) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(message);
  node.appendChild(textNode);
  document.body.appendChild(node);
}

const interval$ = new Observable<number>(subscriber => {
  let counter = 0;

  const intervalId = setInterval(() => {
    appendToBody('Timeout!');
    subscriber.next(counter++);
  }, 1000);

  return () => clearInterval(intervalId);
});

const subscription = interval$.subscribe({
  next: value => appendToBody(`${value}`),
  complete: () => appendToBody('Completed')
});

setTimeout(() => {
  subscription.unsubscribe();
  appendToBody('Unsubscribe');
}, 5000);
