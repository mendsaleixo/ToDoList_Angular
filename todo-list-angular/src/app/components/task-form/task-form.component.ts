
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() saveTask = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  task = {
    title: '',
    category: '',
    dueTime: '',
    importance: '' // Pode ser 'alta', 'normal', 'baixa'
  };

  onSave() {
    this.saveTask.emit(this.task);
    this.resetForm();
  }

  onCancel() {
    this.cancel.emit();
    this.resetForm();
  }

  resetForm() {
    this.task = { title: '', category: '', dueTime: '', importance: 'normal' };
  }
}
