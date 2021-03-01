import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Meeting } from 'src/app/model/meeting';

@Component({
  selector: 'app-patient-file-meetings',
  templateUrl: './patient-file-meetings.component.html',
  styleUrls: ['./patient-file-meetings.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PatientFileMeetingsComponent implements OnInit {
  dataSource = new MatTableDataSource<Meeting>();
  columns = ['date', 'description', 'weight', 'BMI'];

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        date: '03/08/20',
        description: 'aaaaaad dawdawddd wdawda',
        weight: 77,
        BMI: 3
      },
      {
        date: '05/08/20',
        description: 'df dawdawddd wdawda',
        weight: 88,
        BMI: 5
      }
  ];
  }

}
