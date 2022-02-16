import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from './banner/banner.module';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'banner',
    loadChildren: () =>
      import('./banner/banner.module').then((mod) => mod.BannerModule),
  },
  {
    path: 'timer',
    loadChildren: () =>
      import('./countdown-timer-page/countdwn-timer.module').then(
        (mod) => mod.CountdownTimerModule
      ),
  },
  {
    path: 'second-timer',
    loadChildren: () =>
      import('./second-timer-app/second-timer.module').then(
        (mod) => mod.SecondTimerModule
      ),
  },

  {
    path: 'divs',
    loadChildren: () =>
      import('./dynamic-divs/dynamic-divs.module').then(
        (mod) => mod.DynamicDivsModule
      ),
  },
  {
    path: 'marks',
    loadChildren: () =>
      import('./students-marks/students-marks.module').then(
        (mod) => mod.StudentsMarksModule
      ),
  },
  {
    path: 'e-commerce',
    loadChildren: () =>
      import('./e-commerce/e-commerce.module').then(
        (mod) => mod.EcommerceModule
      ),
  },
  { path: '**', redirectTo: '/' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
