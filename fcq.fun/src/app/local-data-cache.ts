import { DataStore } from "./data-store";
import { Plottable } from "./plottable";

export class LocalDataCache implements DataStore {
  private localCache: {[key: string]: Plottable};

  public getPlottable(name: string): Plottable {
    let result: Plottable = this.localCache[name];
    if (result == null) {
      // Call HTTPRequestor
    }
    return result;
  }

  public constructor() {

  }
}
