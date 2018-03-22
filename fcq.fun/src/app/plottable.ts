import { Field } from './field';

export interface Plottable {
  public getFieldData(field: Field): number[];
  public getFieldList(): Field[];
  public getValid(): boolean;
}
