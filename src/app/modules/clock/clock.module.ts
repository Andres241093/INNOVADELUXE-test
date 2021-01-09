import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownComponent } from './countdown/countdown.component';
import { ClockComponent } from './clock/clock.component';
import { ChronometerComponent } from './chronometer/chronometer.component';
import { TimerComponent } from './timer/timer.component';

const components: Array<any> = [
	  CountdownComponent,
	  ClockComponent,
	  ChronometerComponent,
	  TimerComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class ClockModule { }
