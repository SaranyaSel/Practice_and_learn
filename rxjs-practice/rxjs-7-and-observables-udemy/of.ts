import { Observable, of } from "rxjs";


// Function to append text to the body of the document
function appendToBody(message: string) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(message);
  node.appendChild(textNode);
  document.body.appendChild(node);
}

// method 1
of('Hello', 'World').subscribe({
  next: value => appendToBody(`method 1 ${value}`),
  complete: () => appendToBody('Complete')
});


// method 2
const myObservable$ = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

myObservable$.subscribe({
  next: value => appendToBody(`method 2 ${value}`),
  complete: () => appendToBody('Complete')
});

// method 3
function myOf(...args: any[]) {
  return new Observable(subscriber => {
    args.forEach(value => subscriber.next(value));
    subscriber.complete();
  });
}

myOf('Hello', 'World').subscribe({
  next: value => appendToBody(`method 3 ${value}`),
  complete: () => appendToBody('Complete')
});

