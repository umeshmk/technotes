# PHP - OPERATORS

```php
# Basics
!   ++   --     // Unary
+   -   *   /   // Binary
?:              // Tertiary
( )             // Use brackets to force precedence

# Arithmatic
+ - * / %

# Assignment
=               // "equals =" and NOT "equal to =="
$a += 5         // $a = $a + 5
$a = $obj       // $a is pointer to object. Use "clone()" to duplicate object

# Bitwise - On specific bits in integer only
&  |  ^  -  
<<  >>          // bits shifted on either ends is discarded

# Comparison
==      !=      // Equal to 
===     !==     // strict equal to
<  >            // less/greater than
<=   >=
<=>             //spaceship (php7)
$a ?? 23        // Null coalesce (IF statement) [if $a is undefined/null then 23 is returned]
$a ?? $b ?? $c  // chaining for quick IF..ELSE like checks

# Increment/decrement
++$a    $a++    $a--    --$a

# Logical
AND   OR   XOR
!   ||  &&         // (AND) - (&&) has diferent precedence. Use either words "AND-OR" or Symbol "&&-||" combination

# Type
$a instance_of MyClass
$a instance_of MyClassParent        // MyClass extends MyClassParent
$a instance_of MyInterface          // MyClass implements MyInterface
```
