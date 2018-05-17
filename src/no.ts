/**
 * Test whether a string is camel-case.
 */
const hasSpace = /\s/
const hasSeparator = /(_|-|\.|:)/
const hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 */
export function noCaseIt(str: string): string {
  if (hasSpace.test(str)) {
    return str.toLowerCase()
  }
  if (hasSeparator.test(str)) {
    return (unseparate(str) || str).toLowerCase()
  }
  if (hasCamel.test(str)) {
    return uncamelize(str).toLowerCase()
  }
  return str.toLowerCase()
}

/**
 * Separator splitter.
 */
const separatorSplitter = /[\W_]+(.|$)/g

/**
 * Un-separate a `string`.
 */
function unseparate(str: string): string {
  return str.replace(separatorSplitter, (m, next) => (next ? " " + next : ""))
}

/**
 * Camelcase splitter.
 */
const camelSplitter = /(.)([A-Z]+)/g

/**
 * Un-camelcase a `string`.
 */
function uncamelize(str: string): string {
  return str.replace(
    camelSplitter,
    (m, previous, uppers) =>
      previous +
      " " +
      uppers
        .toLowerCase()
        .split("")
        .join(" ")
  )
}
