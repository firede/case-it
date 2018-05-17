import { spaceCaseIt } from "./space"

/**
 * Cases.
 */
const strings = new Map([
  ["camel", "thisIsAString"],
  ["constant", "THIS_IS_A_STRING"],
  ["dot", "this.is.a.string"],
  ["junk", "-this__is$%a-string..."],
  ["pascal", "ThisIsAString"],
  ["sentence", "This is a string."],
  ["snake", "this_is_a_string"],
  ["space", "this is a string"],
  ["title", "This Is a String"],
])

/**
 * Tests.
 */
describe("space-case-it", () => {
  strings.forEach((value, key) => {
    it(`should convert ${key} case`, () => {
      expect(spaceCaseIt(strings.get(key))).toBe("this is a string")
    })
  })
})
