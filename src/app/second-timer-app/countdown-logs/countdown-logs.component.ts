import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownService } from '../countdown.service';

@Component({
  selector: 'app-countdown-logs',
  templateUrl: './countdown-logs.component.html',
  styleUrls: ['./countdown-logs.component.css'],
})
export class CountdownLogsComponent implements OnInit, OnDestroy {
  playPause: string = '';
  dateTime: any = '';
  numberOfClicks: number;
  countdownSubs: Subscription;

  constructor(private countdownService: CountdownService) {}

  ngOnInit(): void {
    this.countdownSubs = this.countdownService.state.subscribe((state) => {
      this.playPause = state;
    });
    this.countdownService.currentDateTime.subscribe((dateTime) => {
      this.dateTime = dateTime;
    });
  }

  ngOnDestroy(): void {
    this.countdownSubs.unsubscribe();
  }
}
