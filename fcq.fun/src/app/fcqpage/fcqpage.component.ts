import { Component, OnInit } from "@angular/core";

import { Lecturer } from "../lecturer";
import { Plottable } from "../plottable";
import { Query } from "../query";
import { DataStore } from "../data-store";
import { HTTPRequestor } from "../httprequestor";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpClient  } from '@angular/common/http';


@Component({
  selector: "app-fcqpage",
  templateUrl: "./fcqpage.component.html",
  providers: [ HttpClient ],
  styleUrls: ["./fcqpage.component.css"]
})

export class FCQPageComponent implements OnInit {
  title = "THIGH MINIONS";
  currentQuery: Plottable;
  dataInterface: DataStore;
  queryForm: FormGroup;
  query: Query;

  public search(name: string): void {
    // TODO: Search for String
    if(name != null){
      this.dataInterface.getPlottable(name);
    }
  }

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.dataInterface = new HTTPRequestor(http);

  }


  ngOnInit(): void {
    this.query = new Query();

    this.queryForm = new FormGroup({
      'inst': new FormControl(this.query.instructor, [
        Validators.required
      ])
      //'subj': new FormControl(this.query.subject, Validators.required),
      //'cour': new FormControl(this.query.courseCode, Validators.required)
    });
  }

}
