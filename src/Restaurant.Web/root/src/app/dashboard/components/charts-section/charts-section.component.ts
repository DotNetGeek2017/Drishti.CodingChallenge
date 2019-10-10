import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Input
} from "@angular/core";
import * as Chart from "chart.js";
Chart.defaults.global.defaultFontFamily = "gotham book";
Chart.defaults.global.defaultFontSize = 14;
@Component({
  selector: "charts-section",
  templateUrl: "./charts-section.component.html",
  styleUrls: ["./charts-section.component.scss"]
})
export class ChartsSectionComponent implements OnInit, AfterViewInit {
  @ViewChild("pie") pie: any;
  @ViewChild("line") line: any;
  @Input() labels:string[];
  @Input() labelsData:number[];
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.generatePieChart();
  }

  generatePieChart() {
    const canvas = this.pie.nativeElement;
    const ctx = canvas.getContext("2d");
    let myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.labelsData,
            borderWidth: 1,
            backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"]
          }
        ]
      },
      options: {
        legend: {
          position: "top"
        }
      }
    });
  }  
}
