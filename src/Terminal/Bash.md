# Bash

> Bash is a shell. A shell is a program that runs on top of kernel.
>
> Zsh & Fish are better alternatives.
>
> [Gnu.org](https://www.gnu.org/software/bash/manual/bash.html)
>
> [Idnan/bash-guide](https://github.com/Idnan/bash-guide)
>
> Book - "The Linux command line" by William Shotts
>
> Joe Collins - Youtube channel
>
> [http://linuxcommand.org/tlcl.php](http://linuxcommand.org/tlcl.php)
>
> [http://ss64.com/bash](http://ss64.com/bash)

## Basics

```sh
# --------- Basics -----------
ctrl+c
<cmd> -h
<cmd> --help
man <cmd>                                   # manual
which <cmd>
whatis <cmd>
whereis <cmd>                               # where
whoami                                      # user logged in
history
clear                                       # no scrolling up (But ctrl+L allows scrolling up)
env
watch <cmd>                                 # reruns cmd every 2 secs
watch free -h
jobs
exit
shutdown                                    # shut down


curl <url>                                  # curl
wget <url>                                  # wget


export FOO="bar"                            # env variable (session only) add in .bashrc if needed everytime
```

# Files/Folders

```sh
# --------- Files/Folders -----------
ls
df                                          # disk space
tree
pwd
cd
pushd / popd
mc                                          # midnight commander file manager in terminal
file <filename>                             # file info
stat <filename>                             # file more info
find                                        # avoid use locate
locate <filename>                           # uses database
sudo updatedb                               # update database for locate
grep "text" /foo/*.txt                      # Very powerful for search

mkdir <foldername>
touch <filename>
cp <src file> <dest file>
mv <src file> <dest ffile>
rm <file>
rm -rf <folder>
rmdir \*                                    # removes only empty dir


echo "hello"
echo "New file" > <filename>
echo "append to file" >> <filename>
cat file1 file2 file3
cat <filename>                              # shows text
cat > <filename>                            # erase & add text
cat >> <filename>                           # append text
less <filename>                             # easy navigation on long file
nano <filename>

zip <dest.zip> <file1><file2><file3>
unzip <file.zip>

# -------Redirection ( | ) ---------
# o/p from one to other
history | less


```

## File permissions

```sh
# --------- File permissions -----------

# 1+3+3+3 = 10 dashes
-rwxr-xr-x

# Types
-|---------                                  # [File]
d|---------                                  # [Directory](A special type of file)
l|---------                                  # [Link]

# [read=4 write=2 execute=1]
rwx = 4+2+1 = 7
r-x = 5
r-- = 4
--x = 1
--- = 0
-rwxr-xr-x                                   # eg: 755 for file


# CHange permissions
# Users 4 Types - Root, User, Groups, World
# Root always has all permissions
chown user:group <file/folder>               # Change ownership
chmod 700 <filename>                         # [user=7 group=0 world=0](root user has all permissions)
chmod +x <filename>                          # [adds execute to all users]
chmod -x <filename>                          # [removes execute to all users]

# Note :
# Folder is visible only if it has execute permissions
# 644 (for files) = 755 (for folders)

```

## Users, groups

```sh
# Users
/etc/passwd                                # default userid=1000
su - <user>

# Admin rights
useradd                                    # avoid
adduser <user> adm
adduser <user> sudo

groups                                     # groups user is part of
passwd <user>                              # reset password
passwd -l <user>                           # lock account
passwd -u <user>                           # unlock account
userdel -f <user>                          # delete account with all files

```

## Aliases, functions

```sh
# Aliases - see .aliases file
 . <filename> - dot is add to source after editing (bashrc)

# Functions (add in script or .bashrc)
update () {
   sudo apt update
   sudo apt upgrade
}
```

## Storage

```sh
# Everything in linux is files.
# Devices, Folder are files too
/dev                                  # has all devices
/etc/fstab

lsblk                                 # list disks blocks
blkid                                 # list block ids
lscpu, lspci                          # other cmds
df -h                                 # list all disks

dd if=/dev/zero                       # if/of = input/output file
   of=/dev/sdX                        # bs = block size
   bs=1024k                           # count = required size to wipe out
   count=2048 sync                    # bs*count = 1024k * 2048 = 2gb

fdisk /dev/sdX
mkfs -t ext4 /dev/sdc1                # format = make filesystem
mount /dev/sdb1 /mnt
umount /mnt (OR) /dev/sdb1
```

## System

```sh
free -h
top
htop
ps
killall firefox
```
