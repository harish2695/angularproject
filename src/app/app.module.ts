import { appRoutes } from './routes';
import { EventsAppComponent } from './events-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';
import { UpperCasePipe } from './upper-case.pipe';
import {
  EventDetailsComponent,
  EventListResolver,
  EventRouteActivator,
  EventService,
  EventsListComponent,
  EventthumbnailComponent,
  CreateEventComponent
} from "./events/index"


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventthumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorsComponent,
    UpperCasePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, EventRouteActivator,EventListResolver,
  {
    provide:'canDeactivateCreateEvent',
    useValue: checkModifiedState
  }],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }


export function checkModifiedState(component: CreateEventComponent){
  if(component.isModified){
    return window.confirm("You have not saved this event, Do you really wish to cancel?")
  }
  return true
}