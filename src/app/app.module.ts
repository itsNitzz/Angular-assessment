import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { BannerModule } from './banner/banner.module';
import { CountdownTimerModule } from './countdown-timer-page/countdwn-timer.module';
import { SecondTimerModule } from './second-timer-app/second-timer.module';
import { StudentsMarksModule } from './students-marks/students-marks.module';
import { EcommerceModule } from './e-commerce/e-commerce.module';
import { DynamicDivsModule } from './dynamic-divs/dynamic-divs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    BannerModule,
    CountdownTimerModule,
    SecondTimerModule,
    StudentsMarksModule,
    EcommerceModule,
    DynamicDivsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
