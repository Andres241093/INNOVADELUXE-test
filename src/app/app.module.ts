import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { ChronometerComponent } from './components/chronometer/chronometer.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { WizardModule } from './modules/wizard/wizard.module';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ChronometerComponent,
    CountdownComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    WizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
