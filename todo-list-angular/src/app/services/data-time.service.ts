import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {
  private currentDateSubject = new BehaviorSubject<string>(this.getFormattedDate());
  public currentDate$: Observable<string> = this.currentDateSubject.asObservable();

  private currentTimeSubject = new BehaviorSubject<string>(this.getFormattedTime());
  public currentTime$: Observable<string> = this.currentTimeSubject.asObservable();

  constructor() {
    setInterval(() => {
      this.updateDateTime();
    }, 60000); // Atualiza a cada minuto
  }

  private updateDateTime(): void {
    this.currentDateSubject.next(this.getFormattedDate());
    this.currentTimeSubject.next(this.getFormattedTime());
  }

  private getFormattedDate(): string {
    const now = new Date();
    return now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
  }

  private getFormattedTime(): string {
    const now = new Date();
    const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false });
    return `${time}h `; 
  }
}
