import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceheaderComponent } from './freelanceheader.component';

describe('FreelanceheaderComponent', () => {
  let component: FreelanceheaderComponent;
  let fixture: ComponentFixture<FreelanceheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelanceheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
