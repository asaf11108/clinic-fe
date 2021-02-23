import { Patient } from './../../model/patient';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-patient-file',
  templateUrl: './patient-file.component.html',
  styleUrls: ['./patient-file.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientFileComponent implements OnInit {

  patient: Patient = {
    id: '9699589589',
    firstName: 'Asaf',
    lastName: 'Regev',
    creationDate: '03/06/2000'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
