import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

	@Output() message;

	date: Date;
	year: number;
	month: number;
	day: number
	currentDate: string;

  constructor() { 
  	this.date = new Date();
  	this.message = new EventEmitter<string>();
  	this.currentDate = this.formatDate(this.date);
  }

  zeroPrefix(data)
  {
    return data+1 < 10 ? "0"+(data+1) : data+1;
  }

  formatDate(date)
  {
  	this.year = date.getFullYear();
  	this.month = this.zeroPrefix(this.date.getMonth());
  	this.day = this.zeroPrefix(date.getDate()-1);

  	return this.year+"-"+this.month+"-"+this.day;
  }

  emitEvent()
  {
  	this.message.emit('Fecha cambiada');
  }

  ngOnInit(): void {
  }

}
