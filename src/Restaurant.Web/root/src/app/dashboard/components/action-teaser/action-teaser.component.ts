import { Component, OnInit, Input } from "@angular/core";
import { ActionTeaser } from "app/dashboard/models/dashboard.model";

@Component({
  selector: "action-teaser-section",
  templateUrl: "./action-teaser.component.html",
  styleUrls: ["./action-teaser.component.scss"]
})
export class ActionTeaserComponent implements OnInit {
    @Input() action:ActionTeaser;
    constructor() {
    }
    
    ngOnInit(): void {
    }

    getFirstLetter(data:string){
      return data==null? "":data.charAt(0);
    }
}
  
