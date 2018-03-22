import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FCQPageComponent } from './fcqpage/fcqpage.component';


@NgModule({
  declarations: [
    FCQPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FCQPageComponent]
})
export class AppModule { }
