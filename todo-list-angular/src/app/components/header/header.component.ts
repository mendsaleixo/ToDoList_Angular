// header.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateTimeService } from 'src/app/services/data-time.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title = 'ToDo List';
  currentHour: string = '';
  currentDate: string = '';
  private dateSubscription: Subscription | undefined;
  private timeSubscription: Subscription | undefined;

  constructor(private dateTimeService: DateTimeService) {}

  ngOnInit(): void {
    this.dateSubscription = this.dateTimeService.currentDate$.subscribe((date: string) => {
      this.currentDate = date;
    });

    this.timeSubscription = this.dateTimeService.currentTime$.subscribe((time: string) => {
      this.currentHour = time;
    });
  }

  ngOnDestroy(): void {
    if (this.dateSubscription) {
      this.dateSubscription.unsubscribe();
    }
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }
}
