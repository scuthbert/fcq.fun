import { Component, OnInit } from '@angular/core';

import { Lecturer } from '../lecturer';
import { Plottable } from '../plottable';
import { DataStore } from '../data-store';
import { LocalDataCache } from '../local-data-cache';

@Component({
  selector: 'app-fcqpage',
  templateUrl: './fcqpage.component.html',
  styleUrls: ['./fcqpage.component.css']
})

export class FCQPageComponent implements OnInit {
  title: string = "DEFAULT";
  currentQuery: Plottable;
  dataInterface: DataStore;

  public search(name: string): void {
    //TODO: Search for String
  }

  constructor() {
    dataInterface = new LocalDataCache();
  }

  ngOnInit() {}

}
