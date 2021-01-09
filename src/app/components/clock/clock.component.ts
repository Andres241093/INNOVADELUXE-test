import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-clock',
	templateUrl: './clock.component.html',
	styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

	time: Date;

	constructor() {}

	getCurrentDate()
	{
		setInterval(() => {
			this.time = new Date();
		}, 1000);
	}

	ngOnInit(): void {
		this.getCurrentDate();
	}

}
