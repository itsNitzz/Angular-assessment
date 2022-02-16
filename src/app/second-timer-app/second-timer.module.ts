import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClicksCountComponent } from './clicks-count/clicks-count.component';
import { CountdownControlsComponent } from './countdown-controls/countdown-controls.component';
import { CountdownLogsComponent } from './countdown-logs/countdown-logs.component';
import { SecondTimerRoutingModule } from './display-timer-routing.module';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { SecondTimerAppComponent } from './second-timer-app.component';

@NgModule({
  declarations: [
    SecondTimerAppComponent,
    DisplayTimerComponent,
    CountdownControlsComponent,
    CountdownLogsComponent,
    ClicksCountComponent,
  ],

  imports: [CommonModule, FormsModule, SecondTimerRoutingModule],
  exports: [
    DisplayTimerComponent,
    CountdownControlsComponent,
    CountdownLogsComponent,
    ClicksCountComponent,
  ],
})
export class SecondTimerModule {}
