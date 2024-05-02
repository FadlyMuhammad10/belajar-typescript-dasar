describe("optional parameter", function () {
  it("should support null & undifined", function () {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`hello ${name}`);
      } else {
        console.info(`hello`);
      }
    }

    sayHello("fadly");

    const name: string | undefined = undefined;

    sayHello(name);
    sayHello(null);
  });
});
