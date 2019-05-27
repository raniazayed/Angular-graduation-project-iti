import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadWorksComponent } from './upload-works.component';

describe('UploadWorksComponent', () => {
  let component: UploadWorksComponent;
  let fixture: ComponentFixture<UploadWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
