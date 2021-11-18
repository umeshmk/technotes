---
title: WSL2 - Windows subsystem for Linux
---

<vc-img url="https://i.ibb.co/tLFnZV2/8.png" size="sm"/>

# WSL2 - Windows subsystem for Linux

[**Official Docs**](https://docs.microsoft.com/en-us/windows/wsl)

[**Nodejs**](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2)

[Get-started-with-windows-subsystem-for-linux ](https://docs.microsoft.com/en-us/learn/modules/get-started-with-windows-subsystem-for-linux/)

- Runs on very fast, light & optimized virtual machine.
- cmd start/stop - `wsl`/ `wsl --shutdown`
- config - `C:\Users\<yourUserName>\.wslconfig`
  - [Guide](https://docs.microsoft.com/en-us/windows/wsl/wsl-config)
- Runs on lightweight virtual machine(Vmmem process)
  - Uses VirtualHardDisk (.vhdx file) with dynamic size.(Max 256GB EXT4)
- Browser access - `localhost`
- Uses full linux kernel (forked by Microsoft from kernel.org)
  - Updates automatically via windows updates (not linux upgrade)
- **Explore**
  - `\\wsl$\Ubuntu-18.04\home\<user name>\Project`
  - `/` = linux & `\` = windows
  - From linux - `/mnt/c/`
  - Data corruption - Never use windows explorer or other app to edit files/folders.
  - _(EXT4 != NTFS)_
- **Vscode**
  - Use `remote-wsl` extension to use windows/linux as client/server
  - `code .` - opens current folder in vscode works in wsl
- **Docker Desktop**

  - Can use virtual machine for linux containers
  - Runs both windows & linux containers since both kernels are available
  - Virtual machines types
    1. WSL2 (better performance)
    2. Hyper V

## Wsl - Ubuntu setup

<<< @/src/others/windows10/wsl-setup.sh
