import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-buttons-clicked',
  templateUrl: './buttons-clicked.component.html',
  styleUrls: ['./buttons-clicked.component.css'],
})
export class ButtonsClickedComponent implements OnInit, OnChanges {
  @Input() displayClicks: number = 0;
  pauseClicked: number = 0;
  startClicked: number = 0;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
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
  }
  ngOnInit(): void {}
}
