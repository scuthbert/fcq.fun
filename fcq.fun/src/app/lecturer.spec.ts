import { Lecturer } from "./lecturer";

describe("Lecturer", () => {
    let lecturer: Lecturer;

    beforeEach(() => {
      lecturer = new Lecturer("Test Name");
    });

    afterEach(() => {
      lecturer = null;
    });

    it("should be able to get name", () => {
        expect(lecturer.getLecturerName()).toEqual("Test Name");
    });

    // TODO: Properly Initialize Lectuer from DataStore
    // it("should not have 'Garbage' as a field", () => {
    //     expect(lecturer.getFieldData("Garbage")).toThrow();
    // });

});
