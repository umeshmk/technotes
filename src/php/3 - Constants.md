# Constants

- Access-anywhere
- static (shared by all instances)

## Define - outside any class

```php
define("PI",3.14);      // UPPERCASE
echo PI;                // 3.14
PI = 333;               // error [Read-only]

```

## Define - inside/outside any class

```php
const PI = 3.14;
class A {  const PI = 3; }
$a = new A();
echo $a->PI;            // Gives nothing.
echo A::PI;             // 3
echo PI;                // 3.14

```

## Magic constants(Predefined) - Not actually constants

```php
__LINE__
__FILE__
__TRAIT__
__DIR__
__FUNCTION__
__CLASS__
__METHOD__
__NAMESPACE__
```
