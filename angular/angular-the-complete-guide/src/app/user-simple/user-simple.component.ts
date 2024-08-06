import { Component } from '@angular/core';
import { DUMMY_USERS } from '../const/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user-simple',
  templateUrl: './user-simple.component.html',
  styleUrl: './user-simple.component.scss'
})
export class UserSimpleComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get avatarUrl() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
