# Extensions

[VSCode Marketplace](https://marketplace.visualstudio.com/vscode)

:::tip Installed extensions
Vsocde installed extensions are also applied to workspace.
[Feature Request: Enable/disable extensions from config file](https://github.com/microsoft/vscode/issues/40239)

**Enable/Disable extensions :**
This command in vscode will enable all installed extensions for everything or just workspace.

Workspace can only recommend. But can't enable/disable automatically.

**_SOLUTION : Enable/Disble extensions manually. Use workspace as just recommendations only._**
:::

**Get Installed Extensions ids :**

1. `code --list-extensions`
2. Right click extensions & copyid

Add in **.vscode/extensions.json** or **.code-workspace**

```json
{
  "recommendations": ["VisualStudioExptTeam.vscodeintellicode"]
}
```

## All

> This extensions are needed for almost every workspace.

```json
// All
[
  "usernamehw.errorlens",
  "GitHub.github-vscode-theme",
  "vscode-icons-team.vscode-icons",
  "esbenp.prettier-vscode",
  "christian-kohler.path-intellisense",
  "coenraads.bracket-pair-colorizer-2",
  "oderwat.indent-rainbow", // not needed
  "mikestead.dotenv",
  "austenc.laravel-blade-spacer"
]
```

## OTHERS

- `wscats.eno` - `Sass/Less/Stylus/Typescript/Javascript/Jade/Pug Compile Hero Pro` - Compile without webpack/gulp

```json
// Others
[
  "ms-vsliveshare.vsliveshare",
  "formulahendry.code-runner",
  "aaron-bond.better-comments",
  "humao.rest-client",
  "wscats.eno"
]
```

## GIT

```json
// Git
["mhutchie.git-graphs", "eamodio.gitlens", "donjayamanne.githistory"]
```

## MARKDOWN

```json
// Markdown
[
  "DavidAnson.vscode-markdownlint",
  "yzhang.markdown-all-in-one",
  "shd101wyy.markdown-preview-enhanced",
  "ms-vscode.Theme-MarkdownKit"
]
```

## HTML

- For css _(choose any one)_
  - `html css support`
  - `IntelliSense for CSS class names in HTML`
- **Avoid**. (It's inbuilt now)
  - `Highlight Matching Tag`
  - `Html snippets` - (Archived)
  - `Auto close tag`
  - `Lorem ipsum` - (Use Emmet)

```json
// html
[
  "ritwickdey.liveserver",
  "ecmel.vscode-html-css",
  "zignd.html-css-class-completion",
  "formulahendry.auto-rename-tag"
]
```

## CSS

- Stylus _(in vuepress)_
- **Avoid**
  - `sass` (Inbuilt)
  - `live sass compiler` - (Avoid. Use other extension in ## All)
  - `color highlight` - (Inbuilt)

```json
// css
[
  "kamikillerto.vscode-colorize", // colors
  "joy-yu.css-snippets", // works with nested css too where emmet fails
  "ashhitch.vs-code-css-comments", // just type comment
  "stylelint.vscode-stylelint", // .stylelintrc.json - https://github.com/stylelint/stylelint-config-standard
  "csstools.postcss", // syntax highlighting for latest css
  "bradlc.vscode-tailwindcss",
  "sysoev.language-stylus"
]
```

## JS

- **Avoid**
  - `Search node_modules` - Focus on sidebar and type name.
  - `Npm` - Use tarminal.
  - `npm-intellisense` - It's inbuilt now
  - `turbo console log`
- `JsDoc/TsDoc` (inbuilt) - Create docs & provides typechecking (If needed can use npm library to generate html)
- **Typescript** - Avoid(its inbuilt) `Auto Import, TypeScript Hero, TypeScript Importer, Move TS`

```json
// js
[
  "VisualStudioExptTeam.vscodeintellicode",
  "dbaeumer.vscode-eslint",
  // "xabikos.JavaScriptSnippets", // React snippets is better.
  "msjsdiag.debugger-for-chrome"
  "octref.vetur",
  "dsznajder.es7-react-js-snippets",
]
```

## REMOTE

```json
[
  "ms-vscode-remote.remote-wsl",
  "ms-vscode-remote.remote-container",
  "ms-vscode-remote.remote-ssh"
]
```

## DOCKER

- `Docker` - (For syntax highlighting , linting, intellisense etc)

## PHP

- `php-intellisense` [Too much files to parse. Can't exclude "/vendor" folder. [issue](https://github.com/felixfbecker/php-language-server/issues/159) ]
- `php debug` - Needs _xdebug_
- `php docBlocker`
- _LARAVEL_ :
  - `laravel 5 snippets`
  - `Laravel-blade`
  - `Laravel-blade-snippets`
