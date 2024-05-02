import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", () => {
  it("should must support typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko Hp",
      nib: "122344444",
      npwp: "1341321414214",
    };

    console.info(seller);
  });
  it("should must support function interface", () => {
    interface addFunction {
      (value1: number, value2: number): number;
    }

    const add: addFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });
  it("should must support indexable interface", () => {
    interface stringArray {
      [index: number]: string;
    }
    const hobbies: stringArray = ["membaca", "menulis", "berenang"];

    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);
    console.info(hobbies[2]);
  });
  it("should must support indexable interface non number index", () => {
    interface stringDictionary {
      [key: string]: string;
    }
    const dictionary: stringDictionary = {
      name: "Tenz",
      address: "Nganjuk",
    };

    console.info(dictionary["name"]);
    console.info(dictionary["address"]);
  });
  it("should support extends interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Tono",
      division: "IT",
    };
    console.info(employee);

    const manager: Manager = {
      id: "1",
      name: "Tora",
      division: "IT",
      numberOfEmployees: 10,
    };
    console.info(manager);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "Budi",
      sayHello: function (name: string): string {
        return `hello ${name}, My name is ${this.name}`;
      },
    };
    console.info(person.sayHello("Eko"));
  });
  it("should support intersection types", () => {
    interface hasName {
      name: string;
    }
    interface hasId {
      id: string;
    }
    type Domain = hasId & hasName;

    const domain: Domain = {
      id: "1",
      name: "Budi",
    };

    console.info(domain);
  });
  it("should support assertions types", () => {
    const person: any = {
      name: "budiana",
      age: 30,
    };
    const person2: Person = person as Person;

    console.info(person2);
  });
});
