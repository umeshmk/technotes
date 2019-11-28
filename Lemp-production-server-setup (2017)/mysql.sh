!/usr/bin/env bash
#export DEBIAN_FRONTEND=noninteractive

#Import MySQL 5.7 Key
gpg: key 5072E1F5: public key "MySQL Release Engineering mysql-build@oss.oracle.com" imported
apt-key adv --keyserver ha.pool.sks-keyservers.net --recv-keys 5072E1F5
echo "deb http://repo.mysql.com/apt/ubuntu/ trusty mysql-5.7" | tee -a /etc/apt/sources.list.d/mysql.list

apt-get update

#Install MySQL
apt-get install -y mysql-server

#source : https://gist.github.com/fideloper/e774cb62d8be28da8a93
