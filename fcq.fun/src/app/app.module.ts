import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FCQPageComponent } from './fcqpage/fcqpage.component';
import { ChartDisplayComponent } from './chart-display/chart-display.component';


@NgModule({
  declarations: [
    FCQPageComponent,
    ChartDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FCQPageComponent]
})
export class AppModule { }
