import { Plottable } from "./plottable";
import {Observable} from "rxjs";

export interface DataStore {
getPlottable(name: string): Observable<Plottable[]>;
}
