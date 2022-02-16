import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CountdownTimerPageComponent } from './countdown-timer-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: CountdownTimerPageComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class CountdownRouting {}
