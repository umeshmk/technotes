# FRONTEND

## # BLADE

- **Introduction**

  - _Layout Master_ (`layouts/app.blade.php`)

```php
    @yield (‘title’)                # define
    @section (“sidebar”)
    ……..
    @show                           # both define & yield section
```

- _Extending layout_ (`child.blade.php`)

```php
  @extends (‘layouts.app’)

  @section (‘title’, “This is title”)

  @section (‘title’) …….………. @endsection

  @section (“sidebar”)
    @parent
    <p> Appended after parent’s content </p>
  @endsection
```

- _Usage_ : `return view (“child’);`

- **Components & slots**

  - _Component_ (`alert.blade.php`)

```php
    <div class=”alert” >
      <h1> {{ $msg }} </h1>
      {{ $slot }}
    </div>
```

- _Usage_

```php
    @component (‘alert’)
      @slot ('msg')
        # code
      @endslot
      …..This comes in $slot variable
    @endcomponent

    @component (“alert”, [‘foo’ => ‘bar’])    # Pass data directly
```

- _Aliasing_
  - `views/components/alert.blade.php`

```php
      # AppServiceProvider
      boot()	 {
       	Blade::component (“componets.alert” , “alert”);
        }
```

    - _Usage_
      - `@alert ... @endalert`

- **Display data**

```php
  {{ $name }}                  # variable
  {{ time() }}                 # Function / method
  {!! $name !!}                # Unescaped data
```

- _Unrendered_ (Vue / React js variables)

```php
    @{{ name }}
    # OR
    @verbatim
    	<p> {{ name }} </p>
    @endverbatim
```

- _JSON_
  - `<script> var a = @json ($array); </script>`
- **Control structures**

  - _IF_

```php
    @if (condition)
    …….
    @elseif (condition)
    …….
    @else
    …...
    @endif
```

- _Auth_

```php
    @auth …….… @endauth               # also @auth (“guardname”)
    @guest …….... @endguest           # also @guest (“admin”)
```

- _Switch_

```php
    @switch ($i)
    	@case(1)
    		………
    		@break
    	@case(2)
    		………
    	@default
    		………
    @endswitch
```

- _Loop_

```php
    @for ($a = 1; $a < 6; $a++)
    @foreach ($users as $user)
    @while (condition)

    @condition & @break

    # $loop
    $loop->first
         ->last
         ->index
         ->parent->first
```

- _Comment_

```php
  {{-- This is a comment. Not shown in rendered html code --}}
```

- _Php code_

  - `@php ……….. @endphp`

- **Forms**
  - `@csrf`
  - `@method (“put”);`
- **Include partial views**

  - `@include (“partials.profile”, [“foo” => “bar”])`
  - _Aliasing_

```php
    # AppServiceProvider
    boot()  {
    	Blade::include (“partials.profile”, “profile”);
    }
```

    - _Usage_ : `@profile([“foo” => “bar”])`

- **Stacks**
  - `@stack (“script”)`
  - _Usage_ :
    - `@push (“script”) .... @endpush`
- **Extend Blade**

```php
  # AppServiceProvider
  boot() {
    Blade::directive (“datetime”, function ($t) {
      return “ <?php echo $t->format (“m/d/y H:i “);
    });
  }
```

- _Usage_ : `@datetime ($time)`

## # LOCALIZATION

- see docs

## # FRONTEND SCAFFHOLDING

- **Package.json** (_axios laravel-mix lodash sass vue_)

```bash
  npm install
  npm run dev
          watch

```

- Laravel Mix configs in `Webpack.mix.js`
- **Add UI (Bootstrap, Vue, React)**
  - add package - `composer require laravel/ui --dev`
  - add - `php artisan ui react`
- **Vue**

  - `resources/js/components/ExampleComponent.vue`
  - Single file has `<template>, <script>, <style>`
  - `Vue.component (‘example’, require (‘./components/ExampleComponent.vue’))`
  - Usage :- `< vc-foo > …… </ vc-foo >`

## # COMPILING ASSETS (MIX)

- Mix make Webpack easier using `Webpack.mix.js`

```js
  mix.js (“resources/js/app.js”, “public/js”)
     .sass (“resources/css/app.scss”, “public/css”)
```

```sh
  npm install
  npm run {dev | production | watch | watch-poll}
```

- **Working with scss**

  - _URL Processing - Webpack_

    - relative url(changed) - `url("../path/foo")`
    - absolute url(unchanged) - `url(/path/to/foo)` or `url(http://path.co/to/foo)`
    - Stop rewriting

```js
mix.sass("resource/foo", "public/foo").options({
  processCssUrls: false,
});
```

- **Working with js**
  - _Vendor extraction_
    - `mix.js ("resource/foo", "public/foo").extract([“vue”])`
    - Gives 3 files `manifest.js, vendor.js, app.js` (sequence must be same in html file)
    - Why to use ? If updates are frequent then avoid compiling vendors again & again.
- **Copy** - `mix.copy("fromfoo", "Tobar")`
- **CopyDir** - `mix.copyDirectory("fromfoo", "Tobar")`

* **Version / Cache Busting**
  - Appends a _hash_ to filename
  - In webpack - `mix.js("resource/js/app.js", "public/js").version()`
  - In Html -
  ```html
  <script src = " {{ mix (“js/app.js”) }} " >
  ```
  - Only in production. Not use in development.

```js
if (mix.inProduction()) {
  mix.version();
}
```

- **BrowserSync**
  - Reload site on changes to resources
  - `mix.browserSync(“domain.test”)`
  - Run :- `npm run watch/watch-poll`
