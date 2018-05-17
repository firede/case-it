import { spaceCaseIt } from "./space"

/**
 * Convert a `string` to kebab case.
 */
export function kebabCaseIt(str: string): string {
  return spaceCaseIt(str).replace(/\s/g, "-")
}
