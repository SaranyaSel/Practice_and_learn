import { ajax } from "rxjs/ajax";
import appendToBody from "./append_to_body";
const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

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
