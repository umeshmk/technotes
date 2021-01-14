# Settings JSON

## Global

> Add this in User settings. No need to add in workspace.

```json
{
  // ==> Editor Basics <==
  "window.zoomLevel": 1,
  "editor.fontLigatures": true,
  "editor.fontFamily": "'JetBrains Mono Light','Source Code Pro', 'Cascadia Code', Consolas, 'Courier New', monospace",
  "editor.fontSize": 15,
  "editor.suggestSelection": "first",
  "editor.snippetSuggestions": "top",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "editor.formatOnSave": true,
  "editor.cursorStyle": "block",
  "editor.cursorBlinking": "solid",
  "editor.minimap.enabled": false,
  "editor.lineNumbers": "interval",
  "files.autoSave": "onFocusChange",
  // "files.autoSaveDelay": 3000
  // ==> Workbench - Themes <==
  "workbench.iconTheme": "vscode-icons",
  "workbench.colorTheme": "GitHub Dark",
  "workbench.editor.showTabs": false,
  "workbench.sideBar.location": "right",
  // "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "files.eol": "\n",
  // ==> files/folders <==
  "files.associations": {
    ".aliases": "shellscript"
  },
  "files.exclude": {
    // "**/node_modules": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true
  },

  // ==> Prettier & Eslint Fixex<==
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,

  // ==> Markdown <==
  "markdown-preview-enhanced.previewTheme": "github-light.css",
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.quickSuggestions": {
      "strings": true
    }
  }
}
```

## Optional

```json
{

  // ==> files/folders <==
  "files.exclude": {
    "**/*.js": {
      "when": "$(basename).ts"
    }
  }

 // ==> Prettier <==
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // ==>  Extension: Html-css-support <==
  "css.remoteStyleSheets": [
    "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.1/tailwind.min.css"
  ],
  "css.enabledLanguages": [
    "html"
  ]

  // ==> Emmet <==
  "emmet.triggerExpansionOnTab": true,
  "emmet.showSuggestionsAsSnippets": true,
  "editor.snippetSuggestions": "top",
  "emmet.includeLanguages": {
      "javascript": "javascriptreact",
      "razor": "html",
      "plaintext": "pug"
  },

}
```
