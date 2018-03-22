export class Field {
    private values: number[];
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getValues(): number[] {
        return this.values;
    }

    public getName(): string {
        return this.name;
    }

    public setValues(values: number[]): void {
        this.values = values;
    }

    public appendValue(newValue: number): void {
        this.values.push(newValue);
    }

    public setName(newName: string): void {
        this.name = newName;
    }
}
