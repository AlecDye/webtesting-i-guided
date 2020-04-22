const { add } = require("./calculator.js");

// test away!
// This function acts as a directory for test cases
describe("calculator.js", () => {
  // Note: referred to as a "test case"
  it("should run tests without errors", () => {
    // Arrange -> Setup environment
    // Act -> Execute the code we're testing
    // Assert -> Check our assumptions
    expect(true).toBe(true);
  });

  describe(".add()", function () {
    it("should add two numbers", function () {
      //   const sum = add(2, 2)
      // .toBe() is known as a "matcher" in the docs
      expect(add(2, 2)).toBe(4);
      expect(add(0, 0)).toBe(0);
      expect(add(1, 2)).toBe(3);
      expect(add(2, 0)).toBe(2);
    });
    it("should return 0 when called with no arguments", function () {
      expect(add()).toBe(0);
    });
    it("should return the nubmer when called with a single number", function () {
      expect(add(2)).toBe(2);
      expect(add(0)).toBe(0);
      expect(add(-5)).toBe(-5);
    });
    it("should sum a list of numbers separated by coma", function () {
      expect(add(1, 2, -5)).toBe(-2);
      expect(add(0, 2, 3)).toBe(5);
    });
    it("should support an array of numbers", function () {
      expect(add([1, 2, -5])).toBe(-2);
      expect(add([0, 2, 3])).toBe(5);
    });
  });
});

//! Note: Try to make the tests fail BEFORE making them pass
// jest runs files ending in ".test.js" or ".spec.js"
// jest run .js files contained inside any __tests__ folder
// low hanging fruit first (happy path -> if the world is perfect, what does it do?)
// you'll most likely have to make it up and make it happen

// As you complete tests, new test conditions will require refactoring the code
// Previously completed tests may break after refactoring (called "regression")
// Refactor to pass current test without failing previous tests
