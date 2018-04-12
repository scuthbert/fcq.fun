import { Plottable } from "./plottable";

export interface DataStore {
  getPlottable(name: string): Plottable[];
}
