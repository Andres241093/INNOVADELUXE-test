import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clock-test';
  event: string;

  showEvent(mssg)
  {
  	this.event = mssg;
  }
}
