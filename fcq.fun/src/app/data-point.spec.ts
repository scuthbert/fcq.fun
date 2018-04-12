import { DataPoint } from "./data-point";

describe("DataPoint", () => {
    let point: DataPoint;

    beforeEach(() => {
      point = new DataPoint(6, "2018-01");
    });

    afterEach(() => {
      point = null;
    });

    it("should be able to get point value", () => {
        expect(point.getValue()).toEqual(6);
    });

    it("should be able to get point term", () => {
        expect(point.getTerm()).toEqual("2018-01");
    });

    it("should properly validate data", () => {
        expect(function() {
          let trash: DataPoint = new DataPoint(7, "2018-04");
        }).toThrow();

        expect(function() {
          let trash: DataPoint = new DataPoint(3, "A Fake Date");
        }).toThrow();
    });
});
