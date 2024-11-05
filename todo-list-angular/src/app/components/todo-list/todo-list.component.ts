import { Component, OnInit } from '@angular/core';

interface Task {
  title: string;
  completed: boolean;
  // Adicione outras propriedades conforme necessário
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  tasks: Task[] = [];
  showTaskForm = false;
  currentDate: string = new Date().toLocaleDateString();
  editingIndex: number | null = null;

  ngOnInit(): void {
    this.updateCurrentDate();
    setInterval(() => this.updateCurrentDate(), 60000);
  }

  updateCurrentDate(): void {
    this.currentDate = new Date().toLocaleString();
  }

  addTask() {
    this.showTaskForm = true;
    this.editingIndex = null;
  }

  saveTask(newTask: Task) { 
    if (!newTask.title.trim()) { // Verifica se o título está vazio
      alert("O título da tarefa não pode estar vazio.");
      return;
    }
    
    if (this.editingIndex !== null) {
      this.tasks[this.editingIndex] = newTask;
      this.editingIndex = null;
    } else {
      this.tasks.push(newTask);
    }
    this.showTaskForm = false;
  }

  cancelTaskForm() {
    this.showTaskForm = false;
    this.editingIndex = null;
  }

  editTask(index: number) {
    this.showTaskForm = true;
    this.editingIndex = index;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}