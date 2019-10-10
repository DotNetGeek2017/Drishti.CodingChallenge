import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AggregatedData } from "app/dashboard/models/dashboard.model";

@Component({
  selector: "left-chart-section",
  templateUrl: "./leftchartsection.component.html",
  styleUrls: ["./leftchartsection.component.scss"]
})
export class LeftChartSectionComponent implements OnInit {
  @Input() aggregatedData:AggregatedData;
  constructor() {
  }
  
  ngOnInit() {}

  dishesLabels():string[]{
      return this.aggregatedData.dishes.map(x=>x.key);
  }

  dishesValues():number[]{
    return this.aggregatedData.dishes.map(x=>x.value);
    }

    actionLabels():string[]{
        return this.aggregatedData.actions.map(x=>x.key);
    }
  
    actionValues():number[]{
      return this.aggregatedData.actions.map(x=>x.value);
      }

      stationLabels():string[]{
        return this.aggregatedData.stations.map(x=>x.key);
    }
  
    stationValues():number[]{
      return this.aggregatedData.stations.map(x=>x.value);
      }
}
