import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDonughtComponent } from './chart-donught.component';

describe('ChartDonughtComponent', () => {
  let component: ChartDonughtComponent;
  let fixture: ComponentFixture<ChartDonughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDonughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDonughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
