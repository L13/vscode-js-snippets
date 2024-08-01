# Change Log
All notable changes to the "JavaScript and TypeScript Snippets" extension will be documented in this file.

## [0.22.1] - 2024-04-23

### Fixed

- Fixed description in README.md.

## [0.22.0] - 2024-03-31

### Added

- Added `using` and `await using`.
- Added `Symbol.dispose` and `Symbol.asyncDispose`.
- Added `${clipboard}` and `${selection}` for keyboard shortcut usage.

### Changed

- Eliminated duplicated prefixes with value selection.

### Removed

- Removed primitive types for functions, getters, setters, methods and types.
- Removed `typeof value !== ...`.

## [0.21.0] - 2023-04-09

### Added

- Added `l13Snippets.javascript.useFunctionBlockPadding` to enable or disable line padding in function blocks.
- Added `l13Snippets.typescript.useFunctionBlockPadding` to enable or disable line padding in function blocks.
- Added more snippets for TypeScript types like `declare`, `readonly`, `{ [K in T]: ... }` and `extends`.

### Changed

- Changed type formatting in TypeScript snippets.

## [0.20.0] - 2021-05-02

### Added

- Added brace scope for cases `case '': { ... break; }`.
- Added type import `import type { ... } from '...'`.

## [0.19.0] - 2021-04-04

### Added

- Added to JSON `"key": false`, `"key": 0`, `"key": ""` and `"key": [ ... ]`.
- Added `super.`.

### Changed

- Changed `return ` to `return;`.
- Removed `;` from `new Promise( ... )`.

### Removed

- Removed `class NAME { ... }` and `class NAME extends PARENT { ... }`.

## [0.18.0] - 2020-08-02

### Added

- Added `Array.isArray()`.
- Added `Object.assign()`, `Object.create()`, `Object.entries()`, `Object.keys()` and `Object.values()`.
- Added `Symbol()`, `Symbol.for()` and `Symbol.keyFor()`.
- Added primitive types to `toJSON`.

### Changed

- Added tab stop for loops and conditions to one line snippets.

### Fixed

- Fixed async typed functions.

## [0.17.0] - 2020-07-05

### Added

- Added info for [Built-In Extensions](https://marketplace.visualstudio.com/items?itemName=L13RARY.l13-built-in-extensions) to disable built-in JavaScript and TypeScript snippets.
- Added `Promis.all()`, `Promis.resolve()` and `Promis.reject()`.
- Added `new NAME()`, `new Array()`, `new Date()`and `new RegExp()`.
- Added `get NAME () {} + set NAME () {}` including simple types.
- Added `static NAME () {}` and `static async NAME () {}`.
- Added `break;`

### Changed

- Changed display name from `L13 JS Snippets` to `JavaScript and TypeScript Snippets`.

### Fixed

- Fixed `export * from ...` snippets.

### Removed

- Removed keyword `static`.
- Removed patterns with `:never`, `:object`, `:any`, etc. in TypeScript.
- Removed patterns with `new Array()`, `new Date()`and `new RegExp()`, etc.

## [0.16.0] - 2020-06-07

### Added

- Added `for await ... of` loop.
- Added keyword `yield`.
- Added `return { ... };`.
- Added `const|let|var { ... } = null;`
- Added more console functions.

### Changed

- Simplified prefix for type equality.

### Removed

- Removed default switch statement.

## [0.15.0] - 2019-10-20

### Added

- Added support for JSON and JSONC.
- Added support for JavaScript React and TypeScript React.

## [0.14.0] - 2019-09-22

### Added

- Added "else " snippet.
- Added "switch () { case: break; }" snippet.

### Fixed

- Fixed "_" snippet in README.
- Fixed enum snippet.

## [0.13.1] - 2019-08-25

### Fixed

- Fixed link in README

## [0.13.0] - 2019-08-25

- Initial release