import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-controls',
  templateUrl: './time-controls.component.html',
  styleUrls: ['./time-controls.component.css'],
})
export class TimeControlsComponent implements OnInit {
  inputTimeVal = '';
  buttonVal = 'Start';
  isPause: boolean = true;
  isReset = false;
  timer: any;
  clickCount: number = 0;
  inputTime: number = 0;

  @Output() remainingTime = new EventEmitter<number>();
  @Output() buttonClicked = new EventEmitter<number>();
  @Output() currentDateTime = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  //starts countdown
  countdownTimer() {
    this.timer = setInterval(() => {
      this.remainingTime.emit(this.inputTime);
      this.inputTime--;
      this.inputTime = this.inputTime;

      if (this.inputTime <= -1) {
        return clearInterval(this.timer);
      }
    }, 1000);
  }

  onTimeStartAndPause(inputVal: any) {
    this.clickCount++;
    this.buttonClicked.emit(this.clickCount);
    this.currentDateTime.emit(new Date());
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
  }

  onReset() {
    this.isReset = true;
    clearInterval(this.timer);
    this.remainingTime.emit(0);
    this.inputTimeVal = '';
    this.clickCount = 0;
    this.inputTime = 0;
    this.buttonClicked.emit(this.clickCount);
    this.currentDateTime.emit();
  }
}
