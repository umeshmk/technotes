# PHP - BASIC SYNTAX & DATA TYPES

#### # Websites
 
 > php.net | phptherightway.com | phpbestpractices.org | OOP php on Udemy | Search on Github | [Awesome PHP - Github](https://github.com/ziadoz/awesome-php)

#### # Usage

- Server side scripting (needs parser, server and browser)
- Command line scripting (parser) [cron in linux / task schedular]
- Desktop apps

#### # Basics

- Type : `procedural / oop / both`
- Output : `text/html/pdf/flash/images`
- Database : `mysql/pdo/odbc` or `sockets for couchDB, etc`
- Protocols : `LDAP/IMAP/SNMP/NMTP/POP3/HTTP/COM(in windows)`
- *PECL* : Repository for PEAR packages

```php
# Opening-closing tag [Can omit end-tag incase pure php file]
`<?php .... ?>`
# php version & extensions enabled information
phpinfo() ;
# print/display
echo "hi $firstname" . $lastname ;
# Text sanitize
htmlspecialchars($a);        // eg: "<" is converted to "&lt;"

// Single-line comment
# Single-line comment
/* Multi-line comment */

// Immediate next line works even after closing `?>` tag 
<?php if(a==1) ; ?>
Print this
<?php else ; ?>
Else print this
<?php endif; ?>
```

#### # Datatypes

- `double` is same as `float`. Hence always use `float`

```php
# print variable datatype and value
var_dump($a);
# Print variable datatype
gettype($a);
# check variable datatype
if (is_string($a) && is_int($b))
# convert variable datatype 
settype($a, "integer");
$a = (int) $b ;                     // Type-casting
```

> Boolean
```php
FALSE = false = 0 = "" = "0" = NULL = empty_array[]
```
**NaN ........ ? google it**

> Integers
```php
0b111       # Binary 
0a213       # Octal 
10          # Decimal 
0x5a2fee    # Hexadecimal

"+" or "-"                      # sign
2 billion in 32-bit variable    # size (double for 64-bit) 
// Note : If exceeds then it is considered as a float
# Type-casting to int for
NaN = 0
infinity = 0
```
 






























