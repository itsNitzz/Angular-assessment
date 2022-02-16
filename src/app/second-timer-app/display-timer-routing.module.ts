import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SecondTimerAppComponent } from './second-timer-app.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: SecondTimerAppComponent }]),
  ],
  exports: [RouterModule],
})
export class SecondTimerRoutingModule {}
