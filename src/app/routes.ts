import { ErrorsComponent } from "./errors/errors.component";
import { Routes } from "@angular/router";
import {
    EventListResolver,
    EventRouteActivator,
    CreateEventComponent,
    EventDetailsComponent,
    EventsListComponent
} from "./events/index"

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
    {
        path: 'user',loadChildren: ()  => import('./user/user.module')
        .then(m => m.UserModule)
    }
];
