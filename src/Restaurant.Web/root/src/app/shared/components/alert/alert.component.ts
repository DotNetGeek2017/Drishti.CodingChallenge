import { Component, OnInit, Input } from "@angular/core";
import { MessageService } from "../../services/index.service";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"]
})
export class AlertComponent implements OnInit {
  @Input() total;
  numberOfTask = 0;
  constructor(private _messageService: MessageService) {
    this._messageService.getMessage().subscribe(res => this.numberOfTask++);
  }

  ngOnInit() {}
}
