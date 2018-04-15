import {DataStore} from "./data-store"
import {Plottable} from "./plottable"
import {Lecturer} from "./lecturer"
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Observable} from 'rxjs';
import { mergeMap  } from 'rxjs/operators';
import * as XLSX from 'xlsx';
import { plot } from "plotly.js";

type AOA = any[][];

export class HTTPRequestor implements DataStore {
  constructor(private http: HttpClient) {  }

  public getPlottable(name: string): Observable<Plottable[]> {
    // Regex match - Is term a professor or class code?
    console.log("Searching for instructor: " + name);

    // Pull up the FCQ site and print out the first form
    return this.http.get('https://cors-anywhere.herokuapp.com/https://a2y9euj5ml.execute-api.us-east-2.amazonaws.com/prod/fcq-fetcher?instructor=' + name).pipe(mergeMap(data => this.getXLS(data as string)))

  }

  private getXLS(url: string): Observable<Plottable[]> {
    return this.http.get('https://cors-anywhere.herokuapp.com/' + url, {responseType: 'arraybuffer'})
        .pipe(mergeMap(
            data => { return this.parsePlottable(data) },
            error => { console.log(error); return null} // implement your error handling here
          ))
  }

  private parsePlottable(raw): Plottable[] {
    var binary = "";
    var bytes = new Uint8Array(raw);
    var length = bytes.byteLength;
    for (var i = 0; i < length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    const wb: XLSX.WorkBook = XLSX.read(binary, {type: 'binary'});
		/* grab data sheet */
		const wsname: string = wb.SheetNames[1];
		const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    // Get all the data, going backward. This is one bit where we care whether it's a course or instructor
    let raw_data = <AOA>(XLSX.utils.sheet_to_json(ws, {raw: true}));

    // Make a map of professor names to plottables
    let plottables: Map<string, Plottable> = new Map();

    // Interate over the entries, if field matches something we want then add it
    for(var line in raw_data){
      // Test if this lecturer already exists/if this class already exists
      if(plottables.has(raw_data[line]["Instructor"])) {
        // Append
      } else {
        // Create
        
      }
    }

    console.log(plottables.values())
    return Array.from(plottables.values());

  }
}
