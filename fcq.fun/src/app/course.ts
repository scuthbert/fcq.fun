import { Plottable } from "./plottable";
import { Field } from "./field";

export class Course implements Plottable {
    private courseCode: string;
    private fieldList: Field[];
    private valid: boolean;

    public constructor(courseCode: string, fields: Field[]) {
        if (/[A-Z]{4}\d{4}/.test(courseCode)) {
            this.courseCode = courseCode;
            this.fieldList = fields;
        } else {
            throw new Error("Provided course code is not valid");
        }
    }

    public getCourseCode(): string {
        return this.courseCode;
    }

    public getFieldData(fieldName: string) {
        let foundField = this.fieldList.find((field: Field) => field.getName() === fieldName);
        if (foundField) {
            return foundField.getValues();
        } else {
            throw new Error("No field was found for the provided name");
        }
    }

    public getFieldList() {
        return this.fieldList;
    }

    public getValid() {
        return this.valid;
    }

    public getLabel() {
        return this.getCourseCode();
    }
}
