import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  NgZone,
  ChangeDetectorRef
} from "@angular/core";
import { LoadingService } from "../../services/loading.service";
import { Subject } from "rxjs/Rx";

@Component({
  selector: "loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit, OnDestroy {
  public isLoading = false;
  @Input() type: string = "spinner";

  @Input() name: string;
  private subscription = new Subject<any>();
  constructor(
    private cd: ChangeDetectorRef,
    private loadingService: LoadingService,
    private zone: NgZone
  ) {
    this.subscription.subscribe(val => {
      this.zone.run(() => {
        this.isLoading = val;
        this.cd.markForCheck();
      });
    });
  }

  toggleLoading(loading) {
    this.isLoading = loading;
  }

  ngOnInit() {
    if (!this.name) throw new Error("Spinner must have a name.");
    this.loadingService._register(this.name, this.subscription);
  }

  ngOnDestroy(): void {
    this.loadingService._unregister(this.name);
  }
}
