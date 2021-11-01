/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherDetailsBelvicComponent } from './teacher-details-Belvic.component';

describe('TeacherDetailsBelvicComponent', () => {
  let component: TeacherDetailsBelvicComponent;
  let fixture: ComponentFixture<TeacherDetailsBelvicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDetailsBelvicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDetailsBelvicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
