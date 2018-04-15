import { Component, OnInit, Input } from "@angular/core";

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
  title = "fcq.fun";
  currentQuery: Plottable;
  dataInterface: DataStore;
  queryForm: FormGroup;

  query: Query;

  public search(name: string): void {
    // TODO: Search for String
    this.query.instructor = name;
    console.log(this.query.instructor)
    this.dataInterface.getPlottable(this.query.instructor).subscribe(data => {
      console.log(data)
    })

  }

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.dataInterface = new HTTPRequestor(http);
    this.query = new Query();
  }


  ngOnInit(): void {
    this.queryForm = this.fb.group({
      inst: '' // this.query.instructor
      //'subj': new FormControl(this.query.subject, Validators.required),
      //'cour': new FormControl(this.query.courseCode, Validators.required)
    });
  }

}
