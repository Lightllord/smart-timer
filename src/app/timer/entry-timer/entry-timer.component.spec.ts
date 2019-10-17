import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryTimerComponent } from './entry-timer.component';

describe('EntryTimerComponent', () => {
  let component: EntryTimerComponent;
  let fixture: ComponentFixture<EntryTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
