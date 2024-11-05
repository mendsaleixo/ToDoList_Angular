// header.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'ToDo List';
  currentHour: string = '';
  currentDate: string = '';

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 60000);
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentHour = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    this.currentDate = now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
  }
}