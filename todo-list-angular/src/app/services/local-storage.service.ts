// local-storage.service.ts
import { Injectable } from '@angular/core';
import { Task } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageKey = 'todos';

  getTodos(): Task[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveTodos(todos: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }
}
