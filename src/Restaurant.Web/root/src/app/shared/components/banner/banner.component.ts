import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})
export class BannerComponent implements OnInit {
  @Input() color = "yellow";
  @Input() hasCloseButton = "false";
  @Input() timeOut = 0;
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (this.timeOut > 0)
      setTimeout(() => {
        this.iconClicked();
      }, this.timeOut);
  }
  iconClicked() {
    this.onClose.emit();
  }
}
