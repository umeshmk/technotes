# # STEPS FOR SIMPLE VIRTUAL SERVER

#### Enable php-fpm

> sudo nano /etc/php/7.1/fpm/php.ini
> <br>#Uncomment `cgi.fix_pathinfo=0`
> <br>sudo systemctl restart php7.1-fpm

#### remove default(if default is not required) from sites-enabled

> sudo rm /etc/nginx/sites-enabled/default

#### Create a server block

- copy default configuration and then edit > cd /etc/nginx/sites-available
  <br>> sudo cp default example.com

#### Edit server block

- listen 80 `default_server` ;
  - All unmatched server name/domain goes to this `default_server`
  - `listen 80` ---- port 80 for ipv4 HTTP (Not https)
  - `listen [::]:80`---- port 80 for ipv6 HTTP (Not https)
- root `/var/www/html/example.com/public`;
- index index.html `index.php` index.htm;
- server_name `example.com` ;

> sudo nano /etc/nginx/sites-available/example.com

- Add this to file (not default server)

  <pre>
  server {
  	
  	listen 80 ;
  	listen [::]:80;
  
  	root /var/www/example/public;	
  	index index.html index.php index.htm ;
  	server_name example.com;
  
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
  </pre>

##### Server config by laravel

> https://laravel.com/docs/5.5/deployment

<pre>
    server {
        listen 80;
        server_name example.com;
        root /example.com/public;

        add_header X-Frame-Options "SAMEORIGIN";
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Content-Type-Options "nosniff";

        index index.html index.htm index.php;

        charset utf-8;

        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }

        location = /favicon.ico { access_log off; log_not_found off; }
        location = /robots.txt  { access_log off; log_not_found off; }

        error_page 404 /index.php;

        location ~ \.php$ {
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass unix:/var/run/php/php7.1-fpm.sock;
            fastcgi_index index.php;
            include fastcgi_params;
        }

        location ~ /\.(?!well-known).* {
            deny all;
        }
    }
</pre>

#### Enable site

- A symlink (use full path)
  > sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/example.com

#### Security

- `curl -I http://example.com` - **Output:** `Server: nginx/1.10.3 (Ubuntu)`
- `sudo nano /etc/nginx/nginx.conf` - **Uncomment:** `server_tokens off;`

#### GZIP Compression

> gzip on;
> <br>gzip_types text/plain application/xml;
> <br>gzip_min_length 1000;

#### PHP max upload size

- increase max upload size in php.ini

#### HTTP2 and Letsencrypt

see LetsEncrypt.md
