import { Field } from "./field";
import { DataPoint } from "./data-point";

describe("Field", () => {
    let field: Field;

    beforeEach(() => {
      field = new Field("Test Field");
    });

    afterEach(() => {
      field = null;
    });

    it("should be able to set a list of values", () => {
        field.setValues([
            new DataPoint(1, "2018-07"),
            new DataPoint(2, "2018-07"),
            new DataPoint(3, "2018-07"),
            new DataPoint(4, "2018-07")
        ]);
        expect(field.getValues()).toEqual([
            new DataPoint(1, "2018-07"),
            new DataPoint(2, "2018-07"),
            new DataPoint(3, "2018-07"),
            new DataPoint(4, "2018-07")
        ]);
    });

    it("should append data to end of list", () => {
        field.setValues([
            new DataPoint(1, "2018-07"),
            new DataPoint(2, "2018-07"),
            new DataPoint(3, "2018-07"),
            new DataPoint(4, "2018-07")
        ]);
        field.appendValue(new DataPoint(5, "2018-07"));
        expect(field.getValues()).toEqual([
            new DataPoint(1, "2018-07"),
            new DataPoint(2, "2018-07"),
            new DataPoint(3, "2018-07"),
            new DataPoint(4, "2018-07"),
            new DataPoint(5, "2018-07")
        ]);
    });
});
