import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-father-calendar',
	templateUrl: './father-calendar.component.html',
	styleUrls: ['./father-calendar.component.scss']
})
export class FatherCalendarComponent implements OnInit {

	event: string;

	constructor() { }


	showEvent(mssg)
	{
		this.event = mssg;
	}

	ngOnInit(): void {
	}

}
