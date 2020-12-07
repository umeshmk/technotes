# Classes & Objects

## Basics

```php
class Foo {}                        // First (letter or underscore)
class FooBar {}                     // CamelCase

class Foo{
    public $prop = 23;              // property
    public function abc(){ }        // method (function inside class)
}

# $this - (Access only inside methods)
class Foo {
    $this = 22;                     // Error
    public function abc(){
        echo isset($this);          // Works
    }
}

# Object - (Create and Access)
$o = new Foo;
$o = new Foo();
$o = new Foo(arg1, arg2)            // "public function __construct(a1,a2)" is must

echo $o->prop;                      // property access
echo $o->abc();                     // method access

$0->prop = 11;                      // Valid to change

# Property & Method
class Foo{                          // same name is possible since different namespace
    public $bar = 34;               // $bar
    public function bar(){...}      // bar()
}
```

## Extend - Inheritance

```php
class Foo {
    public $a = 23;
    public function abc(){..}
}
class Bar extends Foo { }
$o = new Bar;                       // Bar object
$o->a;                              // Foo property
$o->abc();                          // Foo method

# Multiple inheritance - (not allowed)
class Lorem extends Foo1, Foo2{}            // error
class Lorem extends Foo1 extends Foo2 {}    // error

# Multi-level inheritance - (allowed)
class A {}
class B extends A {}
class C extends B {}

# Overriding - child (props & methods) overrides parent
class A {
    public $a ;
    public foo () {..}
    public bar ($a,$b) {..}
    public __contruct($a){..}
}
class B extends A {
    public $a ;                     // same name (props & methods)
    public foo () {..}
    public bar ($a,$b) {..}         // same number of args
    public __contruct($a,$b){..}    // same number of args not required
}

# Access Parent
class A {
    public function __construct (){..}
}
class B extends A {
    public function __construct (){
        parent::__construct();
    }
}
$o = new B(23);
```

## Constants

```php
class A {
    const PI = 3.14;                // capital letters (practice)
    const PI = $a;                  // error
}
# Access
echo A::PI;                         // 3.14
echo A::class                       // Model\A (namespace is constant too)

```

## **Autoloaders [NEEDS MORE STUDY]**

```php
class Foo {}                        // Foo,php

spl_autoload_register{
    function ($myclass){
        include $myclass.".php" ;   // {loads, require, include, require_once}
    }
}
```

## Constructor / Destructor

```php
# custom
class A {
    public function A (){..}        // same name as class
}

# Inbuilt
class A {
    public function __construct(){..}
}
class B extends A {
    public function __construct(){
        parent::__construct();
    }
}
```

## Visibity

```php
# Types
private $a                          // variable
protected Foo()                     // method
public PI                           // constant
```

## Scope-resolution **::**

```php
# Usage in 3 ways - [static variable , constants, overridden props & methods]
#
class A {
    const PI = 3.14;
    public function foo (){....}
}
class B extends A {
    public static $a = 5;
    public function foo (){         // NON-STATIC but Overrides parent
        echo self::$a;              // self class ir class B
        echo parent::foo();         // only way to access parent since overriding)
    }
}

echo B::$a;                         // 5 (static variable)
echo B::PI;                         // 3.14 (constant)
$o = new B;
$o->foo();                          // Non static method

```

## Static - (Use Props & Methods without instantiation)

```php
class A{
    public static $x = 1;
    public static function foo() { ... }
}

$a = new A;
#access property (no arrow)
$a::$x;
# access method (can use arrow)
$a->foo();
A::foo();

```

## Abstraction

```php
abstract class A {
  public $a = 11;                       // props can't be abstract
  abstract public function foo();       // cannot have even empty body "{}"
  public function bar(){....}           // non-abstract method with body
}
$a = new A;                             // error (cannot be instantiated)

class B extends A {
  public function foo(){...}            // must be implemented (Visibility must be equal or higher)
}

# abstract vs interface
// 1] Non-abstract "bar()" method is defined. This is not possible in interfaces.
// 2] extends vs implements
```

## Interfaces [visibility must be public ]

```php
interface I {
    public $a = "hello";                // error (Props not allowed)
    function foo();                     // No body. [visibility must be public only]
}
class A implements I {
    function foo() {...}                // atgs must be same too
}

# Multiple inheritance
interface A {...}
interface B {...}
interface C extends A,B {...}
```

## Traits - (code reuse)[cannot be instantiated]

```php
trait T {
    public $a = 23;
    public function foo() {...}
    public function bar() {...}
}
class A {
    use T;
    public function zip() {...}
}

```

## Overloading - (NOT ALLOWED)(same name with different args length)

```php
class Foo {
    public function bar(){...}
    public function bar($a){...}       // (NOT ALLOWED)
}
```

## Magic Methods

```php
__construct() , __destruct()
__get() , __set()
__isset() , __unset()
__sleep() , __wakeup()
__call() , __callStatic()
__toString() , __clone()
__invoke() , __set_state()
__debuginfo()

```

## Final (methods cannot be overriden)

```php
// methods
class A {
    public final $a = 55;             // error (props can't be final)
    public final function foo(){..}
}
class B extends A {
    public function foo(){...}        // error
}
# class
final class C {	}
class D extends C {	}                 // error (cannot be extended)

```

## Clone Object (uses "\_\_clone()" magic method )

```php
$c = clone $obj ;                     // a new copy of object $obj is created
```

## Comparing Objects

```php
# "=="
$a = new A;
$b = new A;

echo ($a == $b)                        // true (same class)
$a->foo = "new props/value";
echo ($a == $b)                        // false (different attributes/values)

```

## Un/Serialize Objects - (use "json_encode()" instead)

```php

class A {
    public $a = "hello";
}
$a = new A;
echo serialize($a);                 // O:1:"A":1:{s:1:"a";s:5:"hello";}
```

## Namespace

```php
# similar to folder structure but "\" is used and not"/" as in folders

File : /App/Http/Controllers/Controller.php;    // Folder & filename
namespace App\Http\Controllers;                 // Define Namespace (same as folder is a good practice)(other files can have this namespaces too.)

use I\F\Bus\Jobs;                               // use other classes
use I\R\Controller as Base;                     // "as" keyword

class Controller extends Base{...}

```

## Errors

```php
Error_reporting(E_ALL)                   // (.env)
Display_errors = On                      // (php.ini) Off in production

# Use php library like [Monolog](github.com/Seldaek/monolog)
```

## Exceptions

```php
try{
    $a = $b;
    if(!$a){
        throw new Exception ("Variable not found");
    }
}
catch(Exception $e){
    echo $e->getMessage();
}
finally{
    echo "This will always run.";
}
```

## Generators (A function which can "return" multiple times)

## References

```php
# variable_names => reference  => content
$a = 5;
$b = &$a;

echo $a;                            // 5
$b++;
echo $a;                            // 6

echo ($a == $b)?1:0 ;               // 1
echo ($a === $b)?1:0 ;              // 1

unset($a);
echo isset($a)?"yes":"no";          // no
echo isset($b)?"yes":"no";          // yes
```

## Predefined variable - see "Variables.md"

## Method Chaining

```php
class A{
    public function foo() {
        echo "foo";
        return $this;               // Required for chaining
    }
    public function bar() {
        echo "bar";
    }
}
$o = new A();
$o->foo()->bar();                   // "foobar" Chaining methods
```
