import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelHistoryComponent } from './cancel-history.component';

describe('CancelHistoryComponent', () => {
  let component: CancelHistoryComponent;
  let fixture: ComponentFixture<CancelHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
