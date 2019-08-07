# PHP - CONSTANTS

- read-only | UPPERCASE | Access-anywhere
- static (shared by all instances)

```php
# Define - outside any class
define("PI",3.14);
echo PI;                // 3.14

# Define - inside/outside any class
const PI = 3.14;
class A {  const PI = 3; }
$a = new A();
echo $a->PI;            // Gives nothing.
echo A::PI;             // 3
echo PI;                // 3.14

# Magic constants(Predefined) - Not actually constants
__LINE__, __FILE__, __TRAIT__, __DIR__, __FUNCTION__, __CLASS__, __METHOD__, __NAMESPACE__, 
```