import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicepostjobComponent } from './servicepostjob.component';

describe('ServicepostjobComponent', () => {
  let component: ServicepostjobComponent;
  let fixture: ComponentFixture<ServicepostjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicepostjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicepostjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
