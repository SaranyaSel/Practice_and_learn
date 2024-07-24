import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";
import appendToBody from "./append_to_body";

const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax('https://random-data-api.com/api/nation/random_nation');

const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe(ajaxResponse => appendToBody(`${ajaxResponse.response.first_name}`));
// randomNation$.subscribe(ajaxResponse => appendToBody(`${ajaxResponse.response.capital}`));
// randomFood$.subscribe(ajaxResponse => appendToBody(`${ajaxResponse.response.dish}`));

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([nameAjax, nationAjax, foodAjax]) =>
    appendToBody(`${(nameAjax.response as any).first_name} is from
                  ${(nationAjax.response as any).capital} and likes to eat
                  ${(foodAjax.response as any).dish}.`)
);
