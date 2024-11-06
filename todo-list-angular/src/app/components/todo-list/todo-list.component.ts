import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: any[] = [];
  showTaskForm = false;
  taskToEdit: any = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    this.showTaskForm = true;
    this.taskToEdit = null;
  }

  saveTask(task: any): void {
    if (this.taskToEdit) {
      this.taskService.updateTask(this.taskToEdit._id, task).subscribe(() => {
        this.loadTasks();  
        this.showTaskForm = false;
      });
    } else {
      this.taskService.addTask(task).subscribe(() => {
        this.loadTasks();  
        this.showTaskForm = false;
      });
    }
  }

  editTask(index: number): void {
    this.taskToEdit = { ...this.tasks[index] };
    this.showTaskForm = true;
  }

  removeTask(index: number): void {
    const taskId = this.tasks[index]._id;
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.loadTasks();  // Recarregar as tarefas
    });
  }

  cancelTaskForm(): void {
    this.showTaskForm = false;
    this.taskToEdit = null;
  }
}
