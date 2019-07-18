import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancertaskComponent } from './freelancertask.component';

describe('FreelancertaskComponent', () => {
  let component: FreelancertaskComponent;
  let fixture: ComponentFixture<FreelancertaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancertaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancertaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
