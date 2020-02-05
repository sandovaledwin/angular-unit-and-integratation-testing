import { Exercise3Component } from "./exercise3.component";

describe("Form - Custom Validation", () => {
  let comp: Exercise3Component;

  beforeAll(() => {
    comp = new Exercise3Component();
  });

  it("Is it initialized?", () => {});

  it("The name field accepts only [a-zA-Z] and empty spaces", () => {});

  it("The name field should contain min 5 and max 20 chars", () => {});

  it("The last name field accepts only [a-zA-Z] and empty spaces", () => {});

  it("The last name field should contain min 5 and max 30 chars", () => {});

  it("The address field accepts only [a-zA-Z0-9._-#] and empty spaces", () => {});

  it("The last name field should contain min 10 and max 100 chars", () => {});

  it("The city field should contain only the next city: [Guadalajara, Queretaro, Monterrey]", () => {});

  it("The state field should contain only the next city: [Jalisco, Queretaro, Nuevo León]", () => {});

  it("The zip code field accepts only [0-9] max and min 5 chars", () => {});

  it("All the field in the form must be filled", () => {});

});
