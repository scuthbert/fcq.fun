import { Field } from "./field";
import { DataPoint } from "./data-point";

export interface Plottable {
  getFieldData(fieldName: string): DataPoint[];
  getFieldList(): Field[];
  getValid(): boolean;
  getLabel(): string;
}
