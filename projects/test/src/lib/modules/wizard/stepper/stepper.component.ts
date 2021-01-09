import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

	stepIndex: Array<number>;
	index: number;
	showPrevButton: boolean;
	showFinishButton: boolean;

	constructor() { 
		this.stepIndex = [1,2,3,4,5];
		this.index = 0;
		this.isLastStep();
	}

	getCurrentIndex()
	{
		return this.stepIndex[this.index];
	}

	nextStep()
	{

		if(this.index < this.stepIndex.length-1)
		{
			this.index++;
			this.showPrevButton = true;
			this.stepIndex[this.index];
		}
		this.isLastStep();
	}

	prevStep()
	{
		if(this.index > 0 && this.index < this.stepIndex.length)
		{
			this.index--;
			this.stepIndex[this.index];
		}
		this.isLastStep();
	}

	getBack()
	{
		this.showFinishButton = false;
		this.index = 0;
		this.isLastStep();
	}

	isLastStep()
	{
		this.isFirstStep();
		this.showFinishButton = this.stepIndex[this.index] === this.stepIndex[this.stepIndex.length-1] ? true : false;
	}

	isFirstStep()
	{
		if(this.index === 0) this.showPrevButton = false;
	}

	ngOnInit(): void {
	}

}
