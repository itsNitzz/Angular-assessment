import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownService } from '../countdown.service';

@Component({
  selector: 'app-clicks-count',
  templateUrl: './clicks-count.component.html',
  styleUrls: ['./clicks-count.component.css'],
})
export class ClicksCountComponent implements OnInit, OnDestroy {
  displayClicks: number = 0;
  pauseClicked: number = 0;
  startClicked: number = 0;
  buttonSubs: Subscription;

  constructor(private countdownService: CountdownService) {}

  ngOnInit(): void {
    this.buttonSubs = this.countdownService.buttonClicks.subscribe((count) => {
      this.displayClicks = count;
      if (this.displayClicks === 0) {
        this.pauseClicked = 0;
        this.startClicked = 0;
      }
      if (this.displayClicks % 2 === 0) {
        if (this.displayClicks) {
          this.pauseClicked++;
        }
      } else {
        this.startClicked++;
      }
    });
  }

  ngOnDestroy(): void {
    this.buttonSubs.unsubscribe();
  }
}
