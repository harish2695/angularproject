import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'events-thumbnail',
    templateUrl: './events-thumbnail.component.html',   
    styles:[`
        .green {color : lightgreen !important;}
        .orange {color: orange !important;}
        .red { color: red !important;}
        .bold { font-weight: bold;}
    `]
  })

export class EventthumbnailComponent{
    @Input() event : any
    // @Output() eventClick = new EventEmitter()
    // handleClick(){
    //     this.eventClick.emit(this.event.date)
    // }
    childProperty:any = "child value"

    logMessage(){
        console.log("CONSOLING MESSAGE FROM CHILD")
    }

    getStartTimeClass(){
        if(this.event && this.event.time === '09:00 am'){
            return ['green','bold']
        }
        return []
        
    }

    getLatestTimeClass(){
        if(this.event && this.event.time === '12:00 am' || this.event && this.event.time === '10:00 am'){
            return ['green','bold']
        }
        return []
    }
    getNormalTimeClass(){
        if(this.event){
            return ['orange','bold']
        }
        return []
    }

    // constructor(private router:Router){}
    // handleClick(id){
    //     this.router.navigate(['/events',id])
    // }
}