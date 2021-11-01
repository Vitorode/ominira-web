/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CousesListComponent } from './couses-list.component';

describe('CousesListComponent', () => {
  let component: CousesListComponent;
  let fixture: ComponentFixture<CousesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CousesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CousesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
