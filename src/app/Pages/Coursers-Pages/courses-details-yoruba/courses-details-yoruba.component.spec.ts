/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoursesDetailsYorubaComponent } from './courses-details-yoruba.component';

describe('CoursesDetailsYorubaComponent', () => {
  let component: CoursesDetailsYorubaComponent;
  let fixture: ComponentFixture<CoursesDetailsYorubaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesDetailsYorubaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDetailsYorubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
