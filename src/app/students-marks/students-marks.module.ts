import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { StudentsMarksRoutinModule } from './students-marks-routing.module';
import { StudentsMarksComponent } from './students-marks.component';

@NgModule({
  declarations: [StudentsMarksComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    StudentsMarksRoutinModule,
  ],
})
export class StudentsMarksModule {}
