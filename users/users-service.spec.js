const { validate } = require("./users-service");

describe("user-service.js", function () {
  describe(".validate()", function () {
    it("should return false if the user is missing username or password", function () {
      expect(validate({ username: "sam" })).toBe(false);
      expect(validate({ username: "sam" })).toBe(false);
    });
    it("should return true when the user has a username and a password", function () {
      expect(validate({ username: "sam", password: "pass" })).toBe(true);
    });
  });
});
