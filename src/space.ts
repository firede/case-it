import { noCaseIt } from "./no"

/**
 * Convert a `string` to space case.
 */
export function spaceCaseIt(str: string): string {
  return noCaseIt(str)
    .replace(/[\W_]+(.|$)/g, (matches, match) => (match ? " " + match : ""))
    .trim()
}
