#!/bin/bash
# My first script
# to run type ------ sh file-permissions.sh

echo $PATH
echo $PWD
echo $USER



composerr() {
    # call with a prompt string or use a default
    read -r -p "${1:-composer install? [y/N]} " response
    case "$response" in
        [yY][eE][sS]|[yY]) 
            true
            composer install
            echo "composer done !"
            ;;
        *)
            false            
            ;;
    esac
}
composerr



authentication() {
    # call with a prompt string or use a default
    read -r -p "${1:-add authentication? [y/N]} " response
    case "$response" in
        [yY][eE][sS]|[yY]) 
            true
            php artisan make:auth
            echo "auth added !"
            ;;
        *)
            false            
            echo "auth NOT added"
            ;;
    esac
}
authentication




sudo cp .env.example .env
sudo php artisan key:generate
echo ".env + key generated"



permissions() {
  sudo chown -R $USER:www-data $PWD
  sudo find $PWD -type f -exec chmod 664 {} \;    
  sudo find $PWD -type d -exec chmod 775 {} \;
  sudo chgrp -R www-data storage bootstrap/cache public
  sudo chmod -R ug+rwx storage bootstrap/cache public
  echo "folder permissions granted"
}
permissions




npminstall() {
    # call with a prompt string or use a default
    read -r -p "${1:-npm install? [y/N]} " response
    case "$response" in
        [yY][eE][sS]|[yY]) 
            true
            npm install
            echo "npm done !"
            ;;
        *)
            false            
            ;;
    esac
}
npminstall


