import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello fadly", function () {
    expect(sayHello("fadly")).toBe("hello fadly");
  });
});
