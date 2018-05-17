import { spaceCaseIt } from "./space"

/**
 * Convert a `string` to pascal case.
 */
export function pascalCaseIt(str: string): string {
  return spaceCaseIt(str).replace(/(?:^|\s)(\w)/g, (matches, letter) => letter.toUpperCase())
}
