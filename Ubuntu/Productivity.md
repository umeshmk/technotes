> Make .sh scripts if necessary

# OS

- Ubuntu (GNOME DE)

# List

- Help (man / help / -h)
- Shell (zsh + oh-my-zsh)
- Terminal (Terminator)
- Extract files (p7zip-full)
- Terminal editing (vi / nano)
- Terminal-to-gui editing (gedit)
- Quick editing (sublime-text)
- IDE (vscode)
- SSH key for github
- Drawing (Inkspace / Gimp)

#### Manual / help

```sh
# Manual [Full]
man git
man git add

# Help [Mid]
git help

# -h [Short]
git -h
git add -h
```

#### Package management

- Snap
- [Flatpak](https://flatpak.org/) & [https://flathub.org/](https://flathub.org/)
- Appimage

#### oh-my-ZSH

- Plugins [git extract] - [All plugins](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins)
- Themes [default is good]
- [Git Plugin](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/git/)

```sh
# Install zsh
sudo apt get zsh
chsh -s $(which zsh)		# make default
zsh							# select (2) to create  ~/.zshrc config
# Logout user - Login again
echo $SHELL					# check default shell

# Install oh-my-zsh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

> _Add Plugins_

```sh
gedit ~/.zshrc				# config file

# plugins=(git extract)

# **Extract Plugin
extract abc.tar.gz			# any archive file
extract -r abc.zip 			# Extract and remove original archive file

```

> [TAB] - Filename completion




#### Terminator (Multiple Terminals)

`sudo apt-get install terminator`

#### Open VSCode from any folder

`code .`

### Theme

- [Materia](https://github.com/nana-4/materia-theme)
  `sudo apt install materia-gtk-theme`
