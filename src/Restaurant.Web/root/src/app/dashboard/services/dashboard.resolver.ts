import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { DashboardService } from "./dashboard.service";
import { forkJoin } from "rxjs";
import { SearchFilter, Pagination } from "../models/dashboard.model";

@Injectable()
export class DashboardResolver implements Resolve<Observable<any>> {
  constructor(private service: DashboardService) {}

  resolve() {
    return forkJoin(
      this.service.getDishes(),
      this.service.getStations(),
      this.service.getUserActions(),
      this.service.getAggregatedData(new SearchFilter())
    );
  }
}
