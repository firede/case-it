import { dotCaseIt } from "./dot"
import { strings } from "./strings.fixture"

/**
 * Tests.
 */
describe("dot-case-it", () => {
  strings.forEach((value, key) => {
    it(`should convert ${key} case`, () => {
      expect(dotCaseIt(strings.get(key))).toBe("this.is.a.string")
    })
  })
})
