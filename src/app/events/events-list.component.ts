import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { Component} from "@angular/core";
import { EventService } from "./shared/event.service";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html',   
  })

export class EventsListComponent{
    event1 = {
        id:1,
        name:'Pharma tech expo',
        date:"10/15/2022",
        time:"09:00 am",
        price: 5000,
        location:{
            address:"palace ground",
            city:"bengaluru",
            country:"India"
        }
    }
    events: IEvent[];

    constructor(private eventService:EventService , private route: ActivatedRoute)   {} 

    ngOnInit(){
        // this.eventService.getEvents().subscribe(events => this.events = events)
        this.events = this.route.snapshot.data['events']
    }

    
    // handleEventClicked(data){
    //     console.log("DATA",data)
    // }
}
