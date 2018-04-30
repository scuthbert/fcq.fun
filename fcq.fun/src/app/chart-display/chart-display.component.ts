import { Component, OnInit, Input, OnChanges, AfterViewInit, SimpleChanges } from "@angular/core";
import { Plottable } from "../plottable";
import * as Plotly from "plotly.js";

@Component({
  selector: "app-chart-display",
  templateUrl: "./chart-display.component.html",
  styleUrls: ["./chart-display.component.css"]
})

export class ChartDisplayComponent implements OnChanges, AfterViewInit {
  @Input() private currentResult: Plottable;
  private currentFields: string[];
  private viewReady = false;
  constructor() { }

  public updateFields(fields: string[]): void {
    if (!fields.every(field => field in this.currentResult.getFieldList())) {
      throw new Error("Some fields do not exist in result");
    }

    this.currentFields = fields;
  }

  public display(data: Plottable): void {
    this.currentResult = data;
    this.currentFields = data.getFieldList().map((value) => value.getName());

    let traces: {}[] = this.currentFields.map(field => ({
        name: field,
        mode: "markers",
        type: "scatter",
        line: {shape: "spline"},
        x: data.getFieldData(field).map(point => point.getTerm()),
        y: data.getFieldData(field).map(point => point.getValue())
      }
    ));

    let layout = {
      title: `FCQ results for ${data.getLabel()}`,
      xaxis: {
        title: "Semester (Starting Month)",
        titlefont: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f"
        }
      },
      yaxis: {
        title: "FCQ Score",
        titlefont: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f"
        }
      }
    };

    if (this.viewReady) {
      Plotly.react(this.currentResult.getLabel(), traces, layout);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.display(this.currentResult);
  }

  ngAfterViewInit() {
    this.viewReady = true;
    this.display(this.currentResult);
  }

}
