# VSCode Keys

| HTML | Child       | Sibling | Climb-up       | Group            | Multiplication | Numbering (`$`)         | Attributes       | Text        | Id , Class    |
| ---- | ----------- | ------- | -------------- | ---------------- | -------------- | ----------------------- | ---------------- | ----------- | ------------- |
| `!`  | `nav>ul>li` | `div+p` | `div>p>span^p` | `div>(p>span)+p` | `ul>li*5`      | `ul>li.rank$*5`         | `div[title]`     | `p{Hello.}` | `#bar`/`.foo` |
|      |             |         |                |                  |                | `ul>li[title=rank-$]*3` | `p[title="foo"]` |             | `p#bar.foo`   |

| General            |                           | Editor management      |                              | Search and replace |                        | File management |              |
| ------------------ | ------------------------- | ---------------------- | ---------------------------- | ------------------ | ---------------------- | --------------- | ------------ |
| `Ctrl+Shift+P, F1` | Show Command Palette      | `ctrl+\ (backslash)`   | Split editor (open)          | `Ctrl+F`           | Find                   | `Ctrl+N`        | New File     |
| `Ctrl+P`           | Quick Open, Go to File... | `ctrl+W`               | Split editor (close)         | `Ctrl+H`           | Replace                | `Ctrl+O`        | Open File... |
| `Ctrl+Shift+N`     | New window/instance       | `ctrl+{1,2,3}`         | Split editor groups (switch) | `Ctrl+Enter`       | Find/Replace Multiline | `Ctrl+S`        | Save         |
| `Ctrl+W`           | Close window/instance     | `ctrl+pageUp/pageDown` | Split editor files (switch)  | `F3` or `Shift+F3` | Find next/previous     | `Ctrl+Shift+S`  | Save As...   |
| `Ctrl+,`           | User Settings             | `ctrl+0`               | Sidebar (switch)             | `Alt+Enter`        | Multi-cursors in find  | `Ctrl+W`        | Close        |
| `ctrl+R`           | Workspaces(Recent)        | `ctrl+B`               | Sidebar (toggle)             |                    |                        | `Ctrl+Tab`      | Open next    |

| Basic editing              |                          | Multi-cursor and selection  |                            | Integrated terminal   |                            |
| -------------------------- | ------------------------ | --------------------------- | -------------------------- | --------------------- | -------------------------- |
| `Alt+ ↓/↑`                 | Move line down/up        | `Alt+Click`                 | Insert cursor              | `Ctrl+Backtick`       | Show integrated terminal   |
| `Ctrl+Shift+K`             | Delete line              | `Shift+Alt+ ↑/↓`            | Insert cursor above/below  | `Ctrl+Shift+backtick` | Create new terminal        |
| `Ctrl+Shift+\ (backslash)` | Jump to matching bracket | `Ctrl+U`                    | Undo last cursor operation | `Ctrl+Shift+C`        | Copy selection             |
| `Ctrl+]/[`                 | Indent/Outdent line      | `Ctrl+L`                    | Select current line        | `Ctrl+Shift+V`        | Paste into active terminal |
| `Home/End`                 | Go to start/end (line)   | `Click+shift+Click`         | Select (text)              | `Ctrl+Shift+ ↑/↓`     | Scroll up/down             |
| `Ctrl+Home/End`            | Go to start/end (file)   | `shift+alt+{click/up/down}` | Select (block/box/column)  | `Shift+PgUp/PgDn`     | Scroll page up/down        |
| `Ctrl+ ↑/↓`                | Scroll line up/down      | `ctrl+shift+L` OR `Ctrl+F2` | Select (matching) [all]    | `Shift+Home/End`      | Scroll to top/bottom       |
| `Ctrl+Shift+ [/]`          | Fold/unfold              | `ctrl+D`                    | Select (matching) [1 by 1] |
| `Ctrl+/`                   | Toggle line comment      | `Shift+Alt+→`               | Expand selection           |
| `Alt+Z`                    | Toggle word wrap         | `Shift+Alt+←`               | Shrink selection           |

| Display                     |                         | Navigation       |                        | Rich languages        |                  | Debug             |                   |
| --------------------------- | ----------------------- | ---------------- | ---------------------- | --------------------- | ---------------- | ----------------- | ----------------- |
| `F11`                       | Toggle full screen      | `Ctrl+T`         | Show all Symbols       | `Ctrl+Space`          | Intellisense     | `F9`              | Toggle breakpoint |
| `Shift+Alt+0`               | Toggle layout axis      | `Ctrl+G`         | Go to Line...          | `ctrl+Space` x 2      | Intellisense     | `F5`              | Start/Continue    |
| `Ctrl+ =/-`                 | Zoom in/out             | `Ctrl+P`         | Go to File...          | `Ctrl+Shift+Space`    | Function hints   | `F11`/`Shift+F11` | Step into/out     |
| `Ctrl+B`                    | show/Hide Sidebar       | `Ctrl+Shift+O`   | Go to Symbol...        | `F12` OR `Ctrl+click` | Go to Definition | `F10`             | Step over         |
| `Ctrl+Shift+ { E/F/G/D/X ]` | Show in Acticity bar    | `Ctrl+Shift+M`   | Show Problems panel    | `Ctrl+Shift+F10`      | Peek Definition  | `Shift+F5`        | Stop              |
| `Ctrl+Shift+H`              | Replace in files        | `F8`             | Go to next error       | `Ctrl+.`              | Quick Fix        |
| `Ctrl+Shift+J`              | Toggle Search details   | `Shift+F8`       | Go to previous error   | `Shift+F12`           | Show References  |
| `Ctrl+Shift+V`              | Markdown preview        | `Ctrl+Shift+Tab` | Editor group history   | `F2`                  | Rename Symbol    |
| `Ctrl+K V`                  | Markdown preview (side) | `Ctrl+Alt+-`     | Go back                |
| `Ctrl+K Z`                  | Zen Mode (Esc Esc)      | `Ctrl+Shift+-`   | Go forward             |
|                             |                         | `Ctrl+M`         | Toggle Tab moves focus |
