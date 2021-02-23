import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFileInfoComponent } from './patient-file-info.component';

describe('PatientFileInfoComponent', () => {
  let component: PatientFileInfoComponent;
  let fixture: ComponentFixture<PatientFileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFileInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
