import { NumberSymbol } from "@angular/common";

export class AggregatedData {
  totalDuration:number;
  averageDuration:number;
  totalItems:number;
  actions:Pair[];
  stations:Pair[];
  dishes:Pair[];
}

export class Pair{
  key:string;
  value:number;
}

export class OverviewData {
  errors: number;
  processed: number;
  settled: number;
}

export class SearchFilter{
  dish:string;
  action:string;
  station:string;
}

export class Pagination<T>{
  pageSize:number;
  pageIndex:number;
  searchFilter:T;
}

export class PaginationResult{
  pageIndex:number;
  pageSize:number;
  totalCount :number;
  totalPages :number;
  items:ActionTeaser[]
}


export class ActionTeaser{
  constructor(dish:string, station:string,
     userAction:string, duration:number, startDateTime:string) {
      this.dish=dish;
      this.station=station;
      this.userAction=userAction;
      this.duration=duration;
      this.startDateTime=startDateTime;
    }

    dish:string;
  station:string;
  userAction:string;
  duration:number;
  startDateTime:string
}

