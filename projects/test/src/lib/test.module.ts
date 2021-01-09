import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';

import { WizardModule } from './modules/wizard/wizard.module';
import { ClockModule } from './modules/clock/clock.module';
import { CalendarModule } from './modules/calendar/calendar.module';


@NgModule({
  declarations: [TestComponent],
  imports: [
  	CommonModule,
  	WizardModule,
    ClockModule,
    CalendarModule
  ],
  exports: [TestComponent]
})
export class TestModule { }
