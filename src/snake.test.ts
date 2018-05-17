import { snakeCaseIt } from "./snake"
import { strings } from "./strings.fixture"

/**
 * Tests.
 */
describe("snake-case-it", () => {
  strings.forEach((value, key) => {
    it(`should convert ${key} case`, () => {
      expect(snakeCaseIt(strings.get(key))).toBe("this_is_a_string")
    })
  })
})
