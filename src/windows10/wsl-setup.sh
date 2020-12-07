#!bin/bash

# Wsl Ubuntu - setup script
sudo apt update && sudo apt upgrade
sudo apt install wget ca-certificates git -y


# zsh & ohmyzsh
sudo apt install zsh
chsh -s $(which zsh)
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# Powerlevel theme
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# github cli
sudo apt install gh
# Copy .aliases .zshrc .ssh

# Optional - Micro editor
# curl https://getmic.ro | bash
# md ~/bin/
# mv micro ~/bin/

