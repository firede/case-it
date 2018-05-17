import { constantCaseIt } from "./constant"
import { strings } from "./strings.fixture"

/**
 * Tests.
 */
describe("constant-case-it", () => {
  strings.forEach((value, key) => {
    it(`should convert ${key} case`, () => {
      expect(constantCaseIt(strings.get(key))).toBe("THIS_IS_A_STRING")
    })
  })
})
