# Server & Deployment

### PaaS

    - Little or No configuration needed
    - A lot Popular to deploy, host, scale php apps
    - Providers
        - *AWS Elastic Beanstalk*
        - *Cloudways*
        - *Google App Engine*
        - *Heroku*
        - *IBM Cloud*
        - *Microsoft Azure*
        - *Platform.sh*
        - *Red Hat OpenShift*

### Virtual Dedicated Servers

- System admin knowledge is needed.
- Complete control
- **Nginx & PHP-fpm**
    - **FPM** - FastCGI Process Manager
    - Lightweight, Less memory usage & more concurrent connections than Apache

### Shared Servers

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

### Server Provisioning

- *Infrastructure* - Managing, configuring & scaling many servers to work correctly.
- Used with big clouds like AWS, DigitalOcean, etc
- *Tools*
    - **Ansible** - using YAML file.
    - **Puppet** 
    - **Chef - OpsWorks**

### Continuous Integration [TravisCI]

- Approach/Practice followed by teams.
- Each developer works and integrates code daily.
- TravisCI is hosted service for open sources projects. Github uses it.
 