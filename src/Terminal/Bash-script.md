# Bash scripting

> Bash scripting
>
> `.sh` is unix. `.bash` is Linux. Unix is core for Linux.
>
> `first.sh` or `first` (extension is optional)
>
> Must have execute permissions.

```sh
#!/bin/bash                           # called as "sha-bang" at the start
#!/usr/bin/env bash

echo "Lets start scripting"
echo $PATH
set $PATH=$HOME/bin:$PATH

```

## Multiline

```sh
# -------Multiline----------------
sudo apt install git \
                 nginx \
                 nano

echo "hello" && echo "world"
test -f "~/.bashrc" \
     && echo "File exist" \
     || echo "File not found"


```

## Standards I/O : stdin , stdop, stderr

```sh
# -------Standards I/O : stdin , stdop, stderr----------------
echo "Hello" > /dev/null              # Send to trashcan. Hides output
echo "Hello" > /dev/null 2>&1         # Even errors are trashed
echo "Hello" > /dev/null >&2          # Shows errors


```

## Variables

```sh
# -------Variables:----------
env                                   # shows all variables
a=b                                   # set variables
unset a                               # unset variables
alias a="echo'hi'"                    # shortcut for cmds
echo $a


```

## Arguments

```sh
# --------Arguments-----------
$@                                    # special variable to list arguments
$?                                    # exit code
$0                                    # cmd itself
$1, $2, $3                            # cmd arguments


```

## IF

```sh
# --------IF :----------
# example
which ifconfig > /dev/null            # checks for file
if [ "$?" != "0" ]; then              # checks exit code for which cmd
   echo "Error-ifconfig not found."
   exit 1                             # Stops script
fi

# example
if [$1 == "--clean" ]; then           # check arguments
  echo "cleaning"
  clean                               # runs clean() function
fi

# example
if [-n "$1"] ; then
  echo "invalid arguments"
  exit 1
fi


```

## FUNCTIONS

```sh
# --------FUNCTIONS :----------
set -e                                  # exit script if errors. exit code is not needed --optional
myfunc () {
  local FOO="bar"                       # Local variable
  echo FOO
  return                                # end function --optional
  exit 1                                # end script --optional
  exit                                  # default = 0
}

update(){
    echo "Updating system"
    sudo apt update
    sudo apt upgrade -yy
}
clean(){
    echo "Cleaning system"
    sudo apt autoremove -yy
    sudo apt autoclean
}
addText(){
cat << _EOF_                             # HERE DOCS - send text to cat cmd
            THIS IS MY TEXT
            BYE.
_EOF_
}


```

## FOR

```sh
# --------FOR :----------
for FILE in ./\*.deb                     # FILE is a variable like $i=0
    do
    sudo gdebi -n "$FILE"
done

for A in $@                              # loop arguments
    do
    echo "Hi"
done


```

## INTERACTIVE

```sh
# --------INTERACTIVE :----------
echo "Enter [y/n]"
read -n 1 -s choice                      # saves in choice variable
if ["$choice" == "y"] ; then
    echo "pressed y"
else
    exit 1
fi

echo "enter choice"
read -n 1 -s choice
case $choice in \
         1) myfunc;;  \
         2) echo "hello";;  \
         3) clear; echo"hello";;  \
         0) exit;; \
         *) echo "invalid choice"
esac

```
