# User Guide

## Search

- Can use regular expressions
- Search conditions
  - `example` - search in this file
  - `./example` - search in this folder
  - `!example` - skip file or folder
  - `example` - search in this
  - `example, example2` - multiple conditions
  - `*` - match one or more character
  - `?` - match one character
  - `**` - match anything
  - `{**/*.html, **/*.txt }` - group conditions
  - `example.[0-9]` - matches example.0, example.1, etc
- `node_modules` - excluded by default

## Refactoring

- Code Actions (`lightbulb`) = Quickfixes & Refactoring
- Issues - Highlighted with green squiggles
- Quickfix & Refactor cmd - `ctrl+.`
- Refactor
  - Restructure code with same output & faster runtime.

## Debugger - (`launch.json`)

1. Default by vscode
2. chrome debugger extension for vscode
3. chrome browser itself

_Modes_

1. Launch - How to config debugger with app
2. Attach - How to attach debugger with already running app

_Points_

1. Breakpoint
2. Logpoint

## Emmet

- Inbuilt & default in `html, jsx, css, scss, sass`
