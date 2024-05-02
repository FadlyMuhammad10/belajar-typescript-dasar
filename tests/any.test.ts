describe("Any", function () {
  it("should must support typescript", function () {
    let person: any = {
      age: 10,
      name: "fadly",
    };
    person.address = "jogja";
    person.hobbies = "bola";

    console.info(person);
  });
});
