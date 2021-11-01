/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherDetailsIsabelaComponent } from './teacher-details-Isabela.component';

describe('TeacherDetailsIsabelaComponent', () => {
  let component: TeacherDetailsIsabelaComponent;
  let fixture: ComponentFixture<TeacherDetailsIsabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDetailsIsabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDetailsIsabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
