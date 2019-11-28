#!/bin/bash
# to run type ------ sudo sh run.sh

#sudo su

apt-get update
apt-get upgrade -y
dpkg-reconfigure tzdata
apt-get install -y language-pack-en-base
#echo "LC_ALL=en_US.UTF-8" >> /etc/default/locale
#locale-gen en_US.UTF-8

#Basic
apt-get install ssh p7zip-full nano python-software-properties build-essential software-properties-common curl
echo "---------------BASIC DONE---------------------"

#Git
apt-get install git
echo "---------------GIT DONE---------------------"

#Nginx(use ppa on trusty 14)
#add-apt-repository ppa:nginx/development
#apt-get update
apt-get install nginx -y
echo "---------------NGINX DONE---------------------"


#php-fpm
#add-apt-repository ppa:ondrej/php
LC_ALL=en_US.UTF-8 add-apt-repository ppa:ondrej/php
apt-get update
apt-get install php-fpm php-mysql php-mbstring php-cli php-common php-gd php-curl php-imagick php-xml php-json php-zip php-xdebug
echo "---------------PHP-FPM DONE---------------------"


#Mysql
apt-get install mysql-server -y
#mysql_secure_installation
echo "---------------MYSQL DONE---------------------"


#composer
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
echo "---------------COMPOSER DONE---------------------"


#Nodejs
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
apt-get install -y nodejs
npm install npm --global
echo "---------------NODEJS DONE---------------------"


# Install ngrok - (not on production)
ngrokk() {
 # call with a prompt string or use a default
    read -r -p "${1:-ngrok install? [y/N]} " response
    case "$response" in
        [yY][eE][sS]|[yY]) 
            true
            wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip
            unzip ngrok-stable-linux-amd64.zip -d /usr/local/bin
            rm -rf ngrok-stable-linux-amd64.zip
            echo "---------------NGROK DONE---------------------"
            ;;
        *)
            false            
            ;;
    esac  
}
ngrokk 


#redis
apt install redis-server

# Clean Up
apt-get -y autoremove
apt-get -y clean


echo "---------------DONE---------------------"
