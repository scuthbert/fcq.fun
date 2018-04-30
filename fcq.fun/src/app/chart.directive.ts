import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appChartHost]"
})
export class ChartDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
