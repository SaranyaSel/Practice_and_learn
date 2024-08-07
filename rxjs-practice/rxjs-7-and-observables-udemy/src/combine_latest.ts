import { combineLatest, fromEvent } from "rxjs";

const temperatureInput = document.getElementById('temperature-input') as HTMLInputElement;
const conversionDropdown = document.getElementById('conversion-dropdown') as HTMLInputElement;
const resultText = document.getElementById('result-text') as HTMLInputElement;

const temperatureInputEvent$ = fromEvent(temperatureInput, 'input');
const conversionInputEvent$ = fromEvent(conversionDropdown, 'input');

combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe(
  ([temperatureInputEvent, conversionInputEvent]) => {
    const temperature = Number((temperatureInputEvent.target as HTMLInputElement).value);
    const conversion = (conversionInputEvent.target as HTMLInputElement).value;

    let result: number = 0;
    if (conversion === 'f-to-c') {
      result = (temperature - 32) * 5/9;
    } else if (conversion === 'c-to-f') {
      result = temperature * 9/5 + 32;
    }

    resultText.innerText = String(result);
  }
);
