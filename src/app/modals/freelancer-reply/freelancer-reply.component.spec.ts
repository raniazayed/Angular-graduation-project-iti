import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerReplyComponent } from './freelancer-reply.component';

describe('FreelancerReplyComponent', () => {
  let component: FreelancerReplyComponent;
  let fixture: ComponentFixture<FreelancerReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
