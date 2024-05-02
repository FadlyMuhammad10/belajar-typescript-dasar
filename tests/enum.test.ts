import { Customer, CustomerType } from "../src/enum";

describe("Enum", function () {
  it("should support typescript", function () {
    const customer: Customer = {
      id: 1,
      name: "fadly",
      type: CustomerType.GOLD,
    };

    console.info(customer);
  });
});
