import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: any;
  @Output() edit = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
  @Output() complete = new EventEmitter<void>();
}
