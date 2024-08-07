import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tasks-signals',
  standalone: true,
  imports: [],
  templateUrl: './tasks-signals.component.html',
  styleUrl: './tasks-signals.component.scss'
})
export class TasksSignalsComponent {
  name = input.required<string>();
}
