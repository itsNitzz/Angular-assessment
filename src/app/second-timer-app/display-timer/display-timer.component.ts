import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownService } from '../countdown.service';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.css'],
})
export class DisplayTimerComponent implements OnInit, OnDestroy {
  displayCountdown = 0;
  timeSubs: Subscription;

  constructor(private countdownService: CountdownService) {}

  ngOnInit(): void {
    this.timeSubs = this.countdownService.remainingTime.subscribe((time) => {
      this.displayCountdown = time;
    });
  }

  ngOnDestroy(): void {
    this.timeSubs.unsubscribe();
  }
}
