import { spaceCaseIt } from "./space"

/**
 * Convert a `string` to snake case.
 */
export function snakeCaseIt(str: string): string {
  return spaceCaseIt(str).replace(/\s/g, "_")
}
