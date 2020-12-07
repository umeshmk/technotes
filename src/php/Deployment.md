# Server & Deployment

## PaaS

- Little or No configuration needed
- A lot Popular to deploy, host, scale php apps
- Providers
  - _AWS Elastic Beanstalk_
  - _Cloudways_
  - _Google App Engine_
  - _Heroku_
  - _IBM Cloud_
  - _Microsoft Azure_
  - _Platform.sh_
  - _Red Hat OpenShift_

## Virtual Dedicated Servers

- System admin knowledge is needed.
- Complete control
- **Nginx & PHP-fpm**
  - **FPM** - FastCGI Process Manager
  - Lightweight, Less memory usage & more concurrent connections than Apache

## Shared Servers

- Good for budget & small sites.
- Check php version used.

# Building & Deploying

- Everytime a new version is to be deployed we must do some checking tasks.
- Various tasks can be **automated** instead of manual
  - Dependency management
  - Assets compile & minify
  - Testing
  - Creating Documentation
  - Packaging
  - Deployment - [Envoyer, Deployer, Rocketeer]

## Server Provisioning [Ansible, Puppet, Chef - OpsWorks]

- _Infrastructure_ - Managing, configuring & scaling many servers to work correctly.
- Used with big clouds like AWS, DigitalOcean, etc

## Continuous Integration [TravisCI]

- Approach/Practice followed by teams.
- Each developer works and integrates code daily.
- TravisCI is hosted service for open sources projects. Github uses it.

## Virtualization

> **Vagrant** [Homestead]

- Create a virtual environment using `VirtualBox, Vmware` in a single file called **BOX**
- This Box is used in development of apps by all developers.
- _Files, CodeEditor & browser_ run in Host-machine but the code runs in virtual-machine.
- _Config_ file can be created using provisioning tools
- **YAML** is easy to create using GUI services like _[Phupet, Protobox, Phansible]_

> **Docker**

- Use containers which uses the same kernel of host OS.
- Very low memory usage with small file size.
- Very Fast to create and deploy stacks using single YAML
- GUI service - [phpdocker.io](https://phpdocker.io/generator)
