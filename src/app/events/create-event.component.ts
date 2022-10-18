import { Router } from '@angular/router';
import { Component } from "@angular/core";


@Component({
    templateUrl: './create-event.component.html',   
})
export class CreateEventComponent{

    isModified:boolean = true;
    constructor(private router:Router){}


    cancel(){
        this.router.navigate(["/events"])
    }
}