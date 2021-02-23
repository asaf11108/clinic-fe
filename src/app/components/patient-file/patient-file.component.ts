import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-patient-file',
  templateUrl: './patient-file.component.html',
  styleUrls: ['./patient-file.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
