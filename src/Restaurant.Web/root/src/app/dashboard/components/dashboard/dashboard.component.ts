import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import {  ActionTeaser, OverviewData, Pagination, SearchFilter, PaginationResult, AggregatedData } from "app/dashboard/models/dashboard.model";
import { ActivatedRoute } from "@angular/router";
import { LocalStorageService } from "app/shared/services/index.service";
import * as moment from "moment";
import { DashboardService } from "app/dashboard/services/dashboard.service";
import { Observable } from "rxjs";
import { PaginationComponent } from "../pagination/pagination.component";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  @ViewChild(PaginationComponent) paginationComponent: PaginationComponent;
  paginationResult$:Observable<PaginationResult>;
  searchFilter:SearchFilter=new SearchFilter();
  aggregatedData$:AggregatedData;
  date = moment();
  previousDate = moment().add(-7, "days");
  recentTransactions;
  dishes:string[];
  actions:string[];
  stations:string[];
  userActions:ActionTeaser[];
  pageIndex:number;
  constructor(
    private route: ActivatedRoute,
    public storage: LocalStorageService,
    public dashboardService:DashboardService
  ) {
  }
  
  ngOnInit() {  
    this.paginationResult$=this.dashboardService.getGridData();      
    this.dishes= this.route.snapshot.data.dashboard[0];
    this.stations= this.route.snapshot.data.dashboard[1];
    this.actions= this.route.snapshot.data.dashboard[2];
    this.aggregatedData$=this.route.snapshot.data.dashboard[3];
    this.searchFilterChanged(new SearchFilter());
  }

  ngAfterViewInit() {
    this.paginationComponent.buttonClicked
        .do((pageIndex: number) => {
          this.pageIndex=pageIndex;
        })
        .subscribe(x =>{       
            let paginationQuery=new Pagination<SearchFilter>();
            paginationQuery.pageIndex=this.pageIndex;
            paginationQuery.pageSize=10;
            paginationQuery.searchFilter=this.searchFilter;
            this.dashboardService.searchFilter(paginationQuery).subscribe(x=>x);
            }
        );
}    

  searchFilterChanged(event:any){
    let paginationQuery=new Pagination<SearchFilter>();
    paginationQuery.pageIndex=1;
    paginationQuery.pageSize=10;
    this.searchFilter=new SearchFilter();
    this.searchFilter.action=event.action;
    this.searchFilter.dish=event.dish;
    this.searchFilter.station=event.station;
    paginationQuery.searchFilter=this.searchFilter;
    this.dashboardService.searchFilter(paginationQuery).subscribe(x=>x);
    this.pageIndex=1;
    this.searchFilter=paginationQuery.searchFilter;
  }   
}
