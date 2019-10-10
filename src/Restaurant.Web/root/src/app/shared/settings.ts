import { Injectable } from "@angular/core";
import { TableField } from "./model/table";

@Injectable()
export class Settings {
  rootRoutings = [
    {
      path: "home",
      text: "Home"
    }
  ];
  headerRoutings = [
    {
      path: "home",
      text: "Home"
    },      
  ];
  
  transactionErrorField: TableField[] = [];
  settlementField: TableField[] = [];    
  constructor() {}
}
