# Features - Cookies & Sessions

## Cookies

```php
# Stored in browser.
# Part of header

setcookie();
setrawcookie();
$_COOKIE["name"]                            // get
setcookie("name", "value", time()+1000)     // set
```

## Sessions

```php
# Saves data in server
# Unique id - stored in URL/Cookie in textform
# data Text - "serialize" can be used
# sid Text - "htmlspecialchars" can be used

$_SESSION[]
session_id()
session_status()            // all functions in php,net

if(session_status == PHP_SESSION_NONE){
    session_start();
}

```

## PDO - Php Data Objects

```php
# It is interface to access Database - Use same functions for any DB (mysql, postgres, MSSql, etc)
# A Data-Access Abstraction Layer
# See "Php-the right way.md" file on this repo
```

## Datetime

```php
# Use "Carbon" library
```

## Mail

```php
# Use "SwiftMailer" library
# Use online services
mail($to , $subject, $message, $headers)        // Creates mail. Then sends mail to SMTP server
```

## Json

```php
$a = array("a" => 1 , "b" => 2 , "c" => 3 );    // Array/Objects can be use
$json = json_encode($a);                        // {"a":1,"b":2,"c":3}
$obj = json_decode($b);
$arr = json_decode($b, true);                   // "true" for associative array

```

## cURL (Client URL library)

```php
# curl : https://curl.haxx.se
# library : libcurl
# php module : PHP/cURL
# Usage : Terminal / scripts
# Usage in Laravel : **GuzzleHttpClient** library
# Protocols : http/s , ftp , post , put , http-form-upload , file , telnet , gopher , proxies , cookies , user-pass-auth , etc

```

## Memcached - (Store key=value in ram memory for caching)
