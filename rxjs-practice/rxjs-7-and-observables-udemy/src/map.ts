import { forkJoin } from "rxjs";

import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";
import appendToBody from "../append_to_body";

const randomFirstName$ = ajax<any>('https://randomuser.me/api/').pipe(
    map((ajaxResponse) => ajaxResponse.response.results[0].name.first)
  );//results.name.first results.location.country results.picture.large

  const randomCapital$ = ajax<any>('https://randomuser.me/api/').pipe(
    map((ajaxResponse) => ajaxResponse.response.results[0].location.country)
  );

  const randomPicture$ = ajax<any>('https://randomuser.me/api/').pipe(
    map(ajaxResponse => ajaxResponse.response.results[0].picture.large)
  );

  forkJoin([randomFirstName$, randomCapital$, randomPicture$]).subscribe(
    ([firstName, capital, pic]) =>
        appendToBody(`${firstName} is from ${capital}`, pic)

  );

