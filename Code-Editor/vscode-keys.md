# VSCode Keys

# EMMET

| HTML | Child       | Sibling | Climb-up       | Group            | Multiplication | Numbering (`$`)         | Attributes       | Text        | Id , Class    |
| ---- | ----------- | ------- | -------------- | ---------------- | -------------- | ----------------------- | ---------------- | ----------- | ------------- |
| `!`  | `nav>ul>li` | `div+p` | `div>p>span^p` | `div>(p>span)+p` | `ul>li*5`      | `ul>li.rank$*5`         | `div[title]`     | `p{Hello.}` | `#bar`/`.foo` |
|      |             |         |                |                  |                | `ul>li[title=rank-$]*3` | `p[title="foo"]` |             | `p#bar.foo`   |

| General            |                           | Editor management      |                              | Search and replace |                        |
| ------------------ | ------------------------- | ---------------------- | ---------------------------- | ------------------ | ---------------------- |
| `Ctrl+Shift+P, F1` | Show Command Palette      | `ctrl+\ (backslash)`   | Split editor (open)          | `Ctrl+F`           | Find                   |
| `Ctrl+P`           | Quick Open, Go to File... | `ctrl+W`               | Split editor (close)         | `Ctrl+H`           | Replace                |
| `Ctrl+Shift+N`     | New window/instance       | `ctrl+{1,2,3}`         | Split editor groups (switch) | `Ctrl+Enter`       | Find/Replace Multiline |
| `Ctrl+W`           | Close window/instance     | `ctrl+pageUp/pageDown` | Split editor files (switch)  | `F3` or `Shift+F3` | Find next/previous     |
| `Ctrl+,`           | User Settings             | `ctrl+0`               | Sidebar (switch)             | `Alt+Enter`        | Multi-cursors in find  |
| `ctrl+R`           | Workspaces(Recent)        | `ctrl+B`               | Sidebar (toggle)             |                    |                        |

| Basic editing              |                          | Multi-cursor and selection  |                            |
| -------------------------- | ------------------------ | --------------------------- | -------------------------- |
| `Alt+ ↓/↑`                 | Move line down/up        | `Alt+Click`                 | Insert cursor              |
| `Ctrl+Shift+K`             | Delete line              | `Shift+Alt+ ↑/↓`            | Insert cursor above/below  |
| `Ctrl+Shift+\ (backslash)` | Jump to matching bracket | `Ctrl+U`                    | Undo last cursor operation |
| `Ctrl+]/[`                 | Indent/Outdent line      | `Ctrl+L`                    | Select current line        |
| `Home/End`                 | Go to start/end (line)   | `Click+shift+Click`         | Select (text)              |
| `Ctrl+Home/End`            | Go to start/end (file)   | `shift+alt+{click/up/down}` | Select (block/box/column)  |
| `Ctrl+ ↑/↓`                | Scroll line up/down      | `ctrl+shift+L` OR `Ctrl+F2` | Select (matching) [all]    |
| `Ctrl+Shift+ [/]`          | Fold/unfold              | `ctrl+D`                    | Select (matching) [1 by 1] |
| `Ctrl+/`                   | Toggle line comment      | `Shift+Alt+→`               | Expand selection           |
| `Alt+Z`                    | Toggle word wrap         | `Shift+Alt+←`               | Shrink selection           |

| Display                     |                            | Navigation       |                                 | Rich languages editing |                         |
| --------------------------- | -------------------------- | ---------------- | ------------------------------- | ---------------------- | ----------------------- |
| `F11`                       | Toggle full screen         | `Ctrl+T`         | Show all Symbols                | `Ctrl+Space`           | Intellisense            |
| `Shift+Alt+0`               | Toggle layout axis         | `Ctrl+G`         | Go to Line...                   | `ctrl+Space` x 2       | Intellisense (detailed) |
| `Ctrl+ =/-`                 | Zoom in/out                | `Ctrl+P`         | Go to File...                   | `Ctrl+Shift+Space`     | Trigger parameter hints |
| `Ctrl+B`                    | Toggle Sidebar visibility  | `Ctrl+Shift+O`   | Go to Symbol...                 | `F12` OR `Ctrl+click`  | Go to Definition        |
| `Ctrl+Shift+ { E/F/G/D/X ]` | Show in Acticity bar       | `Ctrl+Shift+M`   | Show Problems panel             | `Ctrl+Shift+F10`       | Peek Definition         |
| `Ctrl+Shift+H`              | Replace in files           | `F8`             | Go to next error or warning     | `Ctrl+.`               | Quick Fix               |
| `Ctrl+Shift+J`              | Toggle Search details      | `Shift+F8`       | Go to previous error or warning | `Shift+F12`            | Show References         |
| `Ctrl+Shift+V`              | Markdown preview           | `Ctrl+Shift+Tab` | Navigate editor group history   | `F2`                   | Rename Symbol           |
| `Ctrl+K V`                  | Markdown preview (side)    | `Ctrl+Alt+-`     | Go back                         |
| `Ctrl+K Z`                  | Zen Mode (Esc Esc to exit) | `Ctrl+Shift+-`   | Go forward                      |
|                             |                            | `Ctrl+M`         | Toggle Tab moves focus          |

| Integrated terminal   |                            | File management |              | Debug                |                   |
| --------------------- | -------------------------- | --------------- | ------------ | -------------------- | ----------------- |
| `Ctrl+Backtick`       | Show integrated terminal   | `Ctrl+N`        | New File     | `F9`                 | Toggle breakpoint |
| `Ctrl+Shift+backtick` | Create new terminal        | `Ctrl+O`        | Open File... | `F5`                 | Start/Continue    |
| `Ctrl+Shift+C`        | Copy selection             | `Ctrl+S`        | Save         | `F11` or `Shift+F11` | Step into/out     |
| `Ctrl+Shift+V`        | Paste into active terminal | `Ctrl+Shift+S`  | Save As...   | `F10`                | Step over         |
| `Ctrl+Shift+ ↑/↓`     | Scroll up/down             | `Ctrl+W`        | Close        | `Shift+F5`           | Stop              |
| `Shift+PgUp/PgDn`     | Scroll page up/down        | `Ctrl+Tab`      | Open next    |                      |                   |
| `Shift+Home/End`      | Scroll to top/bottom       |
