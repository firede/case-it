const { readdirSync, writeFileSync, existsSync } = require("fs")
const { resolve, basename } = require("path")
const { compiler, beautify } = require("flowgen").default

// Functions

function genFlowDef(name) {
  const flowDef = compiler.compileDefinitionFile(resolve(distPath, name + ".d.ts"))
  return beautify(flowDef)
}

function writeFlowDefFile(name, content) {
  const filepath = resolve(distPath, name + ".js.flow")
  writeFileSync(filepath, "/* @flow strict */\n\n" + content)
}

// Main

const isDefinitionFile = /\.d\.ts$/
const flowDefs = []
const distPath = resolve(__dirname, "../dist")

if (!existsSync(distPath)) {
  console.error("`yarn compile` first please.")
  process.exit(1)
}

const defNames = readdirSync(distPath)
  .filter(name => isDefinitionFile.test(name))
  .map(name => basename(name, ".d.ts"))
  .filter(name => name !== "index")

// write flow defs
defNames.forEach(name => {
  const def = genFlowDef(name)

  if (def !== "") {
    flowDefs.push(def)
    writeFlowDefFile(name, def)
  }
})

const indexDef = beautify(flowDefs.join("\n\n"))
writeFlowDefFile("index", indexDef)
