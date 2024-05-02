describe("union types", function () {
  it("should must should must support typescript", function () {
    let sample: string | number | boolean = true;
    console.info(sample);
    sample = "budi";
    console.info(sample);
    sample = 100;
    console.info(sample);
  });
  it("should support typeof operator", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }
    expect(process("eko")).toBe("EKO");
    expect(process(10)).toBe(12);
    expect(process(true)).toBe(false);
  });
});
