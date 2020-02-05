import { Exercise2Component } from "./exercise2.component";

describe("Simple Calculator", () => {
  let comp: Exercise2Component;

  beforeEach(() => {
    comp = new Exercise2Component();
  });

  it("Is it initialized?", () => {
    //expect(comp).toBeInstanceOf(Exercise2Component);
    expect(comp.total).toBeDefined();
    expect(comp.total).toBe(0);
    expect(comp.currentVal).toBeDefined();
    expect(comp.currentVal).toBe(0);
  });

  it("Sum two numbers", () => {
    comp.add(5);
    expect(comp.total).toBe(5);
    comp.sum();
    comp.add(15);
    expect(comp.total).toBe(20);
  });

  it("Reset total", () => {
    comp.reset();
    expect(comp.total).toBe(0);
  });

  it("Substract two numbers", () => {
    comp.add(10);
    expect(comp.total).toBe(10);
    comp.subs();
    comp.add(6);
    expect(comp.total).toBe(4);
  });

  it("Multiply three numbers", () => {
    comp.reset();
    comp.add(3);
    expect(comp.total).toBe(3);
    comp.mul();
    comp.add(4);
    expect(comp.total).toBe(12);
    comp.mul();
    comp.add(2);
    expect(comp.total).toBe(24);
  });

  it("Divide two numbers", () => {
    comp.reset();
    comp.add(10);
    expect(comp.total).toBe(10);
    comp.div();
    comp.add(5);
    expect(comp.total).toBe(2);
  });
});
