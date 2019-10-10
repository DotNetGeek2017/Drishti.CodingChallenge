import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./notFound/pageNotFound.component";
import { ShellComponent } from "app/core/shell/shell.component";

import { Route } from "@angular/router";

export enum UserPermissions {
  WarpSubledger_EditAdminSettings
}

export interface SubledgerRoute extends Route {
  Roles?: UserPermissions[];
  RoleHandling?: "AND" | "OR";
  children?: SubledgerRoute[];
  text?: string;
}

export const routes: SubledgerRoute[] = [
  {
    path: "",
    component: ShellComponent,
    children: [
      {
        path: "home",
        loadChildren: "./dashboard/dashboard.module#DashboardModule",
        canActivate: []
      },
               
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  },
  { path: "**", component: PageNotFoundComponent } // if not match uri
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
