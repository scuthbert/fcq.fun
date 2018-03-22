import { Field } from "./field";

export interface Plottable {
  getFieldData(field: Field): number[];
  getFieldList(): Field[];
  getValid(): boolean;
}
