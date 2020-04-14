#!/bin/bash
# My first script
# to run type ------ sh file-permissions.sh

echo "note:running"
#echo $PATH
#echo $PWD
#echo $USER

echo "start optimizing"

php artisan optimize
php artisan config:cache
php artisan route:cache

echo "Done optimizing"