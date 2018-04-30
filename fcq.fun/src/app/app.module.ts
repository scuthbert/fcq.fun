import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";

import { FCQPageComponent } from "./fcqpage/fcqpage.component";
import { ChartDisplayComponent } from "./chart-display/chart-display.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ChartDirective } from './chart.directive';

@NgModule({
  declarations: [
    FCQPageComponent,
    ChartDisplayComponent,
    ChartDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [ChartDisplayComponent],
  providers: [],
  bootstrap: [FCQPageComponent]
})
export class AppModule { }
