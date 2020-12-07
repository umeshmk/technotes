# Functions

- `function abc (arg1, arg2, ...) {...}`
- Overloading not supported
- _Case-insensitive_

## Arguments

### pass by value

```php
foo($a);
function foo ($b) { ... }           // $b is clone of $a

```

### pass by reference

```php
foo($a);
function foo (&$a){ ... }           // $a is same in/out of function

```

### default value

```php
function foo ($a = "default") {...}
function foo ($a = $x) {...}        // error [ Only constants ]
function foo ($a = bar()) {...}     // error [ Only constants ]
function foo ($b = &$a) { ...}      // error [ Only constants ]

function foo ($a = "foo", $b) {...} // works - WRONG practice
function foo ($b, $a = "foo") {...} // works - CORRECT practice

```

### TYPE-DECLARATION / TYPE-HINT

```php
function foo (int $a) { ... }
foo(123);
foo(12.3);                          // 12 (auto type-casting)
foo("123");                         // no error (auto type-casting)
foo("a123");                        // error

function foo (Request $r) { ... }   // instance of class

```

### STRICT-TYPE (php7) - (auto type-casting is disabled) [limited to that file only & not outside]

```php
function foo (int $a) { ... }
foo(123);
foo(12.3);                          // error
foo("123");                         // error

```

### ANY-LENGTH ARGS

```php
function foo (...$a){ echo count($a) ; }
foo(2)                              // 1
foo(2,7,3);                         // 3
```

## CLOSURE/ANONYMOUS FUNCTIONS

```php
$foo = function (){...};            // Uses "Closure" class
$foo();                             // call using variable name not function name
```
