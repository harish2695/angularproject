import { EventListResolver } from './events/event-list-resolver.service';
import { EventRouteActivator } from './events/event-details/event-router-activator.service';
import { CreateEventComponent } from './events/create-event.component';
import { appRoutes } from './routes';
import { EventService } from './events/shared/event.service';
import { EventthumbnailComponent } from './events/events-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';
import { UpperCasePipe } from './upper-case.pipe';


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