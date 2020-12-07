
# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi


# wsl ubuntu - $HOME is /home/umesh
# Git Bash   - $HOME is /c/Users/umesh
export PATH=$HOME/bin:/usr/local/bin:$PATH
# export ZSH="/home/umesh/.oh-my-zsh"
export ZSH="$HOME/.oh-my-zsh"

# robbyrussell, agnoster, af-magic, apple, arrow, bureau, refined, terminalparty
ZSH_THEME="powerlevel10k/powerlevel10k"

# Completion.
# CASE_SENSITIVE="true"
# HYPHEN_INSENSITIVE="true"  # Case-sensitive completion must be off. _ and - will be interchangeable.

# History timestamps
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd" or set using strftime
HIST_STAMPS="dd.mm.yyyy"

# Add wisely, as too many plugins slow down shell startup.
# Note - zsh-syntax-highlighting - always last
plugins=(
    z
    sudo
    zsh-autosuggestions
    zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh
source ~/.aliases

# User configuration
# export MANPATH="/usr/local/man:$MANPATH"
# export LANG=en_US.UTF-8


# ---Key Bindings---
bindkey '^H' backward-kill-word


# Powerlevel10K
# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh



# function acp() {
#   git add .
#   git commit -m "$1"
#   git push
```
