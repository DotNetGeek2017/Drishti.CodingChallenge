import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { Menu } from "../../../shared/model/menu";
import { MenuService } from "../../../shared/services/menu.service";
import { Settings } from "app/shared/settings";

@Component({
  selector: "app-menu-list",
  templateUrl: "./menu-list.component.html",
  styleUrls: ["./menu-list.component.scss"]
})
export class MenuListComponent implements OnInit {
  @Input() tiles = [];
  @Input() navStatus;
  filteredResults: Menu[] = [];
  flattedList: Menu[] = [];

  @Output() navToggle = new EventEmitter();
  constructor(private settings: Settings) {}

  ngOnInit() {
    this.settings.rootRoutings.forEach(route => {
      this.tiles.push({
        href: route.path,
        text: route.text,
        type: "Link"
      });
    });
  }

  menuToggle(event) {
    this.navToggle.emit(event);
  }

  @HostListener("document:keydown", ["$event"])
  onKeydownHandler(event: KeyboardEvent) {
    if (this.navStatus == "close" && event.code === "KeyS" && event.altKey) {
      this.navToggle.emit("open");
    }
  }
}
