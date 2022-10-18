import { Injectable } from "@angular/core";
import {Subject} from 'rxjs'


@Injectable()
export class EventService{
    getEvents(){
        // return EVENTS;
        let subject = new Subject()
        setTimeout(() => {subject.next(EVENTS);subject.complete();},100)
        return subject
    }

    getEvent(id: number){
        return EVENTS.find(event => event.id === id)
    }
}

const EVENTS = [
    {
        id:1,
        name:'Pharma tech expo(PTE)',
        date:"10/15/2022",
        time:"09:00 am",
        price: 5000,
        onLineUrl:"https://2020.agileindia.org",   
        location:{
            address:"palace ground",
            city:"bengaluru",
            country:"India"
        }
    },
    {
        id:2,
        name:'Jio tech group(JTG)',
        date:"10/15/2022",
        time:"10:00 am",
        price: 6000,
        onLineUrl:"https://2020.agileindia.org",
        location:{
            address:"palace ground",
            city:"bengaluru",
            country:"India"
        }
    },
    {
        id:3,
        name:'Mac groups(MG)',
        date:"10/15/2022",
        time:"11:00 am",
        price: 10000,
        location:{
            address:"palace ground",
            city:"bengaluru",
            country:"India"
        }
    },
    {
        id:4,
        name:'Windo groups(WG)',
        date:"10/15/2022",
        time:"12:00 pm",
        price: 10000,
        location:{
            address:"palace ground",
            city:"bengaluru",
            country:"India"
        }
    },
    {
        id:5,
        name:'Linux distributions(LD)',
        date:"10/15/2022",
        time:"13:00 pm",
        price: 9000,
        location:{
            address:"palace ground",
            city:"bengaluru",
            country:"India"
        }
    }
]
