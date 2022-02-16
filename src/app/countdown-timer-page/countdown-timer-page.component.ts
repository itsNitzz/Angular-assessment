import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-page',
  templateUrl: './countdown-timer-page.component.html',
  styleUrls: ['./countdown-timer-page.component.css'],
})
export class CountdownTimerPageComponent implements OnInit {
  ValOfCountdown = 0;
  numberOfClicks: number = 0;
  date: any = '';
  state: string = '';

  constructor() {}

  ngOnInit(): void {}

  onPassingTimerVal(data: number) {
    this.ValOfCountdown = data;
  }

  onCountingClicks(clicksCount: number) {
    this.numberOfClicks = clicksCount;
  }

  dateTimeValue(dateInfo: any) {
    if (this.numberOfClicks) {
      this.date = dateInfo;
      this.numberOfClicks % 2 === 0
        ? (this.state = 'Pause')
        : (this.state = 'Start');
    } else {
      this.state = '';
      this.date = '';
    }
  }
}
