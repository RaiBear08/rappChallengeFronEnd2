import { Component, OnInit } from '@angular/core';
import { EventModel } from '../model/EventModel';
import {EventsService} from '../events.service';



@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {
  

  allEvents:any;
  constructor(private eventService:EventsService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }


   getAllEvents()
   {
     this.eventService.getAllEvents().subscribe(data => this.allEvents = data);
   }
}
