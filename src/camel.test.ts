import { camelCaseIt } from "./camel"
import { strings } from "./strings.fixture"

/**
 * Tests.
 */
describe("camel-case-it", () => {
  strings.forEach((value, key) => {
    it(`should convert ${key} case`, () => {
      expect(camelCaseIt(strings.get(key))).toBe("thisIsAString")
    })
  })
})
