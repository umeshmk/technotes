# Language

## Javascript

- Vscode use typescript (`typings` files) for intellisense.
- Settings file - `jsconfig.json` / `tsconfig.json`

For better intellisense

- Use `jsconfig.json` (to exclude folders for intellisense)
- Avoid `JSDocs`

### Automatic type acquisition

- Most js libs comes with typings. If not then vscode will download from community maintained repo for libs in `package.json`
- https://www.typescriptlang.org/dt/search?search=

Example of `jsconfig.json` / `tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6"
  },
  "exclude": ["node_modules"] OR USE "include": ["src/**/*"]
}
```

### JSX

supported

### Organise imports

- Right click anywhere + SourceAction > Organise imports
- Automate

```json
"editor.codeActionsOnSave": {
    "source.organizeImports": true
}
```

### References codelens

Disabled by default

### Debugging

Good inbuilt support
Clientside - chrome, firefox vscode extensions
serverside - Nodejs(inbuilt)

---

## Json

`jsonc` - Language mode for json with comments (not file extension)
schema

- https://json-schema.org/
- https://www.schemastore.org/json/
- Default - JSON Schema Draft 7

```json
"json.schemas": [
    {
        "fileMatch": [
            "/.babelrc"
        ],
        "url": "https://json.schemastore.org/babelrc"
    }
]
```

## Html

Default intellisense needed ?

```json
"html.suggest.angular1": true,
"html.suggest.ionic": true,
"html.suggest.html5": true
```

Define a folding region:
`<!-- #region -->` and `<!-- endregion -->`

## Markdown

Create your own css style for Markdown preview.
`"markdown.styles": ["Style.css"]`
