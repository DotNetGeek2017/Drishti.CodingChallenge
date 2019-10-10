import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit {
  @Input() pageIndex;
  @Input() pageSize;
  @Input() totalCount;
  @Output() public buttonClicked: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
  }
  ngOnInit() {}

  nextClick(){
    this.buttonClicked.emit(this.pageIndex+1);
  }

  previousClick(){
    this.buttonClicked.emit(this.pageIndex-1);
    }

    enableNextButton(){
        if(this.totalCount==0){
            return false;
        }

        return (this.totalCount/(this.pageSize* this.pageIndex))>1;
    }

    ofTotal():number{
      let totalPages=Math.ceil(this.totalCount/this.pageSize);
      if(this.totalCount==0) {
        return 0;
      }

      return totalPages==this.pageIndex?this.totalCount:this.pageIndex*this.pageSize;
    }
}
