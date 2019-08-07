# PHP - CONTROL STRUCTURES

```php
# IF
if(cond){..}else{...}
if(cond){..}elseif{...}else{...}

# WHILE / DO WHILE
while(cond){...}
do{...}while(cond)          // runs atleast once

# FOR
for($i=0 ; $i < 5 ; $i++){...}

# FOREACH [used for array only]
foreach($a as $value){...}
foreach($a as $key => $value){...}

# BREAK/CONTINUE
break;              // 1 loop
break n;            // n loop
continue;
continue n;

# SWITCH
switch(case){
    case 1:         ... 
        break;
    
    case "foo":     ...
        break;

    case default:   ...
        break;
}

# DECLARE
declare (directive);         // starting of code [ directive = ticks, encoding, strict-typing ]
.....

# RETURN
return ;        // void
return $a;      // depends on datatype of $a

# REQUIRE - "fatal error" if not found
require "file.php"          //

# INCLUDE - "warning" if not found
include "file.php"      // variables outside can be accessed inside file
<?php .... ?>           // MUST be written inside file.
"./ "                   // current folder
"../ "                  // parent folder

# REQUIRE_ONCE / INCLUDE_ONCE 
require_once("file.php") | include_once("file.php")

# GOTO
goto foo;
echo "not printed";
foo : { echo "printed"; }

jump "in/out" of functions      // ERROR
jump "in" loop                  // ERROR
jump "out" loop                 // WORKS

```

