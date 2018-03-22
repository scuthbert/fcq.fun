import { Field } from "./field";

export interface Plottable {
  getFieldData(fieldName: string): number[];
  getFieldList(): Field[];
  getValid(): boolean;
}
