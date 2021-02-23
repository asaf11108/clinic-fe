import { Patient } from './../../model/patient';
import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-patient-file-info',
  templateUrl: './patient-file-info.component.html',
  styleUrls: ['./patient-file-info.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PatientFileInfoComponent implements OnInit {
  @Input() patient: Patient;
  patientInfoDisplayColumns = ['id', 'firstName', 'lastName', 'creationDate'];

  constructor() { }

  ngOnInit(): void {
  }

}
