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
    debugger
    this.showTaskForm = true;
    this.taskToEdit = null; 
  }

  
  saveTask(task: any): void {
    debugger
    if (this.taskToEdit) {
      delete task._id;
      this.taskService.updateTask(this.taskToEdit._id, task).subscribe(() => {
        this.loadTasks(); 
        this.showTaskForm = false;
        this.taskToEdit = null; 
      });
    } else {
      debugger
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
      this.loadTasks();  
    });
  }

  
  cancelTaskForm(): void {
    this.showTaskForm = false;
    this.taskToEdit = null; 
  }
}
