import { ajax } from "rxjs/ajax";

const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

// Function to append text to the body of the document
function appendToBody(message: string) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(message);
  node.appendChild(textNode);
  document.body.appendChild(node);
}

ajax$.subscribe(
  data => {
    if (data) {
      appendToBody(`Sub 1: ${data.response.first_name}`);
    }
  }
);

setTimeout(() => {
  appendToBody('Subscribing after 2 seconds. But due the server limits, it will not work sometimes');
  ajax$.subscribe(
    data => {
      if (data) {
        appendToBody(`Sub 2: ${data.response.first_name}`);
      }
    }
  );
}, 2000);

setTimeout(() => {
  appendToBody('Subscribing after 5 seconds. But due the server limits, it will not work');
  ajax$.subscribe(
    data => {
      if (data) {
        console.log(`Sub 3: ${data.response.first_name}`);
      }
    }
  );
}, 5000);
