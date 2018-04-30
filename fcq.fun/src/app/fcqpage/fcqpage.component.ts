import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild } from "@angular/core";

import { Lecturer } from "../lecturer";
import { Plottable } from "../plottable";
import { Query } from "../query";
import { DataStore } from "../data-store";
import { LocalDataCache } from "../local-data-cache";
import { ChartDirective } from "../chart.directive";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpClient  } from '@angular/common/http';
import { ChartDisplayComponent } from "../chart-display/chart-display.component";


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

  @ViewChild(ChartDirective) chartHost: ChartDirective;

  query: Query;

  public search(name: string): void {
    // TODO: Search for String
    this.query.instructor = name;
    console.log(this.query.instructor)
    this.dataInterface.getPlottable(this.query.instructor).subscribe(data => {
      // Open ChartDisplay on this data
      console.log(data)

      let viewContainerRef = this.chartHost.viewContainerRef;
      viewContainerRef.clear();

      let factory = this.cmpFactResolve.resolveComponentFactory(ChartDisplayComponent);
      let component = viewContainerRef.createComponent(factory);
      component.instance.display(data[0])
    })

  }

  constructor(private http: HttpClient, 
              private fb: FormBuilder, 
              private cmpFactResolve: ComponentFactoryResolver, 
              private viewContainer: ViewContainerRef) {
    this.dataInterface = new LocalDataCache(http);
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
