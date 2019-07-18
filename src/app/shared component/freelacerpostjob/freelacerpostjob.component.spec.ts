import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelacerpostjobComponent } from './freelacerpostjob.component';

describe('FreelacerpostjobComponent', () => {
  let component: FreelacerpostjobComponent;
  let fixture: ComponentFixture<FreelacerpostjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelacerpostjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelacerpostjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
