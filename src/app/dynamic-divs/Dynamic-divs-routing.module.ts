import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicDivsComponent } from './dynamic-divs.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: DynamicDivsComponent }]),
  ],
  exports: [RouterModule],
})
export class DynamicDivsRoutingModule {}
