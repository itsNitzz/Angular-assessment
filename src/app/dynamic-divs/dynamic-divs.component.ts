import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.css'],
})
export class DynamicDivsComponent implements OnInit {
  count = 7;

  constructor() {}

  ngOnInit(): void {}

  onCount(count) {
    alert(`Button ${count} clicked!`);
  }

  onScroll(data: any) {
    let clicks = this.count++;
    const container = document.querySelector('.page');
    if (data.target.scrollHeight >= data.target.offsetHeight) {
      const createButtons = document.createElement('button');
      createButtons.textContent = 'Click';
      createButtons.classList.add('buttons');

      createButtons.onclick = () => this.onCount(clicks);

      container.append(createButtons);
    }
  }
}
