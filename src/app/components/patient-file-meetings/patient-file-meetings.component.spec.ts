import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFileMeetingsComponent } from './patient-file-meetings.component';

describe('PatientFileMeetingsComponent', () => {
  let component: PatientFileMeetingsComponent;
  let fixture: ComponentFixture<PatientFileMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFileMeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFileMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
