import { Component, OnInit, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "multi-select-input",
  templateUrl: "./multi-select.component.html",
  styleUrls: ["./multi-select.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true
    }
  ]
})
export class MultiSelectComponent implements ControlValueAccessor {
  private _value;
  @Input() inputType: "text" | "number" = "text";
  constructor() {}

  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v;
    this.onChange(this._value);
    this.onTouched();
  }
  getDisplayText() {
    if (!this.value || !this.value.length) {
      return "";
    }
    const array: Array<string> = this.value;
    let result = "";
    array.forEach(a => (result += a + ", "));
    if (result.length > 2) {
      result = result.slice(0, result.length - 2);
    }
    return result;
  }

  enterText(event?, input?) {
    if (!event) {
      if (input.value.trim()) {
        this.value.unshift(input.value);
        input.value = "";
        this.onChange(this.value);
      }
    } else {
      if (event.key === "Enter") {
        if (input.value.trim()) {
          this.value.unshift(input.value);
          input.value = "";
          this.onChange(this.value);
        }
      }
    }
  }

  deleteText(index) {
    this.value.splice(index, 1);
    this.onChange(this.value);
  }

  clearValue() {
    this.value = [];
    this.onChange(this.value);
  }

  writeValue(value: any) {
    this._value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onChange: (_: any) => void = (_: any) => {};
  onTouched: () => void = () => {};
}
