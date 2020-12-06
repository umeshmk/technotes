- [Extensions](#extensions)
  - [ALL](#all)
  - [OTHERS](#others)
  - [GIT](#git)
  - [REMOTE](#remote)
  - [MARKDOWN](#markdown)
  - [HTML](#html)
  - [CSS](#css)
  - [Js](#js)
  - [DOCKER](#docker)
  - [PHP](#php)

# Extensions

[VSCode Marketplace](https://marketplace.visualstudio.com/vscode)
[VSCode Api for custom theme](https://code.visualstudio.com/api)

- Get Installed Extensions ids :

1. `code --list-extensions`
2. Right click extensions & copyid

```json
// .vscode/extensions.json

{
  "recommendations": [
    "VisualStudioExptTeam.vscodeintellicode",
    "ms-mssql.mssql",
    "MS-vsliveshare.vsliveshare-pack"
  ]
}
```

## ALL

- `Visual studio intellicode` (not sure if needed)
- `Github Theme` - Theme By Github (light & dark)
- `vscode icons`
- `Prettier` : Code formatter
- `Path IntelliSense` - Autocompletes filenames
- `Bracket pair colorizer`
- `Intend rainbow`
- `Better comments`

```json

// All
VisualStudioExptTeam.vscodeintellicode
GitHub.github-vscode-theme
vscode-icons-team.vscode-icons
esbenp.prettier-vscode
christian-kohler.path-intellisense
coenraads.bracket-pair-colorizer-2
oderwat.indent-rainbow
aaron-bond.better-comments
```

## OTHERS

- `Live Share` : Collaboration tool in real time
- `Code runner` - runs short snippets of code quickly.
- `DotENV` - Support for dotenv file syntax
- `REST client (api.http)` --> For Frontend - Good to learn.
- `Sass/Less/Stylus/Typescript/Javascript/Jade/Pug Compile Hero Pro` - Compile without webpack/gulp
- `Sync settings` - (Better to use workspace/.vscode)

```json
// Others
ms-vsliveshare.vsliveshare
formulahendry.code-runner
mikestead.dotenv
humao.rest-client
wscats.eno
shan.code-settings-sync
```

## GIT

- `Gitlens` - good if team
- `Git history`

```json
// Git
eamodio.gitlens
donjayamanne.githistory
```

## REMOTE

- `Remote-wsl`
- `Remote-container`
- `Remote-ssh`

## MARKDOWN

- `Markdownlint` - Linting
- `Markdown all in one` - (Delete key shortcuts. Multiple cursors not allowed instead duplicates line. Search markdown and find alt+shift+up/down. Settings are updated on gist.)
- `Markdown preview enhanced`
- `Markdown theme kit` - theme (by Microsoft)

```json
// Markdown
DavidAnson.vscode-markdownlint
yzhang.markdown-all-in-one
shd101wyy.markdown-preview-enhanced
ms-vscode.Theme-MarkdownKit
```

## HTML

- `Laravel blade spacer` - Needed for `.blade.php, .vue` too.
- `Live Server` : Localhost server for static Html pages
- For css _(choose any one)_
  - `html css support`
  - `IntelliSense for CSS class names in HTML`
- `Auto rename tag`
- Avoid. (Inbuilt now)
  - `Highlight Matching Tag`
  - `Html snippets` - (Archived)
  - `Auto close tag`
  - `Lorem ipsum` - (Use Emmet)

```json
// html
austenc.laravel-blade-spacer
ms-vscode-remote.remote-wsl
ritwickdey.liveserver
ecmel.vscode-html-css
zignd.html-css-class-completion
formulahendry.auto-rename-tag
```

## CSS

- `tailwind css intellisense` - (May conflict with extensions for html)
- Stylus in vuepress
- Avoid
  - `sass` (Inbuilt)
  - `live sass compiler` - (Avoid. Use other extension in ## All)
  - `color highlight` - (Inbuilt)

```json
// css
bradlc.vscode-tailwindcss
sysoev.language-stylus
```

## Js

- `ES Lint`
- `Npm`
- `Npm IntelliSense`
- `JavaScript (ES6) Snippets`
- `Search node_modules` - Quickly search for node modules in your project.
- `turbo console log`
- _Vue_ : `Vetur / vue 2 snippets`
- _React_ : `ES7-react-redux-graphicQl-nativeSnippets`
- `JsDoc/TsDoc` (inbuilt) - Create docs & provides typechecking (Can use npm library to generate html)
- _Debug_
  - CLIENT - `debugger-for-chrome`
  - SERVER-NODEJS - In-built [Debugger](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_debugging-your-express-application)

```json
// js
dbaeumer.vscode-eslint
eg2.vscode-npm-script
christian-kohler.npm-intellisense
xabikos.JavaScriptSnippets
jasonnutter.search-node-modules
chakrounanas.turbo-console-log
octref.vetur
dsznajder.es7-react-js-snippets
msjsdiag.debugger-for-chrome
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
