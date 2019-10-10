import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DashboardResolver } from "./services/dashboard.resolver";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    resolve: {
      dashboard: DashboardResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [DashboardResolver],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
