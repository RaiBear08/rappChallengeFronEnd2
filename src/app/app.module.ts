import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEventComponent } from './form-event/form-event.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewTimeComponent } from './view-time/view-time.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import {EventsService} from './events.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'
@NgModule({
  declarations: [
    AppComponent,
    FormEventComponent,
    HomePageComponent,
    ViewTimeComponent,
    ViewEventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventsService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
