# Variable

## Basics

```php
$PHP != $php        // case-sensitive
$abc | $_foo        // First character : *Letter or underscore *
$this               // special variable
# Assigned
$a = "umesh"        // by value
$b = &$a            // By reference
//$b = &foo()       // invalid
```

## Scope (global & static variables)

```php
// gobal variable (ie not in any function)
$a = "umesh"
function foo() { echo $a; }             // error
function foo() { global $a; }           // works with "global" keyword
function foo() { echo $GLOBALS["a"]; }  // works with "global" keyword

# static variable (scope ends but value is stored)
function add() { static $a = 1;
                 echo $a;
                 $a++; }
add();                                  // 1
add();                                  // 2

# Static variables - cannot be functions
static $a =23;              // right
static $b = foo();          // wrong

# reference/pointer - normal variable
$b="foo"
global $a = $b              // $a = pointer to $b
# reference/pointer - static variable
static $b="foo"
global $a = $b              // $a = NOT pointer [wrong since static]
```

## `$$` - variable variables

```php
$a = "hello"
$$a = "world"
echo $a . ${$a}      // hello world
echo $a . $hello     // hello world

# In array
echo $$a[2]         // wrong (2 meanings as below)
echo ${$a[2]}       // right
echo ${$a}[2]       // right

```

## Superglobal variables

```php
$GLOBALS
$_SERVER
$_GET | $_POST | $HTTP_RAW_POST_DATA
$_FILES
$_REQUEST | $_SESSION | $_ENV
$_COOKIE
$php_errormsg
$http_response_header
$argc | $argv
```
