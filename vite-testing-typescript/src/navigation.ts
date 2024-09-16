
import ViewPageComponent from "./page/view/view";
import { Component } from "./type/component";

export type Route = {
    path: string,
    component: Component
}

export function navigate(route: Route): boolean {
    switch(route.path) {
        case 'view':
            return navigateTo(ViewPageComponent);
    }

    throw Error("Can't find route");
}

function navigateTo(component: Component): any {
    const routeSocket = document.getElementById('route-socket');

    if (!routeSocket) {
        throw new Error("Must have a route socket!");
    }

    routeSocket.innerHTML = component.template;
    const klass = component.controller as unknown as any;
    return new klass();
}