https://code.visualstudio.com/docs

# BASICS

- **Launch** --> `code /path/project`
- [**Marketplace**](https://marketplace.visualstudio.com/vscode)

> **Fonts**

- Default : `'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'`
- Others :
  - [ Hack ](https://github.com/source-foundry/Hack)
  - [ Fira Code ](https://github.com/tonsky/FiraCode)
  - **Install** --> `sudo apt install fonts-firacode fonts-hack-ttf`
- Using **Fira Code**
  ```json
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  ```

> **Themes**

- **Relaxing your eyes**
  - Look away frequently
  - Monitor & Environment must match
  - _Light Theme_ --> **Day** --> _Good memory_
    - Winter is Coming / Slack / Quietlight / Kary pro colors / Spacemacs, Verdandi
  - _Dark Theme_ --> **Night** --> _Good syntax highlighting_
    - Default Dark+ / Dracula / One dark Pro
- **Stackoverflow** [link](https://ux.stackexchange.com/questions/53264/dark-or-white-color-theme-is-better-for-the-eyes)

- **Practice**
  - Interactive Playground (Help --> Welcome-page)

# Keys

- [Emmet Cheatsheet](https://docs.emmet.io/cheat-sheet/)
- [Keymaps](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

---

| Screen Mode                       | cmd           |
| --------------------------------- | ------------- |
| Zoom                              | `ctrl + +`    |
| Zen mode [2 times Esc to get out] | `ctrl + K, Z` |

---

| Palettes                | cmd                |
| ----------------------- | ------------------ |
| Workspaces              | `ctrl + R`         |
| All Files List          | `ctrl + P`         |
| CMD                     | `ctrl + shift + P` |
| Tags (current file)     | `ctrl + shift + O` |
| Words (All Files)       | `ctrl + T`         |
| Opened files            | `ctrl + Tab`       |
| Terminal                | `ctrl + Backtick`  |
| Intellisense            | `ctrl + Space`     |
| Intellisense (detailed) | `ctrl + Space` x 2 |

---

| Multiple cursor                      | cmd                                |
| ------------------------------------ | ---------------------------------- |
| Multiple cursors                     | `alt + mouseclick`                 |
| Multiple cursors                     | `alt + shift + arrow`              |
| Undo click                           | `ctrl + U`                         |
| select (text)                        | `firstClick + shift + secondClick` |
| Select (block)                       | `shift + alt + {click/up/down}`    |
| Select (matching words) [all]        | `ctrl + shift + L`                 |
| Select (matching words) [one by one] | `ctrl + D`                         |

---

| Line         | cmd                |
| ------------ | ------------------ |
| comment      | `ctrl + /`         |
| selects line | `ctrl + L`         |
| delete line  | `ctrl + shift + K` |

---

| Refactor                           | cmd                     |
| ---------------------------------- | ----------------------- |
| Rename refactor (search all files) | `F2`                    |
| Refactor (.js/.php)                | `Ctrl + .`              |
| Go to Defination                   | `ctrl + click` or `F12` |

---

| Code Folding | cmd                |
| ------------ | ------------------ |
| Fold         | `ctrl + shift + [` |
| Unfold       | `ctrl + shift + ]` |

---

| Errors         | cmd                |
| -------------- | ------------------ |
| Jump to errors | `F8`               |
| Jump to errors | `ctrl + shift + M` |

---

| Editor                | cmd                                          |
| --------------------- | -------------------------------------------- |
| Split editor (open)   | `ctrl + \`                                   |
| Split editor (close)  | `ctrl + W`                                   |
| Split editor (switch) | `ctrl + {1,2,3}` or `ctrl + pageUp/pageDown` |
| Sidebar (switch)      | `ctrl + 0`                                   |
| Sidebar (toggle)      | `ctrl + B`                                   |

---

| Find                   | cmd             |
| ---------------------- | --------------- |
| Search                 | In activity bar |
| Find                   | `ctrl + F`      |
| Replace                | `ctrl + H`      |
| Find/Replace Multiline | `ctrl + Enter`  |

---

| Tricks          | cmd                        |
| --------------- | -------------------------- |
| select brackets | `alt + shift + left/right` |
| Fast scroll     | `alt + scroll`             |
| Build (Default) | `Ctrl + Shift + B`         |

# Workspace

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
  - `Laravel blade spacer`
  - `Bracket colorizer`  
  - `vscode icons`  :
  <!-- - `Intend rainbow`  : -->  
- **MARKDOWN** : 
  - `Markdown all in one` - Keyboard shortcuts
  - `Markdownlint`  - Linting
- **HTML** : `Html snippets / html css support / IntelliSense for CSS class names in HTML / Auto close tag / Auto rename tag`
- **CSS** : `tailwind`
- **PHP** 
  - `php-intellisense` / `code runner` / `php debug`
  - `REST client (api.http)`  --> **Need to learn**
- **JS** :
  - _snippet_ : `JavaScript (ES6) snippets / Jquery snippets`
  - _syntax highlighting_ : `Babel JavaScript / Babel ES6/ES7 / DotENV`
  - `JsDoc` / `Document-this`
  - `EsLint, JsHint, etc` (No in-built Linter)
  - `NPM / NPM intellisense`
  - `Path IntelliSense`: autocompletes filenames. It works in HTML and CSS as well.
  - **Debug**
    - **CLIENT** - Use `debugger-for-chrome`
    - **SERVER-NODEJS** - Use In-built debugger [Tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_debugging-your-express-application)
- **VUE** : `Vetur / vue 2 snippets`
- **REACT** : `ES7-react-redux-graphicQl-nativeSnippets`
- **GIT** : `Gitlens (good if team)`
- **DOCKER** : - `Docker - (For syntax highlighting , linting, intellisense etc)`

# Debug

- `.vscode/launch.json` - https://code.visualstudio.com/docs/editor/debugging
