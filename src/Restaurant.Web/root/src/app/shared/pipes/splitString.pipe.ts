import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "splitCC" //split Camel Case
})
export class SplitPipe implements PipeTransform {
  transform(value: string): string {
    if (undefined !== value) {
      let newStr = value
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
      return newStr;
    }
    return "";
  }
}
