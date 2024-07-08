#Ionic Refresh

following course

[
    Udemy: Build Native iOS & Android as well as Progressive Web
    Apps with Angular, Capacitor and the Ionic Framework (Ionic
    4+).
](https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps)

## Section 1 - Getting Started

start new project

following:
  https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps
using:
```
    asdf local nodejs 21.6.1
    npm install -g ionic
    ionic start
```
when you do the ionic start command it will prompt
    ? Use the app creation wizard? No
    ? Framework: Angular
    ? Project name: ionic-refresh
    ? Starter template: blank
    ? Would you like to build your app with NgModules or Standalone Components? NgModules
    ? Create free Ionic account? No

To run the project
```
    ionic serve

```
Recommended extension

    Angular Essentials
    Material icons theme

Ionic Documents
    https://ionicframework.com/docs/components

commit: 29c650827a3e6577124326591f1cc419a9780dc4

Added ion-button

commit: 2b905224ebfb314c767286cf36bb389e70650058

```
ionic start --list
```

name     | description
-------------------------------------------------------------
tabs     | A starting project with a simple tabbed interface
sidemenu | A starting project with a side menu with navigation in the content area
blank    | A blank starter project
list     | A starting project with a list

```
ionic start --help
```

ionic start <name> <template> [options]

Inputs:

    name ............................ The name of your new project (e.g. myApp,
                                      "My App")
    template ........................ The starter template to use (e.g. blank,
                                      tabs; use --list to see all)

Options:

    --list, -l ...................... List available starter templates
    --type=<type> ................... Type of project to start (e.g. vue,
                                      angular, angular-standalone, react)
    --cordova ....................... (deprecated) Include Cordova integration
    --capacitor ..................... Include Capacitor integration
    --id=<id> ....................... Specify an Ionic App ID to link

Advanced Options:

    --no-deps ....................... Do not install npm/yarn dependencies
    --no-git ........................ Do not initialize a git repo
    --link .......................... Connect your new app to Ionic
    --project-id=<slug> ............. Specify a slug for your app (used for the
                                      directory name and package name)
    --package-id=<id> ............... Specify the bundle ID/application ID for
                                      your app (reverse-DNS notation)

Other useful commands
```
    ionic start
    ionic start --list
    ionic start myApp
    ionic start myApp blank
    ionic start myApp tabs --capacitor
    ionic start myApp list --type=vue
    ionic start "My App" blank
    ionic start "Conference App" \
            https://github.com/ionic-team/ionic-conference-app
```

## Section 2 - Angular Refresher
ng new for angular refresher

```
    npm install -g @angular/cli
    ng new chapter-2-ng-refresher
    cd chapter-2-ng-refresher
```

Run and build

```
    ng serve
    ng build
```

---
Add a component

```
    ng generate component persons
    or
    ng g c persons
```
Also deleted the generic cruft from app.component.html


## Section 3 - Ionic Component Basics

## Section 4 - Angular + Ionic

## Section 5 - Building Native Apps with Capacitor

## Section 6 - Debugging

## Section 7 - Navigation & Routing in Ionic Apps

## Section 8 - Ionic Component Overview

## Section 9 - Styling & Theming Ionic Apps

## Section 10 - Handling User Input

## Section 11 - Managing State

## Section 12 - Sending Http Requests

## Section 13 - Adding Google Maps

## Section 14 - Using Native Device Features

_Camera & ..._

## Section 15 - Adding Authentication

## Section 16 - Publishing the Apps

## Section 17 - Roundup

## Section 18 - Bonus Content
