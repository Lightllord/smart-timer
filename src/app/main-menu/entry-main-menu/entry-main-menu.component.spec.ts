import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryMainMenuComponent } from './entry-main-menu.component';

describe('EntryMainMenuComponent', () => {
  let component: EntryMainMenuComponent;
  let fixture: ComponentFixture<EntryMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
