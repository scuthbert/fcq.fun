import { DataStore } from "./data-store";
import { Plottable } from "./plottable";
import { Lecturer } from "./lecturer";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { mergeMap, map } from "rxjs/operators";
import * as XLSX from "xlsx";
import { plot } from "plotly.js";
import { DataPoint } from "./data-point";
import { Field } from "./field";
import { Course } from "./course";

type AOA = any[][];

export class HTTPRequestor implements DataStore {
  private courseSearch = false;
  constructor(private http: HttpClient) { }

  public getPlottable(name: string): Observable<Plottable[]> {
    // Tell the user to wait.
    alert("Searching! This could take a minute...");

    // Regex match - Is term a professor or class code?
    if(name.match(/^[a-z]{4}\d{4}$/i)) {
      this.courseSearch = true;
      console.log("Searching for course: " + name);
      return this.http.get("https://cors-anywhere.herokuapp.com/https://a2y9euj5ml.execute-api.us-east-2.amazonaws.com/prod/fcq-fetcher?courseCode=" + name.substr(4, 4) + "&courseDept=" + name.substr(0, 4)) // tslint:disable-line max-line-length
      .pipe(mergeMap(
          data => this.getXLS(data as string)
      ));
    } else {
      this.courseSearch = false;
      console.log("Searching for instructor: " + name);
      return this.http.get("https://cors-anywhere.herokuapp.com/https://a2y9euj5ml.execute-api.us-east-2.amazonaws.com/prod/fcq-fetcher?instructor=" + name) // tslint:disable-line max-line-length
      .pipe(mergeMap(
          data => this.getXLS(data as string)
        ));
      }
      
  }

  private getXLS(url: string): Observable<Plottable[]> {
    return this.http.get("https://cors-anywhere.herokuapp.com/" + url, { responseType: "arraybuffer" })
      .pipe(map(
        data => this.parsePlottable(data)
      ));
  }

  private parsePlottable(raw): Plottable[] {
    let binary = "";
    let bytes = new Uint8Array(raw);
    let length = bytes.byteLength;
    for (let i = 0; i < length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    const wb: XLSX.WorkBook = XLSX.read(binary, { type: "binary" });
    /* grab data sheet */
    const wsname: string = wb.SheetNames[1];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    // Get all the data, going backward. This is one bit where we care whether it's a course or instructor
    let raw_data = <AOA>(XLSX.utils.sheet_to_json(ws, { raw: true }));

    // Make a map of professor names to plottables
    let plottables: Map<string, Field[]> = new Map();
    let courses: Map<string, Field[]> = new Map();

    // Interate over the entries, if field matches something we want then add it
    for (let line in raw_data) {
      let term: string = raw_data[line]["Yearterm"];
      term = term.substr(0, 4) + "-0" + term.substr(4, 4); // Format YYYY-MM

      // Generate data points from this result
      let instrOver: DataPoint = new DataPoint(raw_data[line]["InstructorOverall"], term);
      let instrResp: DataPoint = new DataPoint(raw_data[line]["InstrRespect"], term);
      let instrAvai: DataPoint = new DataPoint(raw_data[line]["Availability"], term);
      let instrEffe: DataPoint = new DataPoint(raw_data[line]["InstrEffective"], term);

      let crseHMLen: DataPoint = new DataPoint(raw_data[line]["HowMuchLearned"], term);
      let crsePriIt: DataPoint = new DataPoint(raw_data[line]["PriorInterest"], term);
      let crseHrWek: DataPoint = new DataPoint(/* map from string raw_data[line]["HoursPerWkInclClass"] */ 3, term);
      let crseOvera: DataPoint = new DataPoint(raw_data[line]["CourseOverall"], term);

      // Test if this lecturer already exists/if this class already exists
      let key = raw_data[line]["Instructor"];
      if (plottables.has(key)) {
        // Append
        let current = plottables.get(key);
        current[0].appendValue(instrOver);
        current[1].appendValue(instrResp);
        current[2].appendValue(instrAvai);
        current[3].appendValue(instrEffe);
        plottables.set(key, current);

      } else {
        // Create
        let f1 = new Field("Instructor Overall");
        f1.setValues([instrOver]);
        let f2 = new Field("Instructor Respect");
        f2.setValues([instrResp]);
        let f3 = new Field("Availability");
        f3.setValues([instrAvai]);
        let f4 = new Field("Instructor Effectiveness");
        f4.setValues([instrEffe]);

        let current: Field[] = [f1, f2, f3, f4];
        plottables.set(key, current);

      }

      // Now do the same for course
      let crse = raw_data[line]["Fcqdept"] + raw_data[line]["Crse"]
      if (courses.has(crse)) {
        // Append
        let current = courses.get(crse);
        current[0].appendValue(crseHMLen);
        current[1].appendValue(crsePriIt);
        current[2].appendValue(crseHrWek);
        current[3].appendValue(crseOvera);
        courses.set(crse, current);

      } else {
        // Create
        let f1 = new Field("How Much Learned");
        f1.setValues([crseHMLen]);
        let f2 = new Field("Prior Interest");
        f2.setValues([instrResp]);
        let f3 = new Field("Hours Per Week");
        f3.setValues([instrAvai]);
        let f4 = new Field("Course Overall");
        f4.setValues([instrEffe]);

        let current: Field[] = [f1, f2, f3, f4];
        courses.set(crse, current);

      }
    }

    let lecturers: Plottable[] = [];

    if(this.courseSearch) {
      courses.forEach((fields, key) => {
        try {
          let lec: Course = new Course(key, fields);
          lecturers.push(lec);
        } catch {
          console.log("Error with " + key + " and " + fields);
        }
      });

      plottables.forEach((fields, key) => {
        try {
          let lec: Lecturer = new Lecturer(key, fields);
          lecturers.push(lec);
        } catch {
          console.log("Error with " + key + " and " + fields);
        }
      });
    } else {
      plottables.forEach((fields, key) => {
        try {
          let lec: Lecturer = new Lecturer(key, fields);
          lecturers.push(lec);
        } catch {
          console.log("Error with " + key + " and " + fields);
        }
      });

      courses.forEach((fields, key) => {
        try {
          let lec: Course = new Course(key, fields);
          lecturers.push(lec);
        } catch {
          console.log("Error with " + key + " and " + fields);
        }
      });
    }
    
    return lecturers;
  }
}
