import { Component, OnInit } from '@angular/core';

import { Lecturer } from '../lecturer';
import { Plottable } from '../plottable';

@Component({
  selector: 'app-fcqpage',
  templateUrl: './fcqpage.component.html',
  styleUrls: ['./fcqpage.component.css']
})
export class FCQPageComponent implements OnInit {
  title: string = "DEFAULT";
  currentQuery: Plottable;

  getLecName(): string {
    var lec = new Lecturer();
    return lec.Name;
  }

  search(name: string): void {
    //TODO: Search for String
  }

  constructor() {}

  ngOnInit() {}

}
