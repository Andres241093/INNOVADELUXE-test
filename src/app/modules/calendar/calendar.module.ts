import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FatherCalendarComponent } from './father-calendar/father-calendar.component';
import { SonComponent } from './son/son.component';

const components: Array<any> = [
	FatherCalendarComponent,
	SonComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class CalendarModule { }
