# JavaScript and TypeScript Snippets

This extension contains keyword snippets and micro patterns for JavaScript, TypeScript and JSON.

## What's new in JavaScript and TypeScript Snippets 0.20.0

- Added brace scope for cases `case '': { ... break; }`.
- Added type import `import type { ... } from '...'`.

## Index

1. [Introduction](#introduction)
1. [Shortcut rules for JavaScript](#shortcut-rules-for-javascript)
1. [Shortcut rules for TypeScript](#shortcut-rules-for-typescript)
1. [Recommended Settings](#recommended-settings)
1. [Recommended Keyboard Shortcuts](#recommended-keyboard-shortcuts)
1. [Recommended Extensions](#recommended-extensions)

## Introduction

The idea of those snippets is to create a workflow with micro patterns. Write one to five characters and you get the keyword or pattern.

Some prefixes are twice, because the rules are matching different patterns like `s_` -> `set NAME () { ... }` and `static NAME () { ... }`. Then you have to pick the right one.

__The following prefixes are just examples to explain the rules.__ To see the complete list, please visit [SNIPPETS.md](https://github.com/L13/vscode-js-snippets/blob/master/SNIPPETS.md). If a keyword or pattern might be missing, please open an issue on [Github](https://github.com/L13/vscode-js-snippets/issues) and make a suggestion.

## Shortcut rules for JavaScript

### 1. The first letter of a word or the upper case in camel or pascal case defines the prefix.

| Prefix  | Snippet |
| -------:| ------- |
| `a`     | <b>a</b>wait |
| `f`     | <b>f</b>alse |
| `t`     | <b>t</b>rue |

### 2. An underscore "\_" defines a brace scope.

| Prefix  | Snippet |
| -------:| ------- |
| `_`     | <i>NAME</i> () <b>{ ... }</b> |
| `i_`    | <b>i</b>f (...) <b>{ ... }</b> |
| `f_`    | <b>f</b>unction <i>NAME</i> (...) <b>{ ... }</b> |
| `af_`   | <b>a</b>sync <b>f</b>unction <i>NAME</i> (...) <b>{ ... }</b> |
| `d_w`   | <b>d</b>o <b>{ ... }</b> <b>w</b>hile (...); |

### 3. A dollar sign "$" at the end defines a function call.

| Prefix  | Snippet |
| -------:| ------- |
| `cl$`   | <b>c</b>onsole.<b>l</b>og<b>()</b>; |
| `Jp$`   | <b>J</b>SON.<b>p</b>arse<b>()</b>; |

### 4. The number "1" at the end defines a one line snippet.

| Prefix  | Snippet |
| -------:| ------- |
| `i1`    | <b>i</b>f (<i>CONDITION</i>) ...; |
| `c1`    | <b>c</b>onst <i>NAME</i> = <i>VALUE</i>; |
| `l1`    | <b>l</b>et <i>NAME</i> = <i>VALUE</i>; |

### 5. A dollar sign "$" at the start defines an arrow function.

| Prefix  | Snippet |
| -------:| ------- |
| `$_`    | <b>()</b> => <b>{ ... }</b> |
| `$1`    | <b>()</b> => |

## Shortcut rules for TypeScript

### 1. All JavaScript snippets and prefix rules described above are working in TypeScript, too.

| Prefix  | Snippet |
| -------:| ------- |
| `n_`    | <b>n</b>amespace <i>NAME</i> <b>{ ... }</b> |
| `i_`    | <b>i</b>nterface <i>NAME</i> <b>{ ... }</b> |
| `ie_`   | <b>i</b>nterface <i>NAME</i> <b>e</b>xtends <i>NAME</i> <b>{ ... }</b> |
| `t1`    | <b>t</b>ype <i>NAME</i> = <i>TYPE</i>; |
| `t_`    | <b>t</b>ype <i>NAME</i> = <b>{ ... };</b> |

### 2. Variable declarations, properties and methods are available with primitive types and accessors, too.

| Prefix  | Snippet |
| -------:| ------- |
| `cb1`   | <b>c</b>onst <i>NAME</i>:<b>b</b>oolean = false; |
| `pb1`   | <b>p</b>ublic <i>NAME</i>:<b>b</b>oolean = false; |
| `pgn_`  | <b>p</b>ublic <b>g</b>et <i>NAME</i> () :<b>n</b>umber <b>{ ... }</b> |
| `pso_`  | <b>p</b>ublic <b>s</b>tatic <i>NAME</i> () :<b>o</b>bject <b>{ ... }</b> |

### 3. An underscore "\_" at the start defines a private member.

| Prefix  | Snippet |
| -------:| ------- |
| `__`   | <b>p</b>rivate <i>NAME</i> () <b>{ ... }</b> |
| `_a1`   | <b>p</b>rivate <i>NAME</i>:<b>a</b>ny = null; |
| `_b_`   | <b>p</b>rivate <i>NAME</i> () :<b>b</b>oolean <b>{ ... }</b>; |

## Recommended Settings

It is recommended to set the snippet suggestions to top.

```json
"editor.snippetSuggestions": "top",
```

It is also recommended to disable the built-in JavaScript Snippets with the following extension.

[Built-In Extensions](https://marketplace.visualstudio.com/items?itemName=L13RARY.l13-built-in-extensions)

## Recommended Keyboard Shortcuts

Please have the following keyboard shortcuts always in mind, because these are fundamental to get the most out of it. Every tab stop is used only if necessary, because it prevents VS Code to open the IntelliSense menu automatically. So sometimes `DownArrow` or `Cmd/Ctrl + Enter` can have the same effect.

### macOS

* `Tab` - Jump to the next tab stop of the snippet.
* `DownArrow` - Move the caret down one line.
* `Cmd + Enter` - Insert line below, even if the caret is in the middle of a line.
* `Cmd + Shift + Enter` - Insert line above, even if the caret is in the middle of a line.

### Windows / Linux

* `Tab` - Jump to the next tab stop of the snippet.
* `DownArrow` - Move the caret down one line.
* `Ctrl + Enter` - Insert line below, even if the caret is in the middle of a line.
* `Ctrl + Shift + Enter` - Insert line above, even if the caret is in the middle of a line.

## Recommended Extensions

- [Swap Keywords](https://marketplace.visualstudio.com/items?itemName=L13RARY.l13-swap)
- [Built-In Extensions](https://marketplace.visualstudio.com/items?itemName=L13RARY.l13-built-in-extensions)
- [Extension Pack](https://marketplace.visualstudio.com/items?itemName=L13RARY.l13-extension-pack)