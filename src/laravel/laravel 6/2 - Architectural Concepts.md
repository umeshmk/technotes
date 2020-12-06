# ARCHITECTURAL CONCEPTS

### # REQUEST LIFECYCLE

- **public/index.php**
  - require => `/vendor/autoload.php`
  - require once => `$app` as instance of `bootstrap/app.php`
  - `$app` is new instance application which is indeed a **service-container**
  - _Request is sent to `http or console` kernels_
    - `app/Http/Kernel.php`
    - `app/Console/Kernel.php`
  - _Http Kernel works on_
    - Tasks before request handling :- _logs, error handling, env variables, etc_
    - Middlewares :- _session, maintenance mode, csrf, etc._
    - Takes _http request_ gives _http response_
    - Load _service providers_ from `config/app.php`
      - First call for all providers => `register()`
      - Then call each providers => `boot()`
      - examples:- _database, queues, validation, routing, etc_
    - Dispatch request to router `route/controller`
    - Return _reponse_.

### # SERVICE CONTAINER

- Makes dependency (finding classes) easier by **Dependency Injection**.
- **Binding**
  - Registering _Class_ or _Interface_(Service providers) in the _container_ is called binding
  - Makes finding dependent classes easier by
    - Using _namespaces_ instead of file path
    - Giving _instance_ of required (dependent) classes whenever called.
      - new instance [`bind()`] => eg:- _User model instance_
      - same instance [`singleton()`] => eg:- _Request instance_
  - `register()` in service provider does binding.
  - **No need to bind** class if it does not depend on any _interfaces_
- **Access container in service provider** => `$this->app`
- **Simple Binding [bind()]**
  - Returns a _new instance object_
  - Example:-
    ```php
      $this->app->bind(“HelpSpot\API”, function($app){
        return new HelpSpot\API($app->make(“HttpClient”));
      });
    ```
- **Binding a Singleton [singleton()]**
  - Resolved only once
  - Returns same instance each time
  - Example:-
    ```php
      $this->app->singleton(“HelSpot\API”, function($app){
        return new HelpSpot\API($app->make(“HttpClient”));
      });
    ```
- **Binding Instance [instance()]**
  - Bind existing object instance
  - Example :
    ```php
      $obj = new HelpSpot\API(new HttpClient);
      $this->app->instance(“HelpSpot\API”, $obj);
    ```
- **Binding primitives**
  - If class requires other class instance and primitive (_int, string etc_) value too
  - Example:-
    ```php
    $this->app->when(“App\Http\Controller\UserController”)
              ->needs(“$anyVariable”)
              ->give($value);
    ```
- **Binding Interface To Implementation**
  - Say => `class RedisEventPusher implements EventPusher`
  - Then if _EventPusher_ obj is called (type-hint) then it gives _RedisEventPusher_ object
  - Example:-
    ```php
    $this->app->bind(
     	“App\Contracts\EventPusher”,
     	“App\Services\RedisEventPusher”
    );
    ```
- **Resolving**
  - _make()_
    - `$api = $this->app->make(“HelpSpot\API”);`
  - _resolve()_
    - `$api = resolve(“HelpSpot\API”);` (If \$this->app is not accessible)
  - _Automatic Injection (Type-hint)_
    - Example:-
      ```php
      public function  __construct (App\Model\Users $users){
        $this->users = $users;
      }
      ```

### # SERVICE PROVIDER

- **Bootstraped** = registering things like _bindings, event listeners, middleware and routes_
- **Register service provider** in `config/app.php`
- **Writing a new Service provider**
  - `php artisan make:provider RiakServiceProvider`
  - Must extend `Illuminate\Support\ServiceProvider` class
  - _2 basic methods_
    - `register()`
      - Only binding a class into container
    - `boot()`
      - Called after all providers are registered.
      - Can type-hint dependency if needed
  - Register service provider in _config/app.php_
- **Deferred services** loaded when required

### # FACADES

- **STATIC** interface to classes in service container
- **Working**
  - A new facade class extends baseclass `Illuminate\Support\Facades\Facade`
  - Base class uses `_callStatic()` magic-method to pass commands to object resolved from container.
  - example:
    ```php
    class Cache extends Facade{
      // No static methods like get()
      protected static function getFacadeAccessor() {
      // return name of service container binding
      // Then laravel resolves name to object and runs get() on obj
      return ‘cache’;
    }
    ```
- **Using any class as a**
  - _Dependency injection_
    - Import => `use App\Contracts\Publisher;`
    - Apply => `public function publish(Publisher $p)`
  - _Facade_
    - Import => `use Facade\App\Contracts\Publisher;`
    - Apply => `Publisher::anyMethod()`

### # CONTRACTS

- **Set of interfaces**
  - eg: `Illuminate\Contracts\Queue\Queue`
  - Laravel Implements _Queue_ with variety of drivers
- **Facades vs Contracts**
  - Facade is easy and not type-hinted. (Not explicit dependency)
  - Contract is type-hinted (Explicit dependency)
