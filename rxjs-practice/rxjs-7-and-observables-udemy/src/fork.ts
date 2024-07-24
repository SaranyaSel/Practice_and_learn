import { forkJoin, map } from "rxjs";
import { ajax } from "rxjs/ajax";
import appendToBody from "../append_to_body";

const randomName$ = ajax<any>('https://randomuser.me/api/').pipe(
  map((ajaxResponse) => ajaxResponse.response.results[0].name.first)
);

const randomNation$ = ajax<any>('https://randomuser.me/api/').pipe(
  map((ajaxResponse) => ajaxResponse.response.results[0].location.country)
);

const randomPicture$ = ajax<any>('https://randomuser.me/api/').pipe(
  map(ajaxResponse => ajaxResponse.response.results[0].picture.large)
);

// randomName$.subscribe(ajaxResponse => appendToBody(`${ajaxResponse.response.first_name}`));
// randomNation$.subscribe(ajaxResponse => appendToBody(`${ajaxResponse.response.capital}`));
// randomFood$.subscribe(ajaxResponse => appendToBody(`${ajaxResponse.response.dish}`));

forkJoin([randomName$, randomNation$, randomPicture$]).subscribe(
  ([nameAjax, nationAjax, picAjax]) =>
    appendToBody(`${nameAjax} is from
                  ${nationAjax}`, picAjax)
);
