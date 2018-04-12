import { Component, OnInit } from "@angular/core";

import { Lecturer } from "../lecturer";
import { Plottable } from "../plottable";
import { DataStore } from "../data-store";
import { HTTPRequestor } from "../httprequestor";

import { HttpClient  } from '@angular/common/http';

@Component({
  selector: "app-fcqpage",
  templateUrl: "./fcqpage.component.html",
  providers: [ HttpClient ],
  styleUrls: ["./fcqpage.component.css"]
})

export class FCQPageComponent implements OnInit {
  title = "Hell o worl";
  currentQuery: Plottable;
  dataInterface: DataStore;

  public search(name: string): void {
    // TODO: Search for String
    if(name != null){
      this.dataInterface.getPlottable(name);
    }
  }

  constructor(private http: HttpClient) {
    this.dataInterface = new HTTPRequestor(http);
  }

  ngOnInit() {}

}
