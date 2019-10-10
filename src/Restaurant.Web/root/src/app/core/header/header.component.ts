import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { LocalStorageService } from "../../shared/services/index.service";
import { Settings } from "app/shared/settings";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  title = "Restaurant";
  links = this.settings.headerRoutings;
  userDisplayName: string = "";
  userEntity = "";
  @Output() navOpen = new EventEmitter();
  constructor(
    private settings: Settings,
    public storage: LocalStorageService
  ) {}

  ngOnInit() {
    // let preSelectedLocale = this._localStorage.retrieve("selectedLocale");
    // if (preSelectedLocale != undefined && preSelectedLocale != "") {
    //   this.translate.use(preSelectedLocale);
    // } else {
    //   this._localStorage.store("selectedLocale", "en-US");
    //   this.translate.setDefaultLang("en-US");
    // }
  }

  menuClick(event) {
    this.navOpen.emit(event);
  }
}
