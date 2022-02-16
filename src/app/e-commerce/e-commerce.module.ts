import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EcommerceRoutingModule } from './e-commerce-routing.module';
import { ECommerceComponent } from './e-commerce.component';

@NgModule({
  declarations: [ECommerceComponent],
  imports: [CommonModule, EcommerceRoutingModule],
})
export class EcommerceModule {}
