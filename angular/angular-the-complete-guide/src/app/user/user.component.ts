import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
 @Input() avatar!: string;

 @Input() name!: string;

 get avatarUrl() {
  return 'assets/users/' + this.avatar;
 }
  onSelectUser(): void {

  }
}
