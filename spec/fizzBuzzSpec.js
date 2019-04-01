describe("fizzBuzz", function() {

  it("returns fizz when the number is divisible by 3", function() {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });

  it("returns buzz when the number is divisible by 5", function() {
    expect(fizzBuzz(10)).toEqual("Buzz");
  });

  it("return fizzBuzz when the number is both divisible by 3 and 5", function() {
    expect(fizzBuzz(15)).toEqual("fizzBuzz");
  });

});
