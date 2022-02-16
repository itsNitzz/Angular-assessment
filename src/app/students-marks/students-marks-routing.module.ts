import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StudentsMarksComponent } from './students-marks.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: StudentsMarksComponent }]),
  ],
  exports: [RouterModule],
})
export class StudentsMarksRoutinModule {}
