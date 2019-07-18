import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerHistoryComponent } from './freelancer-history.component';

describe('FreelancerHistoryComponent', () => {
  let component: FreelancerHistoryComponent;
  let fixture: ComponentFixture<FreelancerHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
