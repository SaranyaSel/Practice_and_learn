import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // changing text.
  text = 'Welcome to the Ionic Blank starter app.';

  constructor() {}

  onChangeText(): void {
    this.text = 'Text changed';
  }

}
