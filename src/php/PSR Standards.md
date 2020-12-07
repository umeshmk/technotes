# PSR Standards

https://www.php-fig.org/psr/psr-1/
https://github.com/jupeter/clean-code-php

Related to code-style (Used by Laravel)
PSR-1, PSR-12 and PSR-4

## Code Editor's extensions

- **php Codesniffer** - checks for errors
- **php Coding standards fixer** - Fixes code
- **php code beautifier & fixer** - Fixes code

## PSR1 - Basic coding standard

<?php .......  ?>

UTF-8 files only
Autoloading (PSR-4)
Class names in "StudlyCaps"
property names anything [$StudlyCaps, $camelCase, or $under_score ]
Constants in "UPPERCASE"
const VERSION = '1.0';
const DATE_APPROVED = '2012-06-01'
Method in "camelCase"

## PSR -4 - Autoloading

classname = filename.php
Namespace : `\Symfony\Core\Request`
File path : `./vendor/Symfony/Core/Request.php`

## PSR -12 - Extended coding guide

- No closing tag `?>` in pure php file
- indent = 4 spaces
- keywords in "lowercase"
- short form "bool for boolean", "int for integer"
- `<?php` on first line
- Instantiation with parenthesis always `new Foo()` , `new Foo($a)`
- `use MyTrait;` first line inside class.

  - 1 trait per line.
  - Next line must be a blank line.

- Property, method & constant
  - Visibility(public,private, protected) is must (>=php7.1)
  - `var` keyword is never used
  - 1 declaration per line
  - No starting with single underscore `_`
- `abstract` & `final` is written before visibility
- `static` is written after visibility

- For loop : `for ($i = 0; $i < 10; $i++) {.....}`
- ForEach loop : `foreach ($iterable as $key => $value) {....}`

- Ternary operator : `$foo ? 'foo' : 'bar';`
- Closures : `$closureWithArgs = function ($arg1, $arg2) {....};`

```php
declare(strict_types=1);

namespace Vendor\Package;

use Vendor\Package\{ClassA as A, ClassB, ClassC as C};
use Vendor\Package\SomeNamespace\ClassD as D;

use function Vendor\Package\{functionA, functionB, functionC};

use const Vendor\Package\{ConstantA, ConstantB, ConstantC};

class Foo extends Bar implements FooInterface
{
     public $foo = null;

    public function sampleFunction(int $a, int $b = null): array
    {
        if ($a === $b) {
            bar();
        } elseif ($a > $b) {
            $foo->bar($arg1);
        } else {
            BazClass::bar($arg2, $arg3);
        }
    }

    final public static function bar()
    {
        // method body
    }
}

```
