import { Patient } from './../../model/patient';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-patient-file-info',
  templateUrl: './patient-file-info.component.html',
  styleUrls: ['./patient-file-info.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientFileInfoComponent implements OnInit {
  @Input() patient: Patient;
  patientInfoDisplayColumns = ['id', 'firstName', 'lastName', 'creationDate'];

  constructor() { }

  ngOnInit(): void {
  }

}
