import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EventModel } from '../model/EventModel';
import {EventsService} from '../events.service';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit {

 
  eventName: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
  success :string;
  strTimeVT:any;
  strTimeVT2:any;
  //set batch object
  //set address
  EventFormGroup = new FormGroup({
    eventName: new FormControl("", Validators.required),
    eventLocation: new FormControl("", Validators.required),
    eventDate: new FormControl("", Validators.required ),
    eventTime: new FormControl("", Validators.required )
  });

  constructor(private eventService:EventsService,private datepipe: DatePipe,private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
    
  // this.eventService.getTime("7:45").subscribe(data => this.strTime2=data ,error => console.log(error))
  // console.log("constructor " + this.strTime2);

  }

addEvent()
{
let  eventObject : EventModel = new EventModel();
eventObject.eventname = this.EventFormGroup.value.eventName;
eventObject.eventlocation = this.EventFormGroup.value.eventLocation;
eventObject.eventdate = this.EventFormGroup.value.eventDate;
let latest_date2:string = this.EventFormGroup.value.eventTime;
console.log("before " + latest_date2);

this.strTimeVT = latest_date2;
this.eventService.getTime(latest_date2).subscribe(data => {sessionStorage.setItem('strTime', data);console.log(data)} ,error => console.log(error));
this.strTimeVT = sessionStorage.getItem('strTime');

eventObject.eventtime = this.strTimeVT;

this.eventService.createPost(eventObject).subscribe(data => console.log(data), error => console.log(error))



this.router.navigateByUrl('/event', { skipLocationChange: true }).then(() => {
  this.router.navigate(['home']);
}); 

}


TestEvent(){
  this.strTimeVT = sessionStorage.getItem('strTime');
  console.log("TestEvent: " + this.strTimeVT);
}

}
