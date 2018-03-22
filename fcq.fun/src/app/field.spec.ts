import { Field } from "./field";

describe("Field", () => {
    let field: Field;

    beforeEach(() => {
      field = new Field("Test Field");
    });

    afterEach(() => {
      field = null;
    });

    it("should be able to set a list of values", () => {
        field.setValues([1, 2, 3, 4, 5]);
        expect(field.getValues()).toEqual([1, 2, 3, 4, 5]);
    });

    it("should validate set data properly", () => {
        expect(field.setValues.bind(null, [1.1, 2.2, 3.3, 100])).toThrow();
    });

    it("should append data to end of list", () => {
        field.setValues([1, 2, 3, 4]);
        field.appendValue(5);
        expect(field.getValues()).toEqual([1, 2, 3, 4, 5]);
    });

    it("should validate appended data properly", () => {
        expect(field.appendValue.bind(null, 7)).toThrow();
    });
});
