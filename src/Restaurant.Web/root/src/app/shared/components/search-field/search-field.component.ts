import {
  Component,
  Input,
  Output,
  ElementRef,
  EventEmitter
} from "@angular/core";
import { Observable } from "rxjs/Rx";

@Component({
  selector: "search-field",
  templateUrl: "./search-field.component.html",
  styleUrls: ["./search-field.component.scss"]
})
export class SearchFieldComponent {
  @Input() placeholder: string;
  @Input() delay: number = 300;
  @Input() limit: number = 3;
  @Output() searchChange = new EventEmitter();

  public inputValue: string;
  private searchTerm: string = "";

  constructor(private elementRef: ElementRef) {
    const eventStream = Observable.fromEvent(elementRef.nativeElement, "keyup")
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();

    eventStream.subscribe(input => {
      if (input.length >= this.limit || input.length < this.searchTerm.length) {
        this.searchTerm = input;
        this.searchChange.emit(input);
      }
    });
  }

  onFieldClearHandler() {
    this.inputValue = "";
    this.searchChange.emit("");
  }

  clear() {
    this.inputValue = "";
    this.searchTerm = "";
  }
}
