import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../const/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user-signals',
  templateUrl: './user-signals.component.html',
  styleUrl: './user-signals.component.scss'
})
export class UserSignalsComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  avatarUrl = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
