import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEventComponent } from './form-event/form-event.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes =[{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomePageComponent},
{path: 'event', component: FormEventComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
