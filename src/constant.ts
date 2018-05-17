import { snakeCaseIt } from "./snake"

/**
 * Convert a `string` to constant case.
 */
export function constantCaseIt(str: string): string {
  return snakeCaseIt(str).toUpperCase()
}
