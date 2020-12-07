# Basic syntax & Data types

:::danger Deprecated
I have stopped learning Php due low market demand & confidence.
This notes were written years ago.
:::

## Websites

> php.net | phptherightway.com | phpbestpractices.org | OOP php on Udemy | Search on Github | [Awesome PHP - Github](https://github.com/ziadoz/awesome-php)

## Usage

- Server side scripting (needs parser, server and browser)
- Command line scripting (parser) [cron in linux / task schedular]
- Desktop apps

## Basics

- Type : `procedural / oop / both`
- Output : `text/html/pdf/flash/images`
- Database : `mysql/pdo/odbc` or `sockets for couchDB, etc`
- Protocols : `LDAP/IMAP/SNMP/NMTP/POP3/HTTP/COM(in windows)`
- _PECL_ : Repository for PEAR packages

```php
`<?php .... ?>`                     # Opening-closing tag [Can omit end-tag incase pure php file]
phpinfo() ;                         # php version & extensions enabled information
php -S localhost:8000               # php serve own server (Nginx is better)

echo "hi $firstname" . $lastname ;  # print/display
echo "My name is \"umesh\"";        # \ backslash to escape character
print_r($a);                        # displays even arrays but echo doesn't
print_r "<pre>" . $Myarray . "</pre>"; # Nicely displayed
htmlspecialchars($a);               # Text sanitize, eg: "<" to "&lt;"

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

## Datatypes

- `double` is same as `float`. Hence always use `float`

```php
var_dump($a);                       # print variable datatype and value
gettype($a);                        # Print variable datatype
settype($a, "integer");             # convert variable datatype

if (is_string($a) && is_int($b))    # check variable datatype

$a = (int) $b ;                     // Type-casting
```

### Boolean

```php
FALSE = false = 0 = "" = "0" = NULL = empty_array[]
```

**NaN ........ ? google it**

### Integers

```php
0b111       # Binary
0a213       # Octal
910         # Decimal
0x5a2fee    # Hexadecimal

"+" or "-"                      # sign
2 billion in 32-bit variable    # size (double for 64-bit)
// Note : If exceeds then it is considered as a float
# Type-casting to int for
NaN = 0
infinity = 0
```

### Float

```php
1.234   1.2e3   7E-10

# Use "math()" for higher precisions
# Never compare two floating variables directly for equality. Because float is internally represented as binary. This can give precision error.
```

### Strings

```php
# 250 character code & no unicode support
# Quotes
$a = "Hii"
echo "$a"           // Hii     [Variable is parsed]
echo '$a'           // $a      [Variable is NOT parsed]
# Parenthesis
echo "$a"           // Hii
echo "${a}bc"       // Hiibc
echo "${b}bc"       // abc      [where $b = "a"]
echo "${$b}bc"      // Hiibc    [where $b = "a"]
echo {$a}           // error
echo "{$a}"         // Hii
# String as array
$a[23] == $a{23}
# String to Numbers (automatic conversion)
echo 10 + "1.5"     // 11.5     [./e/E has 'Float' as datatype. Else 'Int']
echo 10 + "b3"      // error
echo 10 + "3b"      // 13
echo "3b" + 10      // 13
echo "b3" + 10      // error
# Others
TRUE = "1"
FALSE = NULL = ""
function __toString() { ... }    // return anything in string only
"Serialization"       // (Avoid it.) Converts any php value to sting for storing like blobs in DB.
```

### Arrays

```php
# Ordered maps (in key-value form)
[ arrays, list, hashtable. dictionary, collection, stack, queue ]
# define
$a = array(k1 => v1, k2 => v2);
   = [k1 => v1, k2 => v2];
$a[3] = a{3}          // same
# Key
"8"                 // 8
"08"                // invalid
"8.7"               // 8
true                // 1
NULL                // empty ""
Array/object        // invalid
same key is used    // last one overrides all previous keys

$a[b]               // invalid
$a["b"]             // valid
$a[$b]              // valid
$a["$b"]            // invalid

# others
unset($a[3])        // 4th element is removed
unset($a)           // removes $a (Not just empty array but variable)

# Type casting
[int,float,string,boolean,Null]  // gives array of length 1
[object]                         // gives array with properties(& not functions) as elements

```

### Object

```php
# stdClass - creates anonymous objects. Class is predefined in php.
$emptyObject = new stdClass();
# But NOT a base class for all objects
class a {...}
$o = new a();
echo ($a instanceof stdClass)?'Y':'N';   // No
# use of stdClass
$j = {"name":"umesh", "age":"28"};
$o = json_decode($j);                    // $o is stdClass object
echo $o->name;                           // umesh

# Type casting
NULL        // empty object of stdClass
array       // elements(key-value) are converted to object properties
```

### Null

```php
$a = NULL = null;
is_null($a)             // 1
$a = [];
is_null($a)             // gives nothing. (niether 1 nor 0)
```

### Callback/callable

```php
# A function/method can be called with its name.
# For any built-in/user-defined functions [ except : array(),echo(),empty(),eval(),exit(),isset(),list(),print(),unset() ]
call_user_func("foo")                   // foo(){..}
call_user_func("Fooclass", "foo")       // class Fooclass{ foo(){..}}
call_user_func("Fooclass::foo")         // class Fooclass{ static foo(){..}}
call_user_func($foo_obj, "foo")         // $foo_obj = new Fooclass()
```
