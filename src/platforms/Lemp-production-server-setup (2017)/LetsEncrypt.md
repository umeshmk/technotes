## 1] Install certbot
#### https://certbot.eff.org/#ubuntutrusty-nginx

    sudo add-apt-repository ppa:certbot/certbot
    sudo apt-get update
    sudo apt-get install certbot


## 2] ssl.conf
#### https://cipherli.st/

	sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048


Create a file `/etc/nginx/snippets/ssl.conf` containing:

    ssl_session_timeout 1d;
	ssl_session_cache shared:SSL:50m;
	ssl_session_tickets off;

	ssl_protocols TLSv1.2;
	ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";
	ssl_ecdh_curve secp384r1;
	ssl_prefer_server_ciphers on;

	ssl_stapling on;
	ssl_stapling_verify on;

	resolver 8.8.8.8 8.8.4.4 valid=300s;
	resolver_timeout 5s;

	add_header Strict-Transport-Security "max-age=15768000; includeSubdomains; preload";
	add_header X-Frame-Options DENY;
	add_header X-Content-Type-Options nosniff;

	ssl_dhparam /etc/ssl/certs/dhparam.pem;

---

## 3] letsencrypt.conf

create a folder : `sudo mkdir /var/www/letsencrypt/.well-known/acme-challenge`

create a file : `/etc/nginx/snippets/letsencrypt.conf`

    location ^~ /.well-known/acme-challenge/ {
    	default_type "text/plain";
    	root /var/www/letsencrypt;
    }

---

## 4] Virtual server (HTTP only)
####  /etc/nginx/sites-available/example
    server {
        listen 80 default_server ;
        listen [::]:80 default_server ;

        server_name example.com www.example.com;

        include /etc/nginx/snippets/letsencrypt.conf;
    }

Enable virtual server

    sudo rm /etc/nginx/sites-enabled/default
    sudo ln -s /etc/nginx/sites-available/example /etc/nginx/sites-enabled/example
    sudo service nginx restart
    sudo nginx -t

---

## 5] Add Certificates
    certbot certonly --webroot -w /var/www/letsencrypt -d example.com -d www.example.com --email yourid@email.com --agree-tos

saved in : `/etc/letsencrypt/live/example.com/`

---

## 6] ssl-example.conf
create a file : `/etc/nginx/snippets/ssl-example.conf`

      ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
      ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
      ssl_trusted_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
      include /etc/nginx/snippets/ssl.conf;
---

## 7] Virtual server (HTTPS)
####  /etc/nginx/sites-available/example

      # "http" to "https"
      # "http://www.example" to "https://example"
      # "http://example" to "https://example"

      server {

          listen 80 default_server ;
          listen [::]:80 default_server ;

          server_name example.com www.example.com;

          include /etc/nginx/snippets/letsencrypt.conf;

          location / {
                  return 301 https://example.com$request_uri;
          }
      }

      # ssl server
      # "https://www.example"  to  "https://example"

      server {

          listen 443 ssl http2;
          listen [::]:443 ssl http2;

          server_name www.example.com;

          include /etc/nginx/snippets/ssl-example.conf;
          location / {
                  return 301 https://example.com$request_uri;
          }
      }


      # ssl server
      # "https://example"

      server {

          listen 443 ssl http2 ;
          listen [::]:443 ssl http2 ;

          server_name example.com;

          root /var/www/example/public;
          index index.html index.php index.htm ;

          include /etc/nginx/snippets/ssl-example.conf;

          location / {
                  try_files $uri $uri/ /index.php?$query_string;
          }

          location ~ \.php$ {
                  include snippets/fastcgi-php.conf;
                  fastcgi_pass unix:/var/run/php/php7.1-fpm.sock;
          }

          location ~ /\.ht {
                  deny all;
          }

      }



---
