import { Component, computed, input, output } from '@angular/core';
// import { DUMMY_USERS } from '../const/dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user-signals',
  templateUrl: './user-signals.component.html',
  styleUrl: './user-signals.component.scss',
  standalone: true,
})
export class UserSignalsComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // avatarUrl = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // Note: that its readonly. You can't change the value of the signal directly.
  avatar = input.required<string>(); // input() || input<string>(); input.required() you cant have value inside like input.required('value')

  name = input.required<string>();

  id = input.required<string>();

  avatarUrl = computed(() => 'assets/users/' + this.avatar());

  selectUser = output<string>();

  onSelectUser(): void {
    this.selectUser.emit(this.id());
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
