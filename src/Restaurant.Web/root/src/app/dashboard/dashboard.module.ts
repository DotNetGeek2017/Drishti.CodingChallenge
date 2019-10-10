import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SharedModule } from "app/shared/shared.module";
import { ChartsSectionComponent } from "./components/charts-section/charts-section.component";
import { SearchFilterComponent } from "./components/searchfilter/searchfilter.component";
import { DashboardService } from "./services/dashboard.service";
import { ActionTeaserComponent } from "./components/action-teaser/action-teaser.component";
import { MatCardModule } from "@angular/material";
import { ActionTeasersComponent } from "./components/action-teasers/action-teasers.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { LeftChartSectionComponent } from "./components/left-chart-section/leftchartsection.component";

@NgModule({
  declarations: [
    DashboardComponent,
    ChartsSectionComponent,
    SearchFilterComponent,
    ActionTeaserComponent,
    ActionTeasersComponent,
    PaginationComponent,
    LeftChartSectionComponent
  ],
  imports: [CommonModule, SharedModule, DashboardRoutingModule,MatCardModule],
  providers: [DashboardService]
})
export class DashboardModule {}
