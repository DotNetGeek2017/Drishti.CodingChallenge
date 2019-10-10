import { Component, OnInit, Input } from "@angular/core";
import { ActionTeaser } from "app/dashboard/models/dashboard.model";

@Component({
  selector: "action-teasers-section",
  templateUrl: "./action-teasers.component.html",
  styleUrls: ["./action-teasers.component.scss"]
})
export class ActionTeasersComponent implements OnInit {
    @Input() actionTeasers:ActionTeaser[];
    
    constructor() {
    }
    
    ngOnInit(): void {
    }
}
  
