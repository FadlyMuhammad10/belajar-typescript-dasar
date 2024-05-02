describe("Function", function () {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `hello ${name}`;
    }
    expect(sayHello("fadly")).toBe("hello fadly");

    function printHello(name: string): void {
      // jika tidak ingin return value
      console.info(`hello ${name}`);
    }

    printHello("Eko");
  });
  it("should support default value", function () {
    function sayHello(name: string = "Guest"): string {
      return `hello ${name}`;
    }
    expect(sayHello()).toBe("hello Guest");
  });
  it("should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
  it("should support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `hello ${firstName} ${lastName}`;
      } else {
        return `hello ${firstName}`;
      }
    }
    expect(sayHello("fadly")).toBe("hello fadly");
    expect(sayHello("fadly", "ujer")).toBe("hello fadly ujer");
  });
  it("should support function overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "number") {
        return value;
      } else if (typeof value === "string") {
        return value;
      }
    }
    expect(callMe(100)).toBe(100);
    expect(callMe("fadly")).toBe("fadly");
  });
  it("should function as parameter", () => {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }
    function toUpper(name: string): string {
      return name.toUpperCase();
    }
    expect(sayHello("Fadly", toUpper)).toBe("Hello FADLY");
    // or
    expect(
      sayHello("Fadly", (name: string): string => name.toUpperCase())
    ).toBe("Hello FADLY");
  });
});
