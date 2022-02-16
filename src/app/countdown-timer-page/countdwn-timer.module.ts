import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountdownRouting } from './countdown-routing.module';

import { ButtonsClickedComponent } from './buttons-clicked/buttons-clicked.component';
import { CountdownTimerPageComponent } from './countdown-timer-page.component';
import { DisplayCountdownComponent } from './display-countdown/display-countdown.component';
import { TimeControlsComponent } from './time-controls/time-controls.component';
import { TimerLogsComponent } from './timer-logs/timer-logs.component';

@NgModule({
  declarations: [
    CountdownTimerPageComponent,
    DisplayCountdownComponent,
    TimeControlsComponent,
    TimerLogsComponent,
    ButtonsClickedComponent,
  ],

  imports: [CommonModule, FormsModule, CountdownRouting],
  exports: [
    DisplayCountdownComponent,
    TimeControlsComponent,
    TimerLogsComponent,
    ButtonsClickedComponent,
  ],
})
export class CountdownTimerModule {}
