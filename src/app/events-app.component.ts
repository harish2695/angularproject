import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `<h2>Hello Harish</h2>
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
      `   
  })

export class EventsAppComponent{
    title = "Angular Project"
}
