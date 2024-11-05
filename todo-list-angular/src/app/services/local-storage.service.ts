// local-storage.service.ts
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageKey = 'todos';

  getTodos(): Todo[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveTodos(todos: Todo[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }
}
