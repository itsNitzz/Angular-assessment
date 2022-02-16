import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BannerRoutingModule } from './banner-routing.module';

import { BannerComponent } from './banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, RouterModule, BannerRoutingModule],
  exports: [BannerComponent],
})
export class BannerModule {}
