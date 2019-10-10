import { Injectable } from "@angular/core";
import { Headers } from "@angular/http";
import { Menu } from "../model/menu";
import "rxjs/add/operator/toPromise";

@Injectable()
export class MenuService {
  constructor() {}

  getMenu() { 
    return [];
  }
}
