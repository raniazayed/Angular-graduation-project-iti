import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRequestsComponent } from './history-requests.component';

describe('HistoryRequestsComponent', () => {
  let component: HistoryRequestsComponent;
  let fixture: ComponentFixture<HistoryRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
