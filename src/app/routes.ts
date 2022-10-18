import { EventListResolver } from './events/event-list-resolver.service';
import { EventRouteActivator } from "./events/event-details/event-router-activator.service";
import { ErrorsComponent } from "./errors/errors.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";

export const appRoutes: Routes = [
    { path: "events/new", component: CreateEventComponent ,canDeactivate:['canDeactivateCreateEvent']},
    { path: "events", component: EventsListComponent ,resolve: {events:EventListResolver}},
    {
        path: "events/:id",
        component: EventDetailsComponent,
        canActivate: [EventRouteActivator],
    },
    { path: "404", component: ErrorsComponent },
    { path: "", redirectTo: "/events", pathMatch: "full" },
];
