import { kebabCaseIt } from "./kebab"
import { strings } from "./strings.fixture"

/**
 * Tests.
 */
describe("kebab-case-it", () => {
  strings.forEach((value, key) => {
    it(`should convert ${key} case`, () => {
      expect(kebabCaseIt(strings.get(key))).toBe("this-is-a-string")
    })
  })
})
