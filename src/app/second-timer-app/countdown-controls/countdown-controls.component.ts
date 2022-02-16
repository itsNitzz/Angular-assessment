import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountdownService } from '../countdown.service';

@Component({
  selector: 'app-countdown-controls',
  templateUrl: './countdown-controls.component.html',
  styleUrls: ['./countdown-controls.component.css'],
})
export class CountdownControlsComponent implements OnInit {
  inputTimeVal = '';
  buttonVal = 'Start';
  isPause: boolean = true;
  isReset = false;
  timer: any;
  clickCount: number = 0;
  inputTime: number = 0;

  constructor(private countdownService: CountdownService) {}

  ngOnInit(): void {}

  //starts countdown
  countdownTimer() {
    this.timer = setInterval(() => {
      this.countdownService.remainingTime.next(this.inputTime);
      this.inputTime--;
      this.inputTime = this.inputTime;

      if (this.inputTime <= -1) {
        return clearInterval(this.timer);
      }
    }, 1000);
  }

  // on Clicking Start/Pause
  onTimeStartAndPause(inputVal: any) {
    this.clickCount++;
    this.isPause = !this.isPause;

    this.inputTimeVal = '';
    if (inputVal) {
      this.inputTime = +inputVal;
    }
    if (isNaN(inputVal)) {
      return;
    }

    this.isPause ? (this.buttonVal = 'Start') : (this.buttonVal = 'Pause');

    !this.isPause && this.inputTime >= 0
      ? this.countdownTimer()
      : clearInterval(this.timer);

    this.countdownService.numberOfClicks = this.clickCount;
    this.countdownService.buttonClicks.next(this.clickCount);
    this.countdownService.currentDateTime.next(new Date());
    this.countdownService.timeLogs();
  }

  // onClicking reset button
  onReset() {
    this.isReset = true;
    this.inputTimeVal = '';
    this.clickCount = 0;
    this.inputTime = 0;
    clearInterval(this.timer);
    this.countdownService.onReset(this.inputTime, this.clickCount, null);
  }
}
