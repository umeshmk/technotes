## SERVER FOR LARAVEL
---
homestead = https://github.com/laravel/settler/blob/master/scripts/provision.sh


>6 May 2017

### HOMESTEAD
- Ubuntu 16.04
- Git
- PHP 7.1
- Nginx
- MySQL
- MariaDB
- Sqlite3
- Postgres
- Composer
- Node (With Yarn, Bower, Grunt, and Gulp)
- Redis
- Memcached
- Beanstalkd
- Mailhog
- ngrok

### MY SCRIPT INCLUDES
- Basic - SSH / p7zip-full / nano et
- Git
- Nginx
- Php-fpm
- Mysql
- composer
- Nodejs/NPM
- Let's Encrypt - certbot
- PhpMyAdmin
- Redis
- Mailhog
- ngrok

### INSTALL ON UBUNTU

> apt-get update
 <br> apt-get upgrade -y

##### Basic
> apt-get install ssh p7zip-full nano python-software-properties build-essential software-properties-common curl

##### Git
> apt-get install git

##### Nginx
> apt-get install nginx

##### Php-fpm
>  add-apt-repository ppa:ondrej/php
<br> apt-get update
<br> apt-get install php-fpm php-mysql php-mbstring php-cli php-common php-gd php-curl php-imagick php-xml php-json php-zip php-xdebug

##### Mysql
> apt-get install mysql-server
<br> mysql_secure_installation

*NOTE: If mysql gives error try using service mysql start OR just restart pc* 
<br>*NOTE: If still problem try mysql.sh as alternative*

##### Composer
>curl -sS https://getcomposer.org/installer |  php -- --install-dir=/usr/local/bin --filename=composer

##### Nodejs / NPM
>curl -sL https://deb.nodesource.com/setup_7.x |  -E bash -
<br> apt-get install -y nodejs
<br> npm install npm --global

##### Redis
> apt-add-repository ppa:chris-lea/redis-server -y
<br> apt-get update
<br> apt-get install redis-server



## Configurations
#### nginx virtual host
- use nginx-config.md file :  https://github.com/umeshk149/Lemp-server-setup/blob/master/nginx-config.md 

#### let's encrypt
- Use LetsEncrypt.md
