import { Component, OnInit, ViewChild } from '@angular/core';
import studentsMarks from '../../assets/studentsMarks.json';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-students-marks',
  templateUrl: './students-marks.component.html',
  styleUrls: ['./students-marks.component.css'],
})
export class StudentsMarksComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  studentsData;

  columnsDisplay: string[] = [
    'Name',
    'Class',
    'Section',
    'Sub1',
    'Sub2',
    'Sub3',
  ];

  constructor() {}

  ngOnInit(): void {
    this.studentsData = new MatTableDataSource(studentsMarks);
    this.studentsData.sort = this.sort;
  }
}
