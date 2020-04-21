import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-view-time',
  templateUrl: './view-time.component.html',
  styleUrls: ['./view-time.component.css']
})
export class ViewTimeComponent implements OnInit {

  strTime:string;
  public now: Date = new Date();

  constructor(private eventService:EventsService,private datepipe: DatePipe) { 
    setInterval(() => {
      this.getAllTime();
      
    }, 1000);
  }

  ngOnInit(): void {
  }


  getAllTime()
  {
    this.now = new Date();
    let latest_date =this.datepipe.transform(this.now, 'hh:mm');
    this.strTime = latest_date;
    this.eventService.getTime(latest_date).subscribe(data => this.strTime=data ,error => console.log(error))
  }

}
