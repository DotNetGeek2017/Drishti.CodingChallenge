import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject, Subject } from "rxjs";
import {  OverviewData, SearchFilter, Pagination, PaginationResult, AggregatedData } from "../models/dashboard.model";
import { ApiService } from "app/shared/services/api.service";

@Injectable()
export class DashboardService {
  private paginationResult = new Subject<PaginationResult>();

  getGridData(){
    return this.paginationResult.asObservable();
  }

  clearGridData(){
        return this.paginationResult.next();
  }

  constructor(private http: ApiService) {}

  getDishes(): Observable<string[]> {
    return this.http.get("restaurant/dishes");
  }

  getStations() : Observable<string[]> {
    return this.http.get("restaurant/station");
  }

  getUserActions() : Observable<string[]> {
    return this.http.get("restaurant/action");
  }

  searchFilter(paginationQuery:Pagination<SearchFilter>) : Observable<PaginationResult> {
    return this.http.get(`restaurant/${paginationQuery.pageSize}/${paginationQuery.pageIndex}/search?dish=${paginationQuery.searchFilter.dish||""}&action=${paginationQuery.searchFilter.action || ""}&station=${paginationQuery.searchFilter.station||""}`).map(res => {
      this.paginationResult.next(res);
      return res;
    }); 
  }

  getAggregatedData(searchFilter:SearchFilter):Observable<AggregatedData>{
    return this.http.get(`restaurant/aggregateddata?dish=${searchFilter.dish||""}&action=${searchFilter.action || ""}&station=${searchFilter.station||""}`).map(res => {
      return res;
    }); 
  }
}
