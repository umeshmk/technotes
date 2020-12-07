---
title: Visual Studio Code
---

<vc-img url="https://i.ibb.co/ZL8zJC9/9.png" size="md"/>

# Visual Studio Code

[code.visualstudio.com/docs](https://code.visualstudio.com/docs)

```sh
code /path/project
```

**Keyboard Shortcuts(Windows)**

- File - `keybindings.json`
- [Official pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [Docs-keybindings](https://code.visualstudio.com/docs/getstarted/keybindings)
- [My cheatsheet](https://github.com/umeshmk/Tutorials/blob/master/Code-Editor/Visual-Studio-Code-Cheatsheet.pdf)

## Why Vscode ?

[code.visualstudio.com/learn](https://code.visualstudio.com/learn)

1. Codespaces (Github's vscode in browser)
2. Live collaboration (Liveshare ext)(with audio/chat)
3. Coding Intellisense
4. Debug
5. Themes
6. Compare code using diff
7. Keyboard shortcuts
8. Extensions
9. Remote dev environments(remote-wsl/ssh/containers)
10. Port forwarding

## Backup

1. Inbuilt settings sync
2. Settings sync extension
   - Gist : [umeshmk/bd1aba52fc5a47b02701ce8a0b4cce92](https://gist.github.com/umeshmk/bd1aba52fc5a47b02701ce8a0b4cce92)
   - Needs
     - To upload - **github token** (permission to create gist only)
     - To download - **gist id** (token needed only if _uploading_ or _private_ gist)

## Fonts & Icons

- **'JetBrains Mono', 'Cascadia Code'**
- Need to Enable Ligatures
- **File icons :** Can be changed to none, minimal, fullset (vscode, material)

## Themes

[_Stackoverflow - Dark or white theme_](https://ux.stackexchange.com/questions/53264/dark-or-white-color-theme-is-better-for-the-eyes)

### Color effect on Eyes

1. Blue (Worst for eyes)(High energy closer to Ultraviolet)
2. Yellow is most tiring
3. Red (Least energy closer to infrared)

### We have 3 options

1. Dark background (_Good syntax highlighting_)
2. Light background
3. Computer Glasses/Glares

### Context switching

1. Monitor
   1. Vscode coding
   2. Chrome browser
   3. Terminal
2. Environment
   1. Day
   2. Night
   3. Artificial lighting
   4. Notebooks/Prints

### Tips

1. Take break after 1 hour
2. Brightness

### Custom themes

- [VS Code's Yeoman extension generator](https://code.visualstudio.com/api/get-started/your-first-extension)
- [create-a-new-color-theme](https://code.visualstudio.com/api/extension-guides/color-theme#_create-a-new-color-theme)

## Uninstall/Reset

- **Windows** - Delete %APPDATA%\Code and %USERPROFILE%\.vscode.
- **Linux** - Delete \$HOME/.config/Code and ~/.vscode.
