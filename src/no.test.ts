import { noCaseIt } from "./no"

describe("no-case-it", () => {
  it("space: shouldnt touch space case", () => {
    expect(noCaseIt("this is a string")).toBe("this is a string")
  })

  it("camel: should remove camel case", () => {
    expect(noCaseIt("thisIsAString")).toBe("this is a string")
  })

  it("constant: should remove constant case", () => {
    expect(noCaseIt("THIS_IS_A_STRING")).toBe("this is a string")
  })

  it("upper: should not split upper case", () => {
    expect(noCaseIt("UPPERCASE")).toBe("uppercase")
  })

  it("lower: should not split lower case", () => {
    expect(noCaseIt("lowercase")).toBe("lowercase")
  })

  it("pascal: should remove pascal case", () => {
    expect(noCaseIt("ThisIsAString")).toBe("this is a string")
  })

  it("pascal: should handle single letter first words", () => {
    expect(noCaseIt("AStringIsThis")).toBe("a string is this")
  })

  it("pascal: should handle single letter first words with two words", () => {
    expect(noCaseIt("AString")).toBe("a string")
  })

  it("kebab: should remove slug case", () => {
    expect(noCaseIt("this-is-a-string")).toBe("this is a string")
  })

  it("snake: should remove snake case", () => {
    expect(noCaseIt("this_is_a_string")).toBe("this is a string")
  })

  it("junk: should remove casing but preserve characters", () => {
    expect(noCaseIt("rAnDom -junk$__loL!")).toBe("random -junk$__lol!")
  })

  it("junk: should remove casing but preserve characters even without white space", () => {
    expect(noCaseIt("$50,000,000")).toBe("$50,000,000")
  })

  it("non-latin characters: should return identical string", () => {
    expect(noCaseIt("你好")).toBe("你好")
  })
})
