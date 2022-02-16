import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicDivsRoutingModule } from './Dynamic-divs-routing.module';
import { DynamicDivsComponent } from './dynamic-divs.component';

@NgModule({
  declarations: [DynamicDivsComponent],
  imports: [CommonModule, DynamicDivsRoutingModule],
})
export class DynamicDivsModule {}
