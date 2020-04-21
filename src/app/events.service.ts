import { Injectable } from '@angular/core';
import { EventModel } from './model/EventModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { concatMap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  private baseUrl = 'http://localhost:8080/events';

  constructor(private http: HttpClient) { }


  getAllEvents(): Observable<any> {
    return this.http.get(this.baseUrl+'/all');
  }


  createPost(eModel: EventModel): Observable<Object> {
    return this.http.post(this.baseUrl+'/create', eModel);
  }


   getTime(strTime:string): Observable<string> {
    return this.http.get(this.baseUrl+'/time/'+ strTime,{responseType:'text'});
   }

   getTime2(strTime:string): Observable<string> {
     console.log("in service " + strTime);
    return this.http.get(this.baseUrl+'/time/'+ strTime,{responseType:'text'});
   }
}
