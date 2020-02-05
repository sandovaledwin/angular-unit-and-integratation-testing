import { Exercise1Component } from "./exercise1.component";

describe("Hello World", () => {
  let comp: Exercise1Component;

  beforeEach(() => {
    comp = new Exercise1Component();
  });

  it("Is default title there?", () => {
    expect(comp.title).toMatch(/Hello World - Testing/i);
  });

  it("After call changeTitle, Do we have a new title?", () => {
    comp.changeTitle();
    expect(comp.title).toContain("Hello dev team!");
  });
});
