import { FirstLetterUpperCasePipe } from "./first-letter-upper-case.pipe";

describe("First Letter Uppercase Pipe - ", () => {
  let comp: FirstLetterUpperCasePipe;

  beforeEach(() => {
    comp = new FirstLetterUpperCasePipe();
  });

  it("hello world -> Hello World", () => {
    const title = "hello world";
    expect(comp.transform(title)).toMatch(/Hello World/i);
  });

});
