import { Injectable } from '@angular/core';
import { EventModel } from './model/EventModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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


   getTime(strTime:string): Observable<any> {
    return this.http.get(this.baseUrl+'/time/'+ strTime,{responseType:'text'});
   }
   getTime2(strTime:string): Observable<any> {
    return this.http.get(this.baseUrl+'/time/'+ strTime,{responseType:'text'});
   }
}
