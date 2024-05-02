import { Category, Product } from "../src/type-alias";

describe("Type Alias", function () {
  it("should support typescript", function () {
    const category: Category = {
      id: 1,
      name: "handphone",
    };
    const product: Product = {
      id: "1",
      name: "Iphone 12 pro",
      price: 25000000,
      category: category,
      description: "Apple Inc",
    };

    console.info(category);
    console.info(product);
  });
});
