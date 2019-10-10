import { LoaderComponent } from "../components/loader/loader.component";
import { Injectable, OnInit, OnDestroy, NgZone } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Observer } from "rxjs/Observer";

@Injectable()
export class LoadingService {
  loading: boolean = false;
  load_req: number = 0;
  private spinnerCache = new Set<any>();

  constructor(private zone: NgZone) {}

  _register(name, observer): void {
    this.spinnerCache.add({
      name,
      observer
    });
  }

  _unregister(name): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner.name === name) {
        this.spinnerCache.delete(spinner);
      }
    });
  }

  show(spinnerName: string): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner.name === spinnerName) {
        this.zone.run(() => {
          spinner.observer.next(true);
        });
      }
    });
  }

  hide(spinnerName: string): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner.name === spinnerName) {
        this.zone.run(() => {
          spinner.observer.next(false);
        });
      }
    });
  }
}
