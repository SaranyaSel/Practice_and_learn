import { ajax } from "rxjs/ajax";
import appendToBody from "./append_to_body";
const ajax$ = ajax<any>('https://randomuser.me/api/');

ajax$.subscribe(
  data => {
    if (data) {
      appendToBody(`Sub 1: ${data.response.results[0].name.first}`);
    }
  }
);

setTimeout(() => {
  appendToBody('Subscribing after 2 seconds. ');
  ajax$.subscribe(
    data => {
      if (data) {
        appendToBody(`Sub 2: ${data.response.results[0].name.first}`);
      }
    }
  );
}, 2000);

setTimeout(() => {
  appendToBody('Subscribing after 5 seconds');
  ajax$.subscribe(
    data => {
      if (data) {
        appendToBody(`Sub 3: ${data.response.results[0].name.first}`);
      }
    }
  );
}, 5000);
