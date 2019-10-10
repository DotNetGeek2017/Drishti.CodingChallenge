import { Component, ViewChild, OnInit } from "@angular/core";
import {
  Router,
  Event,
  NavigationCancel,
  NavigationError,
  NavigationEnd,
  NavigationStart
} from "@angular/router";
import { LoadingService } from "./shared/services/loading.service";
import { SpinnerComponent } from "./shared/components/spinner/spinner.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.spinner.isDelayedRunning = true;
      }
      if (event instanceof NavigationEnd) {
        this.spinner.isDelayedRunning = false;
      }
    });
  }
}
