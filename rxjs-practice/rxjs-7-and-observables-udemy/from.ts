import { from, Observable, of } from "rxjs";


// Function to append text to the body of the document
function appendToBody(message: string) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(message);
  node.appendChild(textNode);
  document.body.appendChild(node);
}

// method 1
from(['Hello', 'World']).subscribe({
  next: value => appendToBody(`method 1 ${value}`),
  complete: () => appendToBody('Complete')
});


// method 2
const somePromise = new Promise((resolve, reject) => {
  // resolve('Resolved');
  reject('Rejected');
});

const myObservable$ = from(somePromise);

myObservable$.subscribe({
  next: value => appendToBody(`method 2 ${value}`),
  error: error => appendToBody(`method 2 Error ${error}`),
  complete: () => appendToBody('Complete')
});
