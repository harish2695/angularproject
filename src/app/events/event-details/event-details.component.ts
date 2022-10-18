import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event:any;

  constructor(private eventService:EventService ,private route:ActivatedRoute) { }

  ngOnInit() {
    let id1:any;
    this.route.paramMap.subscribe((params:ParamMap) => {
      id1 = parseInt(params.get('id'))
    })
    this.event = this.eventService.getEvent(id1)
  }

}
