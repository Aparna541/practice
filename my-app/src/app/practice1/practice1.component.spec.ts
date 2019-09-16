import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { practice1 } from './practice1.component';

describe('EmployeeComponent', () => {
  let component: practice1;
  let fixture: ComponentFixture<practice1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ practice1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(practice1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
