import { spaceCaseIt } from "./space"

/**
 * Convert a `string` to dot case.
 */
export function dotCaseIt(str: string): string {
  return spaceCaseIt(str).replace(/\s/g, ".")
}
