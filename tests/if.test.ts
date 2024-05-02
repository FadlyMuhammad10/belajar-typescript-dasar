describe("If statement", () => {
  it("should support in typescript", () => {
    const examValue = 90;
    if (examValue > 80) {
      console.info("gold");
    } else if (examValue > 60) {
      console.info("standar");
    } else {
      console.info("Lol");
    }
  });
  it("should support ternary function", () => {
    const value = 90;
    const say = value >= 80 ? "GG" : "NT";
    console.info(say);
  });
  it("should support switch statement", () => {
    function sayHello(name: string): string {
      switch (name) {
        case "Eko":
          return "Hallo Eko";
        case "Budi":
          return "Hallo Budi";
        default:
          return "Hallo";
      }
    }
    console.info(sayHello("Eko"));
    console.info(sayHello("Budi"));
    console.info(sayHello("Joko"));
  });
});
