export class Field {
    private values: number[];
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getValues(): number[] {
        return this.values;
    }

    public getName(): string {
        return this.name;
    }

    public setValues(values: number[]): void {
        if (values.every((value: number) => value <= 6 && value >= 1)) {
            this.values = values;
        } else {
            throw new Error("Not all values are valid FCQ scores");
        }
    }

    public appendValue(newValue: number): void {
        if (newValue <= 6 && newValue >= 1) { // FCQ values MUST be in the range [1,6]
            this.values.push(newValue);
        } else {
            throw new Error("Given value is not a valid FCQ score");
        }
    }

    public setName(newName: string): void {
        this.name = newName;
    }
}
