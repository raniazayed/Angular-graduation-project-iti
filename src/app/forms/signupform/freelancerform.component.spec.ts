import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerformComponent } from './freelancerform.component';

describe('FreelancerformComponent', () => {
  let component: FreelancerformComponent;
  let fixture: ComponentFixture<FreelancerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
