import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Input() task = { title: '', category: '', dueTime: '', importance: 'normal' };
  @Output() saveTask = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  onSave(): void {
    this.saveTask.emit(this.task);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
