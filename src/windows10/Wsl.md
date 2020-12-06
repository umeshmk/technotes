# WSL2 - Windows subsystem for Linux

- **Official Docs** - https://docs.microsoft.com/en-us/windows/wsl
- **Nodejs** - https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2
- cmd start/stop - `wsl`/ `wsl --shutdown`
- config - `C:\Users\<yourUserName>\.wslconfig`
  - Guide - https://docs.microsoft.com/en-us/windows/wsl/wsl-config#configure-global-options-with-wslconfig
- Runs on lightweight virtual machine(Vmmem process)
  - Uses VirtualHardDisk (.vhdx file) with dynamic size.(Max 256GB EXT4)
- Browser access - `localhost`
- Uses full linux kernel (forked by Microsoft from kernel.org)
  - Updates automatically via windows updates (not linux upgrade)
- Explore - `\\wsl$\Ubuntu-18.04\home\<user name>\Project`
  - `/` = linux & `\` = windows
  - From linux - `/mnt/c/`
  - Data corruption - Never use windows explorer or other app to edit files/folders.
  - _(EXT4 != NTFS)_
- Vscode 
  - Use `remote-wsl` extension to use windows/linux as client/server
  - `code .` - opens current folder in vscode works in wsl
- Docker Desktop - Run both windows and linux containers since both kernels are available

- https://docs.microsoft.com/en-us/learn/modules/get-started-with-windows-subsystem-for-linux/
- docker in wsl - https://www.youtube.com/watch?v=5RQbdMn04Oc&ab_channel=DavidBombal

# Docker & vscode

- https://www.youtube.com/watch?v=KFyRLxiRKAc&ab_channel=codeSTACKr
- docker desktop
- remote-containers (vscode extension)
- Base image - Nodejs - preconfigured with git, zsh, other tools
