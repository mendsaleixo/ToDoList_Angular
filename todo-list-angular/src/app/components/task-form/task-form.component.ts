import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnChanges {
  @Input() task: any = {title: '', category: '', dueTime: '', importance: 'normal', completed: false};
  @Output() saveTask = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  
  titleMaxLength = 50;
  categoryMaxLength = 100;

  errorMessages = {
    title: '',
    category: '',
    dueTime: ''
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task'] && changes['task'].currentValue) {
      this.task = { ...changes['task'].currentValue }; 
    }
  }

 get titleCharsLeft() {
    return this.titleMaxLength - (this.task.title?.length || 0);
  }

  get categoryCharsLeft() {
    return this.categoryMaxLength - (this.task.category?.length || 0);
  }

  onSave(): void {
    this.errorMessages = { title: '', category: '', dueTime: '' };
    let isValid = true;

    if (!this.task.title.trim()) {
      this.errorMessages.title = 'O título é obrigatório';
      isValid = false;
    } else if (this.task.title.length > this.titleMaxLength) {
      this.errorMessages.title = `O título não pode exceder ${this.titleMaxLength} caracteres`;
      isValid = false;
    }

    if (!this.task.category.trim()) {
      this.errorMessages.category = 'A descrição é obrigatória';
      isValid = false;
    } else if (this.task.category.length > this.categoryMaxLength) {
      this.errorMessages.category = `A descrição não pode exceder ${this.categoryMaxLength} caracteres`;
      isValid = false;
    }

    if (!this.task.dueTime.trim()) {
      this.errorMessages.dueTime = 'A hora é obrigatória';
      isValid = false;
    }

    if (isValid) {
      this.saveTask.emit(this.task); 
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}

