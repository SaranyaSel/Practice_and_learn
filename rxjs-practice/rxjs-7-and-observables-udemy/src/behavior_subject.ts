
import { BehaviorSubject, fromEvent, withLatestFrom } from "rxjs";
import appendToBody from "../append_to_body";


const loggedInSpan: HTMLElement = document.querySelector('span#logged-in') as HTMLElement;
const loginButton: HTMLElement = document.querySelector('button#login') as HTMLElement;
const logoutButton: HTMLElement = document.querySelector('button#logout') as HTMLElement;
const printStateButton: HTMLElement = document.querySelector('button#print-state') as HTMLElement;

const isLoggedIn$ = new BehaviorSubject<boolean>(false);

fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true));
fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false));

// Navigation bar
isLoggedIn$.subscribe(
  isLoggedIn => loggedInSpan.innerText = isLoggedIn.toString()
);

// Buttons
isLoggedIn$.subscribe(isLoggedIn => {
  logoutButton.style.display = isLoggedIn ? 'block' : 'none';
  loginButton.style.display = !isLoggedIn ? 'block' : 'none';
});

fromEvent(printStateButton, 'click').pipe(
  withLatestFrom(isLoggedIn$)
).subscribe(
  ([event, isLoggedIn]) => appendToBody(`User is logged in: ${isLoggedIn}`)
);
