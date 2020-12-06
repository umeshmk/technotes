# Get Started

- Interactive Playground - _(Help > Welcome-page)_
- **Command Palette**
  - `?` - Show global & Editor commands
  - `>` - Command
  - `#` - Go to symbol(workspace)
  - `@` - Go to symbol(current file)
  - `:` - Go to line
- Recent folders/workspaces (ctrl+r)
- Quick open files (ctrl+p)
  - Open Next file (ctrl+tab) (alt+left/right) (ctrl+pgup/pgdown)
- **`.vscode` folder**
  - `settings.json` - For vscode settings
  - `launch.json` - For Debugger
  - `tasks.json` - For Task runner - [API](https://code.visualstudio.com/docs/editor/tasks-appendix)
  - `extensions.json` - for Extensions _(in single root folder workspace)_
- **Multiroot workspace**
  - Workspaces - `ctrl + R`
  - Usecase - Vuejs , Reactjs, Php, Markdown workspaces with it's own settings & extensions
  - `.code-workspace` - global workspace settings
  - `.vscode` conflict _(each folder can has its own .vscode)_
    - Supports - single root workspace
    - Ignores - multi root workspace
      - Note: Only file/folder settings gets applied. Others like editor, UI, etc ignored
  - _Vscode Settings priority_
    1. Folder (`.vscode`) (overrides other settings)
    2. Workspace (`.code-workspace`)
    3. User (`settings.json`)
- Language mode
- Keymaps - _vim, sublume, etc_
  - `keybindings.json` - custom keys
- Settings - search for settings in command pallete
- Auto save file
- Panel (Terminal) - `(ctrl+j)`
- Sidebar(File explorer) - `(ctrl+shift+E) / (ctrl+0) / (ctrl+B)`
- **Editor**
  - Editor Layout `[rows, columns, grid]` - Click\_&_Drag tabs
  - multi cursor
  - fast scroll `(alt+scroll)`
  - copy line up/down (shift+alt+up/down)
  - **Symbol**
    - Peek `(symbol+alt+F12)`
    - Go to Defination `(symbol+F12)(ctrl+clickSymbol)`
    - Go to Reference `(symbol+shift+F12)`
    - Go to Reference All `(symbol+shift+alt+F12)`
    - Rename `(symbol+F2)`
  - Code folding
  - Code formatting
  - Markdown preview
  - intellisense
  - `.eslintrc.json` , `package.json`
  - Snippets
    - Emmet
    - Customsnippets
- Git Integration
- Task Runner (`tasks.json`)
- Minimap, Breadcrumbs
- Filtering/search files in Explorer (focus in Explorer and start typing)
- Tabs


