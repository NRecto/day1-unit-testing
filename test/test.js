const { factorial, isIsogram } = require("../src/util");
const { expect, assert } = require("chai");

describe("test_fun_factorials", () => {
  it("test_fun_factorial_5!_is_120", () => {
    const product = factorial(5);
    expect(product).to.equal(120);
  });

  it("test_fun_factorial_1!_is_1", () => {
    const product = factorial(1);
    assert.equal(product, 1);
  });
});

describe("test_fun_isIsogram", () => {
  it("test_fun_isIsogram_world_is_true", () => {
    const word = isIsogram("world");
    assert.equal(word, true, 'word and true should be equal')
  });

  it("test_fun_isIsogram_apple_is_false", () => {
    const word = isIsogram("apple");
    assert.strictEqual(word, false)
  });
});
