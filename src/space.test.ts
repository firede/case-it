import { spaceCaseIt } from "./space"
import { strings } from "./strings.fixture"

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
