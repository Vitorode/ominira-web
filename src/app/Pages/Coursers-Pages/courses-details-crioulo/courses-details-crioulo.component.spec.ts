/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoursesDetailsCriouloComponent } from './courses-details-crioulo.component';

describe('CoursesDetailsCriouloComponent', () => {
  let component: CoursesDetailsCriouloComponent;
  let fixture: ComponentFixture<CoursesDetailsCriouloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesDetailsCriouloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDetailsCriouloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
