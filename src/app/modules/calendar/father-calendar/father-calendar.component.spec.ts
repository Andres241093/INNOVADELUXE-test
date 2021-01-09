import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherCalendarComponent } from './father-calendar.component';

describe('FatherCalendarComponent', () => {
  let component: FatherCalendarComponent;
  let fixture: ComponentFixture<FatherCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
