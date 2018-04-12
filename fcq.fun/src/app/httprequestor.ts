import {DataStore} from "./data-store"
import {Plottable} from "./plottable"
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Observable} from 'rxjs';
import * as XLSX from 'xlsx';

type AOA = any[][];

export class HTTPRequestor implements DataStore {
  constructor(private http: HttpClient) {  }

  public getPlottable(name: string): Plottable {
    // Regex match - Is term a professor or class code?


    // Pull up the FCQ site and print out the first form
    this.http.get('https://cors-anywhere.herokuapp.com/https://a2y9euj5ml.execute-api.us-east-2.amazonaws.com/prod/fcq-fetcher?instructor=' + name).subscribe(data => this.getXLS(data as string))
    return null;
  }

  private getXLS(url: string): void {
    this.http.get('https://cors-anywhere.herokuapp.com/' + url, {responseType: 'arraybuffer'})
        .subscribe(
            data => this.parsePlottable(data),
            error => console.log(error) // implement your error handling here
          )
  }

  private parsePlottable(raw): void {
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
    const raw_data = <AOA>(XLSX.utils.sheet_to_json(ws, {raw: true}));
    // Interate over the entries, if field matches something we want then add it
    for(var line in raw_data){
      for(var key in raw_data[line]){
        //console.log(key + " : " + raw_data[line][key])
      }
      console.log(raw_data[line])
    }

  }
}
