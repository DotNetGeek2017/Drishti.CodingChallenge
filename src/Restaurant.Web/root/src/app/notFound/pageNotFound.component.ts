import { Component } from "@angular/core";

@Component({
  selector: "ev-404",
  styleUrls: ["./pageNotFOund.component.scss"],
  template: `
    <article class="not-found">
      <h1>404</h1>
      <div class="not-found-text">
        <h4>Sorry!</h4>
        The Page You\'re Looking For Was Not Found
        <a routerLink="/" routerLinkActive="active" class="link">
        <mat-icon>chevron_left</mat-icon>
        Go back
        </a>
      </div>
    </article>
  `
})
export class PageNotFoundComponent {}
