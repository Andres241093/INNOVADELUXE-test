import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

	time: number;
	isPause: boolean;
	counter: number;

	constructor() {
		this.counter = 100;
		this.isPause = false;
	}

	start()
	{
		this.time = setInterval(() => {
			if(this.counter > 0) this.counter--;
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
		this.counter = 100;
	}

	ngOnInit(): void {
		this.start();
	}

}
