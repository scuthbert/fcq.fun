import { Course } from "./course";

describe("Course", () => {
    let course: Course;

    beforeEach(() => {
      course = new Course("CSCI4448");
    });

    afterEach(() => {
      course = null;
    });

    it("should be able to get course code", () => {
        expect(course.getCourseCode()).toEqual("CSCI4448");
    });

    it("should throw on invalid course code", () => {
        expect(function() {
          let trash: Course = new Course("Garbage");
        }).toThrow();
    });

    // TODO: Properly Initialize Course from DataStore
    // it("should not have 'Garbage' as a field", () => {
    //     expect(course.getFieldData("Garbage")).toThrow();
    // });

});
