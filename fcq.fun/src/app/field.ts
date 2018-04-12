import { DataPoint } from "./data-point";

export class Field {
    private values: DataPoint[];
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getValues(): DataPoint[] {
        return this.values;
    }

    public getName(): string {
        return this.name;
    }

    public setValues(values: DataPoint[]): void {
        this.values = values; // Validation in DataPoint constructor
    }

    public appendValue(newValue: DataPoint): void {
        this.values.push(newValue); // Validation in DataPoint constructor
    }

    public setName(newName: string): void {
        this.name = newName;
    }
}
