# PHP - THE RIGHT WAY 

[Php - The right way](http://phptherightway.com)

#### # SOLID Principles

| | |
|-|-|
|**S**| Single responsibility|
|**O**| Open(for extensions) / closed (for modifications) |
|**L**| Liskov Principle (Objects of program should be able to be replaced by instances of sub-types) |
|**I**| Interface segregation principle (Many client-specific interface is better than 1 general-purpose interface) |
|**D**| Depebdency Inversions (depend upon abstractions not concretion - decoupling modules) |

#### # Dependency Managements

- Package management : `composer`, `composer.json` & `composer.lock`
- *Website* : http://packagist.org
- Global installed packages : `/usr/local/bin`
- *Syntax* : 
    - `composer require twig/twig:~1.5`
    - `composer install` 
    - `composer update`
- *index.php* : `require 'vendor/autoload.php'`
- *Security of packages* : http://security,sensiolabs.org/check

#### # BASIC CODING PRACTICES

*DESIGN PATTERN / ARCHITECTURE*

Way to structure code

|Pattern|Description|
|-|-|
|**Factory**|Simple class to create objects|
|**Singleton**|Access to only one instance at a particular time <li/>`__construct()` [*protected*] prevents creating new instance outside <li/>`__clone()` [*private*] prevents cloning of object <li/>`__wakeup()` [*private*] prevents unserializing |
|**Strategy**||
|**Front-controller**|`index.php` single entry point|
|**MVC** (Model-View-Controller) | Most *popular* architecture|

*DEPENDENCY INJECTION*

- *Inversion-of-control* / *Dependencies inversion*  problem is solved by this dependency injection
- Dependencies can imported in 3 ways
    - *Constructor* : `function __construct ( Bar $b ) { ... }`
    - *Methods* : `function foo ( Bar $b ) { ... }`
    - *Property* : `public $b = new Bar ();`

#### # PDO
- Common interface to connect to many databases
    
      $conn = new PDO("mysql:host=localhost;dbname=foo", "user", "password");
      $query = $conn->query("select * from bar");    
      $row = $query->fetch(PDO::FETCH_ASSOC);    
      echo htmlentities($row["anycolumn"]);

- Prevent SQL Injections
      $conn = new PDO("mysql:host=localhost;dbname=foo", "user", "passsword");
      $query = $conn->prepare("select * from bar where id = :id");
      $id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT );
      $query->bindParam( ":id", $id, PDO::PARAM_INT);
      $query->execute();





