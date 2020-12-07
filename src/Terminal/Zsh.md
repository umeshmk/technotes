# Zsh

> A very powerful shell when combined with framework like OhMyZsh
>
> [https://www.zsh.org](https://www.zsh.org)
>
> Shell - `zsh`
>
> Config - `~/.zshrc`
>
> Community framework - `ohmyzsh`

## Guides

- [Reference card](http://www.bash2zsh.com/zsh_refcard/refcard.pdf)
- [https://grml.org/zsh/zsh-lovers.html](https://grml.org/zsh/zsh-lovers.html)
- [DotFiles](https://github.com/mathiasbynens/dotfiles)
- [Install zsh ](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
- Install zsh on GitBash
  - Extract [zsh package](https://packages.msys2.org/package/zsh?repo=msys&variant=x86_64)) to `C:\Program Files\Git`
  - ```sh
    # Launch Zsh (Add this in .bashrc)
      if [ -t 1 ]; then
        exec zsh
      fi
    ```
- [Install ohmyzsh ](https://github.com/ohmyzsh/ohmyzsh)
- [Keybindings ](https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/key-bindings.zsh)
- Plugins
  - Add this
    - [zsh-autosuggest](https://github.com/zsh-users/zsh-autosuggestions)
    - [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md)
  - [unixorn/awesome-zsh-plugins](https://github.com/unixorn/awesome-zsh-plugins)
  - [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)

## Themes

- **Prompt**
  - [OhMyZsh Themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)
    - [My Good ones ](https://ibb.co/J7Bqw2C)
    - `robbyrussell, agnoster, af-magic, apple, arrow, bureau, refined, terminalparty`
  - [Powerlevel10k theme](https://github.com/romkatv/powerlevel10k)
    - `powerlevel10k/powerlevel10k`
    - It includes oh-my-zsh themes too.
    - `p10k configure` - Cmd for Config style
    - Font - `MesloLGS NF` (font with icons from NerdFonts)
- **Terminal**
  - Macos - [Macos-terminal-themes](https://github.com/lysyi3m/macos-terminal-themes)
  - Windows - [Terminalsplash](https://terminalsplash.com/)
  - Linux - [Gogh](https://mayccoll.github.io/Gogh/)

## zsh startup files

- `.zshenv`
- `.zprofile`
- `.zshrc`
- `.zlogin`

## .zshrc

<<< @/src/terminal/.zshrc

## .aliases

<<< @/src/terminal/.aliases
