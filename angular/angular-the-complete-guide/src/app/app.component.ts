import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './const/dummy-users';
import { UserSignalsComponent } from './user-signals/user-signals.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksSignalsComponent } from './tasks-signals/tasks-signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, UserSignalsComponent, TasksComponent, TasksSignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-the-complete-guide';
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  onSelectUser(id: string): void {
    console.log('Selected user with id' + id);
    this.selectedUserId = id;
  }

  get selectedUser() {
    // it can have undefined value so using !. if you think there might be undefined value then use ?.
    return this.users.find((user)=> user.id===this.selectedUserId)!;
  }
}
