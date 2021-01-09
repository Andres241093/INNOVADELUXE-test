import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 
import { AppComponent } from './app.component';

import { TestModule } from 'test';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
