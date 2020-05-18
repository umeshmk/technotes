https://code.visualstudio.com/docs

# BACKUP

- Gist : https://gist.github.com/umeshmk/bd1aba52fc5a47b02701ce8a0b4cce92
- Use extension `Settings Sync`
- Needs
  - To upload - **github token** (permission to create gist only)
  - To download - **gist id** (token needed only if _uploading_ or _private_ gist)

# BASICS

- **Launch** --> `code /path/project`
- [**Marketplace**](https://marketplace.visualstudio.com/vscode)

> **Fonts**

- Default : `'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'`
- Others :
  - [ Source Code Pro ](https://github.com/adobe-fonts/source-code-pro/)
    - [Install](https://askubuntu.com/a/193073/687186)
  - [ Hack ](https://github.com/source-foundry/Hack)
  - [ Fira Code ](https://github.com/tonsky/FiraCode)
    - **Install** --> `sudo apt install fonts-firacode fonts-hack-ttf`
- If using **Fira Code**
  ```json
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  ```

> **Themes**

- **Relaxing your eyes**
  - Look away frequently
  - Brightness must be minimum
  - 3 Views(must match) = Monitor + Environment + Browser
  - _Light Theme_ --> **Day** --> _Good memory_
    - Winter is Coming / Slack / Quietlight / Kary pro colors / Spacemacs, Verdandi
  - _Dark Theme_ --> **Night** --> _Good syntax highlighting_
    - Default Dark+ / Dracula / One dark Pro
- **Stackoverflow** [link](https://ux.stackexchange.com/questions/53264/dark-or-white-color-theme-is-better-for-the-eyes)

- **Practice**

  - Interactive Playground (Help --> Welcome-page)

- Create user snippets if required

# KEYS

- [Keymaps](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)
- See `shortcut-keys.md` in this folder.

# WORKSPACE

- Workspaces - `ctrl + R`
- Multi root folder - `.code-workspace`
  - Folders
  - Settings
  - Extensions
- _Global_ workspace settings override _User_ settings

  ```json
  {
    "folders": [
      {
        "path": "vscode"
      },
      {
        "path": "vscode-docs"
      }
    ],
    "extensions": {
      "recommendations": [
        "eg2.tslint",
        "dbaeumer.vscode-eslint",
        "msjsdiag.debugger-for-chrome"
      ]
    }
  }
  ```

# LANGUAGES

> css

- Use `.vscode/tasks.json`
  - `.scss` ---> `.css`
  - Needs - `-g node-sass`
  - To automate needs - `-g gulp` , `gulp` , `gulp-sass`

> Js

- **Refactoring**
  - select text and click on **yellow bulb** or `ctrl + .`
- **CodeLens**
  - `"javascript.referencesCodeLens.enabled"` to true.
- **Intellisense**

  ```json
  <!-- jsconfig.json -->
  {
     "compilerOptions": {
        "target":"es6"
     },
     "exclude":[
        "node_modules",
        "assets"
     ]
  }
  ```

> Vuejs

- Create vue app
  ```bash
     npm i -g @vue/cli
     vue create my-app
     npm run serve
  ```

> Php

- `PHP linter (php -l)` is used as a default linter
- In **settings json**

  ```json
     "php.executablePath": "/home/umesh/php7_for_vscode",
     "php.suggest.basic": false
  ```

> Markdown

- `"markdown.styles": ["Style.css"]` (can be url)
- `markdown --> html` use node library like `markdown-it`

# EXTENSIONS

- **ALL**

  <!-- - `Visual studio intellicode` (not required) -->

  - `Live Share` : Collaboration tool in real time
  - `Live Server` : Localhost server for static Html pages
  - `Prettier` : Code formatter
  - `Code runner` - runs short snippets of code quickly.
  - `Laravel blade spacer`
  - `Bracket colorizer`
  - `vscode icons` :
  - `Highlight Matching Tag`
  - `Lorem ipsum`
    <!-- - `Intend rainbow`  : -->

- **MARKDOWN** :

  - `Markdownlint` - Linting
  - `Markdown all in one` - (Delete key shortcuts. Multiple cursors not allowed instead duplicates line. Search markdown and find alt+shift+up/down. Settings are updatedu on gist.)

- **HTML** :

  - `Html snippets` - (not needed in latest version of vscode)
  - `html css support / IntelliSense for CSS class names in HTML` (Choose only one. Intellisense is better.)
  - `Auto close tag`
  - `Auto rename tag`

- **CSS** :

  - `tailwind` - (Avoid it. Since _Html's Intellisense for CSS classnames_ extension is better)
  - `color highlight`
  - `live sass compiler`

- **PHP**

  - `php-intellisense` [Too much files to parse. Can't exclude "/vendor" folder. [issue](https://github.com/felixfbecker/php-language-server/issues/159) ]
  - `php debug` - Needs _xdebug_
  - `php docBlocker`
  - `code runner`

- **JS** :

  - _snippet_ : `JavaScript (ES6) snippets / Jquery snippets`
  - `JsDoc` / `Document-this`
  - `EsLint` (No in-built Linter)
  - `NPM / NPM intellisense`
  - `turbo console log` - On any variable `ctrl + alt + L`
  - **Debug**
    - **CLIENT** - Use `debugger-for-chrome`
    - **SERVER-NODEJS** - Use In-built debugger [Tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_debugging-your-express-application)
      <!-- - `Path IntelliSense`: (Avoid it)  -->

- **LARAVEL** :
  - `laravel 5 snippets`
  - `Laravel-blade`
  - `Laravel-blade-snippets`
- **VUE** : `Vetur / vue 2 snippets`
- **REACT** : `ES7-react-redux-graphicQl-nativeSnippets`
- **GIT** : `Gitlens (good if team)`
- **DOCKER** : - `Docker - (For syntax highlighting , linting, inte llisense etc)`
- **ENV** :- `DotENV`
- `REST client (api.http)` --> **For Frontend - Good to learn.**

# DEBUG

- `.vscode/launch.json` - https://code.visualstudio.com/docs/editor/debugging

# ISSUES

- `npm` conflicts with open recent key shortcut `ctrl+R` So delete npm shortcuts.
