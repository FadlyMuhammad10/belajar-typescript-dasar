describe("Data Type array", function () {
  it("array javascript", function () {
    let name: string[] = ["arif", "toni"];
    let balance: number[] = [1, 2, 3];

    console.info(name);
    console.info(balance);
  });

  it("ReadOnly array", function () {
    let hobbies: ReadonlyArray<string> = ["membaca", "menulis"];

    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);
  });
  it("tupple array", function () {
    let hobbies: readonly [string, string, number] = ["membaca", "menulis", 1];

    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);
    console.info(hobbies[2]);
  });
});
