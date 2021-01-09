import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-test',
  template: `
    <p *ngIf="component === 'timer'">
      <app-timer [type]="typeTimer"></app-timer>
    </p>
    <p *ngIf="component === 'stepper'">
      <app-stepper></app-stepper>
    </p>
    <p *ngIf="component === 'calendar'">
      <app-father-calendar></app-father-calendar>
    </p>
  `,
  styles: [
  ]
})
export class TestComponent implements OnInit {

  @Input() component: string;
  @Input() typeTimer: string;

  constructor() { }

  ngOnInit(): void {
  }

}
