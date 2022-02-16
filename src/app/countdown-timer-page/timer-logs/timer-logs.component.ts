import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-logs',
  templateUrl: './timer-logs.component.html',
  styleUrls: ['./timer-logs.component.css'],
})
export class TimerLogsComponent implements OnInit {
  @Input() playPause: string = '';
  @Input() dateTime: any = '';

  constructor() {}

  ngOnInit(): void {}
}
