# GETTING STARTED

:::danger Deprecated
This notes are for version 6. Current version is 8+ at the time of this editing.

Still most of the parts are relevent.
:::

## RELEASE (version 6)

- Laravel Vapor
- Improved authorization responses
- Job middleware
- Lazy collections
- Sub-query improvements
- Frontend scaffolding to the **laravel/ui**

## VAGRANT BOX - HOMESTEAD

- Vagrant Boxes are virtual machines and so needs **VirtualBox**
- Completely disposable
- Runs on Windows, Mac, Linux
- **Softwares**
  - Included - _Nginx, PHP, MySQL, PostgreSQL, Redis, Memcached, Node, etc_
  - Optional - _Docker, MongoDB, OhMyZsh, etc_
- [**Youtube Tutorial**](https://www.youtube.com/watch?v=b3HLNJvVzNo&list=PL41lfR-6DnOqzgYCAOIBTnMUFNdLtsKuW&index=1)
- **Install Homestead**

  - _1] Multiple Projects_

  ```sh
      # In ~/Laravel folder [This will serve all laravel projects]
      git clone https://github.com/laravel/homestead.git ~/Laravel/Homestead
      git checkout release                  # select release branch
      bash ~/Laravel/Homestead/init.sh      # This will gives homestead.yml , aliases, before.sh
  ```

  - _2] Single Project_

  ```sh
    composer require laravel/homestead --dev      # Add Homestead to project
    php vendor/bin/homestead make                 # Creates YAML and Vagrantfile. Folder location and sitename are automatically configured..
  ```

* **Vagrant Basics**

  ```sh
  # Install Homestead Box
  vagrant box add laravel/homestead

  # Basics
  vagrant up              # Power ON
  vagrant halt            # Power OFF
  vagrant reload          # Restart
  vagrant suspend         # Hibernate
  vagrant resume          # Resume from suspension
  vagrant destroy         # Destroy

  # SSH - Needs RSA Key as in YAML
  # CREATE SSH KEY - "ssh-keygen -t rsa -b 4096"
  vagrant ssh

  # Do this everytime we edit YAML file
  vagrant reload --provision
  ```

* **Folder Sharing** - For high _Disk I/O performance_
  - Instead of `map: ~/code` do `map:~/code/project1` & `map:~/code/project2`
* **Hostname resolution**

  - _1] Single project_

    - Automatic hostname resolution - **http://foo.local**

    ```yml
    sites:
      - map: foo
        to: /home/vagrant/code/project1/public
    ```

  - _2] Multiple projects_

    - Needs to add in `etc/hosts` with same _ip address_ as in YAML

    ```yml
    sites:
      - map: foo.test
        to: /home/vagrant/code/project1/public
      - map: bar.test
        to: /home/vagrant/code/project2/public
    ```

- **Daily Usage**

  - _Database admin client_
    - **Mysql** - Use `127.0.0.1:33060`
    - **Postgresql** - Use `127.0.0.1:54320`
    - Credentials - `homestead/secret`
  - _Darabase Backups_
    - When `vagrant destroy` is called the database must be backedup
    - In YAML add - `backup:true`
    - Folder
      - _Names_ - `mysql_backup`
      - _Location_
        - Homestead folder if multiple projects
        - Project root folder if per project homestead is used
  - _Mailhog_

    - View outgoing mails - `http://localhost:8025`
    - Add this in `.env`
    - `.env` [Config](https://laravel.com/docs/6.x/homestead#configuring-mailhog)

  - _Minio_

    - Object storage server with Amazon S3 compatible API - `http://localhost:9600/`
    - `.env` [Config](https://laravel.com/docs/6.x/homestead#configuring-minio)

  - _Ports_
    ```sh
    # Host -> Virtual
    2222 -> 22    # ssh
    8000 -> 80    # http
    44300 -> 443    # https
    33060 -> 3306    # Mysql
    4040 -> 4040    # ngrokUI
    ```
  - _Site sharing_
    - 1] _Vagrant_
      - Use command `vagrant share`
      - For single site only
    - 2] _Ngrok_
      - SSH in homestead and use command `share foo.test`
      - Can be used for multiple sites

- **Debug & Profiling**

  - App - `XDebug`
  - CLI App - `Xphp`
  - Profiling
    - Use _Blackfire_ [Performance, quality & security checks]
    - Use _XHGUI_

### # INSTALLATION

- **Create project**
  - `composer create-project --prefer-dist laravel/laravel blog`
  - Error (if json is not downloading) - `composer config -g repo.packagist composer https://repo.packagist.org`

* **Basic Configuration**
  - _Entry point_ `“public/index.php”`
  - _Check config folder_
  - _Folder permissions_ (not required if Homestead) `[sh-start.sh]` - https://github.com/umeshmk/laravel/blob/master/sh-start.sh
  - _.env file_
  - Do - `npm install`

### # CONFIGURATION

- Using **DotEnv** php library for _.env_
  - Any variable in _.env_ can be overwritten by _server/system_ environment variables
  - `$_ENV (global php variable)`
  - _config files_ - `‘debug’ => env(“APP_DEBUG”, false)`
  - `$environment = App::environment()`
- **Access config** :- `$a = config::(‘app.timezone’)`
- **Maintenance mode**
  - _Down_ - `php artisan down` (no queued jobs handled)
  - _Up_ - `php artisan up` (queue resume)
  - _View file_ :- `/views/errors/503.blade.php`
  - **Envoyer** is alternative to maintenance mode with zero-downtime.

### # DIRECTORY

- _app, bootstrap, config, database, public, resources, routes, storage, test, vendor_
- **app**
  - _Console, Exceptions, Http, Providers_ => Created by default
  - _Broadcast, Events, Jobs, Listeners, Mail, Notifications, Policies, Rules_ => created by artisan `make:xyz` command

### # DEPLOYMENT:

- Nginx configuration
- Optimizing

  ```sh
  composer install --optimize-autoloader --no-dev
  php artisan config:cache
  php artisan route:cache
  ```
