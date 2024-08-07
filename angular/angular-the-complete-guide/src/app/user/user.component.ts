import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: {
    id: string;
    avatar: string;
    name: string;
  };

  @Output() selectUser = new EventEmitter<string>();

  get avatarUrl() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser(): void {
    this.selectUser.emit(this.user.id);
  }
}
