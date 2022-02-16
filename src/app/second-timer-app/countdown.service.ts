import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountdownService implements OnInit, OnDestroy {
  state = new Subject<string>();
  numberOfClicks: number = 0;
  buttonClicks = new Subject<number>();
  remainingTime = new Subject<number>();
  currentDateTime = new Subject<any>();
  buttonSubs: Subscription;

  constructor() {}

  ngOnInit() {}

  countClicks() {
    this.buttonClicks.subscribe((count) => {
      return (this.numberOfClicks = count);
    });
  }

  timeLogs() {
    this.countClicks();
    if (this.numberOfClicks) {
      this.numberOfClicks % 2 === 0
        ? this.state.next('Pause')
        : this.state.next('Start');
    } else {
      this.state.next('');
      this.currentDateTime.next('');
    }
  }

  onReset(countTime, clicks, date) {
    this.remainingTime.next(countTime);
    this.buttonClicks.next(clicks);
    this.currentDateTime.next(date);
    this.timeLogs();
  }

  ngOnDestroy(): void {
    this.buttonSubs.unsubscribe();
  }
}
