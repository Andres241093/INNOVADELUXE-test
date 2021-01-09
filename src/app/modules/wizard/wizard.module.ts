import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './step/step.component';

const components: Array<any> = [
	  StepperComponent, 
	  StepComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class WizardModule { }
