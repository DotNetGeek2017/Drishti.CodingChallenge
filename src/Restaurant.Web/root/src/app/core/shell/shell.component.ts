import { Observable } from "rxjs/Observable";
import { Component, ViewChild, OnInit } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Router } from "@angular/router";
import {
  style,
  animate,
  query,
  trigger,
  transition
} from "@angular/animations";

@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.scss"],
  animations: [
    trigger("routeAnimations", [
      transition("* <=> *", [
        query(
          ":enter, :leave",
          [
            style({
              width: "100%",
              position: "fixed",
              opacity: 0,
              transform: "translateY(30px)"
            })
          ],
          { optional: true }
        ),
        query(
          ":enter",
          [animate("600ms ease", style({ opacity: 1, transform: "*" }))],
          { optional: true }
        )
      ])
    ])
  ]
})
export class ShellComponent {
  navStatus = "close";

  constructor() {}

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {}

  navToggle(event) {
    event === "close" ? this.sidenav.close() : this.sidenav.open();

    this.navStatus = event;
  }
}
