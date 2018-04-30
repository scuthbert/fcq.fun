import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Plottable } from "../plottable";
import * as Plotly from "plotly.js";

@Component({
  selector: "app-chart-display",
  templateUrl: "./chart-display.component.html",
  styleUrls: ["./chart-display.component.css"]
})
export class ChartDisplayComponent implements OnChanges {
  @Input() private currentFields: string[];
  @Input() private currentResult: Plottable;
  constructor() { }

  public updateFields(fields: string[]): void {
    if (!fields.every(field => field in this.currentResult.getFieldList())) {
      throw new Error("Some fields do not exist in result");
    }

    this.currentFields = fields;
  }

  public display(data: Plottable): void {
    this.currentResult = data;
    this.currentFields = [];
    data.getFieldList().forEach((value, index, arr) => {
      this.currentFields.push(value.getName())
    }); // TODO: UNDO THIS

    let traces: {}[];
    this.currentFields.forEach(field => {
      /*traces.push({
        name: field,
        mode: "lines+markers",
        type: "scatter",
        line: {shape: "spline"},
        x: data.getFieldData(field).map(point => point.getTerm()),
        y: data.getFieldData(field).map(point => point.getValue())
      });*/
    });

    //Plotly.react(this.currentResult.getLabel(), traces);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.display(this.currentResult);
  }

}
