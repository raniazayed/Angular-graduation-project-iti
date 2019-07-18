import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatmodalComponent } from './chatmodal.component';

describe('ChatmodalComponent', () => {
  let component: ChatmodalComponent;
  let fixture: ComponentFixture<ChatmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
