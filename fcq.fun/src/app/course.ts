import { Plottable } from "./plottable";
import { Field } from "./field";

export class Course implements Plottable {
    private courseCode: string;
    private fieldList: Field[];
    private valid: boolean;

    public constructor(courseCode: string) {
        if (/[A-Z]{4}\d{4}/.test(courseCode)) {
            this.courseCode = courseCode;
        } else {
            throw new Error("Provided course code is not valid");
        }
    }

    public getCourseCode(): string {
        return this.courseCode;
    }
}
