# [![case-it](res/header.png)](https://github.com/firede/case-it)

Simple case conversion for strings, ported from [`to-case`](https://github.com/ianstormtaylor/to-case).

## Features

- Official support type definitions - both TypeScript and Flowtype.
- Single package, separate modules - easy to use, tiny bundles.
- No unnecessary detection tools - Just use `str === caseIt(str)`.

## Installation

```sh
npm install case-it
```

## Usage

```js
const { camelCaseIt } = require("case-it")

// Or just import the modules you need
const { camelCaseIt } = require("case-it/camel")

camelCaseIt("THIS_IS_A_STRING") // => "thisIsAString"
camelCaseIt("this.is.a.string") // => "thisIsAString"
camelCaseIt("ThisIsAString")    // => "thisIsAString"
camelCaseIt("this is a string") // => "thisIsAString"
camelCaseIt("this_is_a_string") // => "thisIsAString"
```
