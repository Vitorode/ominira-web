/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoursesDetailsFrancesComponent } from './courses-details-frances.component';

describe('CoursesDetailsFrancesComponent', () => {
  let component: CoursesDetailsFrancesComponent;
  let fixture: ComponentFixture<CoursesDetailsFrancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesDetailsFrancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDetailsFrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
