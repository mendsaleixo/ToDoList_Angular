import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Meu dia';
  currentHour: string = '';
  currentDate: string = '';
  tasks: any[] = [];
  showTaskForm: boolean = false; // Controla a visibilidade do formulário

  ngOnInit(): void {
    this.updateDateTime();

    setInterval(() => {
      this.updateDateTime();
    }, 60000);
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentHour = now.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    this.currentDate = now.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  }

  addTask(): void {
    this.showTaskForm = !this.showTaskForm;
  } //passar para o TaskFormComponent
}
