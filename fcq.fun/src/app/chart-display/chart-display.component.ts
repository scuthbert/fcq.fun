import { Component, OnInit, Input } from "@angular/core";
import { Plottable } from "../plottable";

@Component({
  selector: "app-chart-display",
  templateUrl: "./chart-display.component.html",
  styleUrls: ["./chart-display.component.css"]
})
export class ChartDisplayComponent implements OnInit {
  @Input() private currentFields: string[];
  @Input() private currentResult: Plottable;
  constructor() { }

  public updateFields(fields: string[]): void {
    if (!fields.every(field => field in this.currentResult.getFieldList())) {
      throw new Error("Some fields do not exist in result");
    }

    this.currentFields = fields;
  }

  ngOnInit() {
  }

}
