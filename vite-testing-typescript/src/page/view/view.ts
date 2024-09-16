import { Component } from "../../type/component";

const ViewPageTemplate = `
  <div class="view-page" data-testid="view-page">
    HELLO

    THIS IS THE VIEW PAGE
  </div>
`;


class ViewPageController {

}

const ViewPageComponent: Component = {
    template: ViewPageTemplate,
    controller: ViewPageController
}

export default ViewPageComponent;