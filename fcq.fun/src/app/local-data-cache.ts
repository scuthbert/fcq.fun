import { DataStore } from "./data-store";
import { Plottable } from "./plottable";
import { Observable } from "rxjs";

export class LocalDataCache implements DataStore {
  private plottables: Map<string, Plottable[]> = new Map();

  public getPlottable(name: string): Observable<Plottable[]> {
    let result: Plottable = this.plottables[name];
    if (result == null) {
      // Call HTTPRequestor
    }
    return null;
  }

  public constructor() {

  }
}
