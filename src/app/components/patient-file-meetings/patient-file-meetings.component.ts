import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-patient-file-meetings',
  templateUrl: './patient-file-meetings.component.html',
  styleUrls: ['./patient-file-meetings.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientFileMeetingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
