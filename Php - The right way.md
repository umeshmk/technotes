# PHP - THE RIGHT WAY 

[Php - The right way](http://phptherightway.com)

#### SOLID Principles

| | |
|-|-|
|S| Single responsibility|
|O| Open(for extensions) / closed (for modifications) |
|L| Liskov Principle (Objects of program should be able to be replaced by instances of sub-types) |
|I| Interface segregation principle (Many client-specific interface is better than 1 general-purpose interface) |
|D| Depebdency Inversions (depend upon abstractions not concretion - decoupling modules) |

#### Dependency Managements

- Package management : `composer`, `composer.json` & `composer.lock`
- *Website* : http://packagist.org
- Global installed packages : `/usr/local/bin`
- *Syntax* : 
    - `composer require twig/twig:~1.5`
    - `composer install` 
    - `composer update`
- *index.php* : `require 'vendor/autoload.php'`
- *Security of packages* : http://security,sensiolabs.org/check

#### BASIC CODING PRACTICES

*DESIGN PATTERN / ARCHITECTURE*
Way to structure code

|Pattern|Description|
|-|-|
|Factory design pattern|Simple class to create objects|
|Singleton|Access to only one instance at a particular time <br/>`__construct()` [protected] prevents creating new instance outside 
<br/>`__clone()` [private] prevents cloning of object 
<br/>`__wakeup()` [private] prevents unserializing |
|Strategy||
|Front-controller|`index.php` single entry point|
|MVC-Model-View-Controller| Most *popular* architecture|

