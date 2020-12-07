# Control structures

## IF

```php
if(cond){..}else{...}
if(cond){..}elseif{...}else{...}

```

## WHILE / DO WHILE

```php
while(cond){...}
do{...}while(cond)          // runs atleast once

```

## FOR

```php
for($i=0 ; $i < 5 ; $i++){...}

```

## FOREACH [used for array only]

```php
foreach($a as $value){...}
foreach($a as $key => $value){...}

```

## BREAK/CONTINUE

```php
break;              // 1 loop
break n;            // n loop
continue;
continue n;

```

## SWITCH

```php
switch(case){
    case 1:         ...
        break;

    case "foo":     ...
        break;

    case default:   ...
        break;
}

```

## DECLARE

```php
declare (directive);         // starting of code [ directive = ticks, encoding, strict-typing ]
.....

```

## RETURN

```php
return ;        // void
return $a;      // depends on datatype of $a

```

## REQUIRE - "fatal error" if not found

```php
require "file.php"          //

```

## INCLUDE - "warning" if not found

```php
include "file.php"      // variables outside can be accessed inside file
"<?php .... ?> "        // MUST be written inside file.
"./a.php"               // current folder
"../foo/a.php"          // parent folder

```

## REQUIRE_ONCE / INCLUDE_ONCE

```php
require_once("file.php")
include_once("file.php")

```

## GOTO

```php
goto foo;
echo "not printed";
foo : { echo "printed"; }

To jump "in/out" of functions      // ERROR
To jump "in" loop                  // ERROR
To jump "out" loop                 // WORKS

```
