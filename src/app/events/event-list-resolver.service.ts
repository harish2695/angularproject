import { EventService } from './shared/event.service';
import {Injectable} from '@angular/core'
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any>{
    constructor(private eventservice:EventService){}

    resolve() {
        return this.eventservice.getEvents().pipe(map(events => events))
    }
}