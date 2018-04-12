export class DataPoint {
    private value: number;
    private term: string;

    constructor(value: number, term: string) {
        if (value > 6 || value < 1) {
            throw new Error("Provided value invalid for an FCQ DataPoint");
        }

        if (!term.match(/[0-9]{4}-[0-9]{2}/)) {
            throw new Error("Provided term is not a valid date");
        }

        this.term = term;
        this.value = value;
    }

    public getValue(): number {
        return this.value;
    }

    public getTerm(): string {
        return this.term;
    }
}
