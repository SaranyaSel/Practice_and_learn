#Angular Refresh and Learn Signals

following course

[Angular - The Complete Guide (2024 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2)


## Getting Started

 **base project**

   assuming ng installed with

   ```bash
   asdf local nodejs lts
   npm install -g @angular/cli
   ```

   ```bash
   ng new project-name
   ```

**linting**

   Add `ESlint` for linting

   ```bash
   ng add @angular-eslint/schematics

   # show runnable scripts
   npm run

   # run lint
   npm run lint
   ```

**E2E test**

install Cypress with

   ```bash
   ng add @cypress/schematic

   npm run

   # can now
   npm run e2e            # open cypress
   npm run cypress:open   # also open cypress
   npm run cypress:run    # run the default tests

   ```

 **Unit test**


## Angular Essentials - Components, Templates, Services & More


ng g c header --skip-tests
ng g c user --skip-tests

npm start
