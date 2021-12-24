(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{445:function(e,t,s){"use strict";s.r(t);var n=s(45),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"_1-install-certbot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-certbot"}},[e._v("#")]),e._v(" 1] Install certbot")]),e._v(" "),s("h4",{attrs:{id:"https-certbot-eff-org-ubuntutrusty-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https-certbot-eff-org-ubuntutrusty-nginx"}},[e._v("#")]),e._v(" https://certbot.eff.org/#ubuntutrusty-nginx")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("sudo add-apt-repository ppa:certbot/certbot\nsudo apt-get update\nsudo apt-get install certbot\n")])])]),s("h2",{attrs:{id:"_2-ssl-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-ssl-conf"}},[e._v("#")]),e._v(" 2] ssl.conf")]),e._v(" "),s("h4",{attrs:{id:"https-cipherli-st"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https-cipherli-st"}},[e._v("#")]),e._v(" https://cipherli.st/")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048\n")])])]),s("p",[e._v("Create a file "),s("code",[e._v("/etc/nginx/snippets/ssl.conf")]),e._v(" containing:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('ssl_session_timeout 1d;\nssl_session_cache shared:SSL:50m;\nssl_session_tickets off;\n\nssl_protocols TLSv1.2;\nssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";\nssl_ecdh_curve secp384r1;\nssl_prefer_server_ciphers on;\n\nssl_stapling on;\nssl_stapling_verify on;\n\nresolver 8.8.8.8 8.8.4.4 valid=300s;\nresolver_timeout 5s;\n\nadd_header Strict-Transport-Security "max-age=15768000; includeSubdomains; preload";\nadd_header X-Frame-Options DENY;\nadd_header X-Content-Type-Options nosniff;\n\nssl_dhparam /etc/ssl/certs/dhparam.pem;\n')])])]),s("hr"),e._v(" "),s("h2",{attrs:{id:"_3-letsencrypt-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-letsencrypt-conf"}},[e._v("#")]),e._v(" 3] letsencrypt.conf")]),e._v(" "),s("p",[e._v("create a folder : "),s("code",[e._v("sudo mkdir /var/www/letsencrypt/.well-known/acme-challenge")])]),e._v(" "),s("p",[e._v("create a file : "),s("code",[e._v("/etc/nginx/snippets/letsencrypt.conf")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('location ^~ /.well-known/acme-challenge/ {\n\tdefault_type "text/plain";\n\troot /var/www/letsencrypt;\n}\n')])])]),s("hr"),e._v(" "),s("h2",{attrs:{id:"_4-virtual-server-http-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-virtual-server-http-only"}},[e._v("#")]),e._v(" 4] Virtual server (HTTP only)")]),e._v(" "),s("h4",{attrs:{id:"etc-nginx-sites-available-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc-nginx-sites-available-example"}},[e._v("#")]),e._v(" /etc/nginx/sites-available/example")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("server {\n    listen 80 default_server ;\n    listen [::]:80 default_server ;\n\n    server_name example.com www.example.com;\n\n    include /etc/nginx/snippets/letsencrypt.conf;\n}\n")])])]),s("p",[e._v("Enable virtual server")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("sudo rm /etc/nginx/sites-enabled/default\nsudo ln -s /etc/nginx/sites-available/example /etc/nginx/sites-enabled/example\nsudo service nginx restart\nsudo nginx -t\n")])])]),s("hr"),e._v(" "),s("h2",{attrs:{id:"_5-add-certificates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-add-certificates"}},[e._v("#")]),e._v(" 5] Add Certificates")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("certbot certonly --webroot -w /var/www/letsencrypt -d example.com -d www.example.com --email yourid@email.com --agree-tos\n")])])]),s("p",[e._v("saved in : "),s("code",[e._v("/etc/letsencrypt/live/example.com/")])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"_6-ssl-example-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-ssl-example-conf"}},[e._v("#")]),e._v(" 6] ssl-example.conf")]),e._v(" "),s("p",[e._v("create a file : "),s("code",[e._v("/etc/nginx/snippets/ssl-example.conf")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;\n  ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;\n  ssl_trusted_certificate /etc/letsencrypt/live/example.com/fullchain.pem;\n  include /etc/nginx/snippets/ssl.conf;\n")])])]),s("hr"),e._v(" "),s("h2",{attrs:{id:"_7-virtual-server-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-virtual-server-https"}},[e._v("#")]),e._v(" 7] Virtual server (HTTPS)")]),e._v(" "),s("h4",{attrs:{id:"etc-nginx-sites-available-example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc-nginx-sites-available-example-2"}},[e._v("#")]),e._v(" /etc/nginx/sites-available/example")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('  # "http" to "https"\n  # "http://www.example" to "https://example"\n  # "http://example" to "https://example"\n\n  server {\n\n      listen 80 default_server ;\n      listen [::]:80 default_server ;\n\n      server_name example.com www.example.com;\n\n      include /etc/nginx/snippets/letsencrypt.conf;\n\n      location / {\n              return 301 https://example.com$request_uri;\n      }\n  }\n\n  # ssl server\n  # "https://www.example"  to  "https://example"\n\n  server {\n\n      listen 443 ssl http2;\n      listen [::]:443 ssl http2;\n\n      server_name www.example.com;\n\n      include /etc/nginx/snippets/ssl-example.conf;\n      location / {\n              return 301 https://example.com$request_uri;\n      }\n  }\n\n\n  # ssl server\n  # "https://example"\n\n  server {\n\n      listen 443 ssl http2 ;\n      listen [::]:443 ssl http2 ;\n\n      server_name example.com;\n\n      root /var/www/example/public;\n      index index.html index.php index.htm ;\n\n      include /etc/nginx/snippets/ssl-example.conf;\n\n      location / {\n              try_files $uri $uri/ /index.php?$query_string;\n      }\n\n      location ~ \\.php$ {\n              include snippets/fastcgi-php.conf;\n              fastcgi_pass unix:/var/run/php/php7.1-fpm.sock;\n      }\n\n      location ~ /\\.ht {\n              deny all;\n      }\n\n  }\n')])])]),s("hr")])}),[],!1,null,null,null);t.default=a.exports}}]);