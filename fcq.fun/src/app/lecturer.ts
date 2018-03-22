import { Plottable } from "./plottable";
import { Field } from "./field";

export class Lecturer implements Plottable {
  private name: string;
  private fieldList: Field[];
  private valid: boolean;

  public constructor(name: string, fields: Field[]) {
    this.name = name;
    this.fieldList = fields;
  }

  public getLecturerName(): string {
    return this.name;
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
}
