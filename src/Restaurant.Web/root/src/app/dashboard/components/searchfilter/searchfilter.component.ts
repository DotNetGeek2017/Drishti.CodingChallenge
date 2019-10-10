import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "search-filter-section",
  templateUrl: "./searchfilter.component.html",
  styleUrls: ["./searchfilter.component.scss"]
})
export class SearchFilterComponent implements OnInit {
  @Input() dishes;
  @Input() actions;
  @Input() stations;
  @Output() searchFilterChanged = new EventEmitter();

  selectedDish: string;
  selectedStation: string;
  selectedAction:string;
  constructor() {
  }

  handleClick(){
    this.searchFilterChanged.emit({dish:this.selectedDish,station:this.selectedStation,action:this.selectedAction});
  }

  ngOnInit() {}
}
