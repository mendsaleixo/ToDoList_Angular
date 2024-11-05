
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { HeaderComponent } from './components/header/header.component'; // Importe o HeaderComponent

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskComponent,
    TaskFormComponent,
    HeaderComponent // Declare o HeaderComponent aqui
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
