describe("Object", function () {
  it("should support typescript", function () {
    const person: { id: string; name: string; hobbies?: string } = {
      id: "1",
      name: "Fadly",
    };

    console.info(person);

    person.id = "2";
    person.name = "Patrio";
    person.hobbies = "Futsal";

    console.info(person);
  });
});
