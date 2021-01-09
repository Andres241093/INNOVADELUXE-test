import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-chronometer',
	templateUrl: './chronometer.component.html',
	styleUrls: ['./chronometer.component.scss']
})
export class ChronometerComponent implements OnInit {

	time: number;
	isPause: boolean;
	counter: number;

	constructor(){
		this.counter = 0;
		this.isPause = false;
	}

	start()
	{
		this.time = setInterval(() => {
			this.counter++
		}, 1000);
	}

	pause()
	{
		clearInterval(this.time);
		this.isPause = true;
	}

	continue()
	{
		this.isPause = false;
		this.start();
	}

	restart()
	{
		this.counter = 0;
	}

	ngOnInit(): void {
		this.start();
	}

}
