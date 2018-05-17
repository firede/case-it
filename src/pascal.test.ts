import { pascalCaseIt } from "./pascal"
import { strings } from "./strings.fixture"

/**
 * Tests.
 */
describe("pascal-case-it", () => {
  strings.forEach((value, key) => {
    it(`should convert ${key} case`, () => {
      expect(pascalCaseIt(strings.get(key))).toBe("ThisIsAString")
    })
  })
})
