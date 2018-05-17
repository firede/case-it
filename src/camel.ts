import { spaceCaseIt } from "./space"

/**
 * Convert a `string` to camel case.
 */
export function camelCaseIt(str: string): string {
  return spaceCaseIt(str).replace(/\s(\w)/g, (matches, letter) => letter.toUpperCase())
}
