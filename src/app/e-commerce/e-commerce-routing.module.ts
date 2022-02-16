import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ECommerceComponent } from './e-commerce.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: ECommerceComponent }]),
  ],
  exports: [RouterModule],
})
export class EcommerceRoutingModule {}
