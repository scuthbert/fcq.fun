import { DataStore } from "./data-store";
import { Plottable } from "./plottable";
import { HTTPRequestor } from "./httprequestor";
import { Observable } from "rxjs";

export class LocalDataCache implements DataStore {
  private plottables: Map<string, Plottable[]> = new Map();
  private httpGetter: HTTPRequestor;

  public getPlottable(name: string): Observable<Plottable[]> {
    let result: Plottable = this.plottables[name];
    if (result == null) {
      let observ =  this.httpGetter.getPlottable(name);
      observ.subscribe(data => {
        this.plottables[name] = data;
      });
      return observ;
    } if (result != null) {
      return Observable.of(this.plottables[name])
    }
  }

  public constructor(http) {
    this.httpGetter = new HTTPRequestor(http);
  }
}
