# Shortcuts

| Shortcuts             |                |
| --------------------- | -------------- |
| _copy_                | `ctrl+Shift+C` |
| _paste_               | `ctrl+Shift+V` |
| _clear_               | `ctrl+L`       |
| _New tab_             | `ctrl+ T`      |
| _CLose tab_           | `ctrl+ W`      |
| _Complete cmd / hint_ | `TAB`          |
| _Kill process_        | `ctrl+C`       |

# Basic Commands

| Basic Commands          |                               |
| ----------------------- | ----------------------------- |
| _install package_       | `apt install <appname>`       |
| _remove package_        | `apt remove <appname>`        |
| _purge package_         | `apt purge <appname>`         |
| _autoremove_            | `apt autoremove`              |
| _update/upgrade Ubuntu_ | `sudo apt <update / upgrade>` |
| _Edit files_            | `<vi / nano / gedit> <file>`  |
| _find files_            | `find \*.pdf`                 |
| _user logged in cmd_    | `whoami`                      |
| _top processes_         | `top`                         |
| _ping_                  | `ping <ip, domain>`           |
| _disk space_            | `df`</br> `free`              |
| _process_               | `ps`                          |
| _user logged in_        | `w`                           |
| _change password_       | `passwd`                      |
| _exit_                  | `exit`                        |
| _shut down_             | `shutdown`                    |
| _History of cmds_       | `history`                     |
| _help_                  | `<cmd> help` / `<cmd> -h`     |
| _manual_                | `man <cmd>`                   |
| _dir list_              | `dir`                         |
| _files, dir list_       | `ls` </br> `ls -a`            |
| _tree structure_        | `tree` </br> `tree -a`        |
| _change dir_            | `cd <dest>` </br> `cd ..`     |
| _present working dir_   | `pwd`                         |
| _clear screen_          | `clear`                       |
| _where_                 | `whereis <cmd>`               |
| _what_                  | `whatis <cmd>`                |
| _curl_                  | `curl <url>`                  |
| _wget_                  | `wget <url>`                  |

# Piping

- Output of one cmd is Input for other cmd
- No need to save even temporary files.
- EX - `ls | wc -l`

# File handling

| File handling                                                       |                                                                                 |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| _make directory_                                                    | `mkdir <dirname>`                                                               |
| _remove directory/file_                                             | `rmdir <dirname>` </br> `rm <file>`                                             |
| _Remove recursively_                                                | `rm -r <dirname>`                                                               |
| _see file content_                                                  | `cat <file>` </br>`cat <file1> <file2>` </br> `cat <file1> <file2> > <newFile>` |
| _move - src removed. </br>Dest(if present) will be overwritten_     | `mv <source> <dest>` </br> `mv <foo> <newfoo>`                                  |
| _copy - src NOT removed. </br>Dest(if present) will be overwritten_ | `cp <source><dest>`                                                             |
| _display_                                                           | `echo <expression>`                                                             |
| _search in file_                                                    | `grep <ATextToSearchFor> <file>`                                                |
| _zip </br> unzip_                                                   | `zip <dest.zip> <file1><file2><file3>` </br>`unzip <file.zip>`                  |

# scripting

```sh
// file.sh
originalAddress=@(ifconfig | grep “inet addr” | head –n 1 | cut –d “:” –f 2 | cut –d “ “ –f 1)
echo $originalAddress
```

- _permissions_ - `chmod a+x file.sh`
- _run_ - `./file.sh`
