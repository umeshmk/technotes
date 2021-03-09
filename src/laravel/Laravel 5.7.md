# GETTING STARTED

### # RELEASE

- Laravel Nova admin Dashboard
- Optional Email Verification (auth scaffholding)
- Support for guest users in authorization gates & policies

### # INSTALLATION

- **Install**
  - `composer create-project --prefer-dist laravel/laravel blog`
- **Basic Configuration**
  - _Entry point_ `“public/index.php”`
  - _Check config folder_
  - _Folder permissions_ `[sh-start.sh]`
  - _.env file_

### # CONFIGURATION

- Using **DotEnv** php library for _.env_
  - Any variable in _.env_ can be overwritten by _server/system_ environment variables
  - `$_ENV (global php variable)`
  - _config files_ - `‘debug’ => env(“APP_DEBUG”, false)`
  - `$environment = App::environment()`
- **Access config** :- `$a = config::(‘app.timezone’)`
- **Maintenance mode**
  - _Down_ - `php artisan down` (no queued jobs handled)
  - _Up_ - `php artisan up` (queue resume)
  - _View file_ :- `/views/errors/503.blade.php`
  - **Envoyer** is alternative to maintenance mode with zero-downtime.

### # DIRECTORY

- _app, bootstrap, config, database, public, resources, routes, storage, test, vendor_
- **app**
  - _Console, Exceptions, Http, Providers_ => Created by default
  - _Broadcast, Events, Jobs, Listeners, Mail, Notifications, Policies, Rules_ => created by artisan `make:xyz` command

### # DEPLOYMENT:

- Nginx configuration
- Optimizing

  ```sh
  composer install --optimize-autoloader --no-dev
  php artisan config:cache
  php artisan route:cache
  ```

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

# BASICS

### # ROUTES

- Folder `routes` with 4 files _[web / api / console / channel]_
- **App\Providers\RouteServiceProvider**
  - Uses _web_ middleware to `routes/web,php`
  - Uses `/api` prefix to url with _api_ middleware to `routes/api.php`
- **Methods**
  ```php
    Route::get (“url”, callback); [get, post, put, patch, delete, options]
         ::match ([‘get’, ‘post’], “url”, callback);
         ::any(“url”, callback);
         ::except([‘get’, ‘post’], “url”, callback);
         ::redirect (‘/here’, ‘/there’);
         ::redirect (‘/here’, ‘/there’, statusCodeLike301);
         ::view (‘ url’, ‘viewFile ‘, [“key” => “value”]);
  ```
- **CSRF Protection** (in Forms) [*post, put, delete*]
  - `@csrf`
- **Route Parameters** (Note: cannot use ‘-’ for parameter name)
  ```php
  Route::get (“user/{ id }/photos/{ $pid }”, function ($id, $pid) { …..});
       ::get (  “user/{ name? }”, function ($name = ”Umesh”) { …..});
  ```
- **Regular Expression**
  ```php
  Route::get (“user/{ id }”, function ($id) { …..})->where (“id”, “[0-9]+”);
  ```
  - _Global Route Parameter_ (Applys to all routes parameters with same name)
    - In _RouteServiceProvider_ method `boot()`
    - `Route::pattern (‘id’, ‘[0-9]+’);`
- **Named Routes**
  ```php
  Route::get (“url”, callback)->name (“myroute”);
  ```
  - _Making urls_
    - `route (“myroute”, [“id” => 232]);`
  - _Redirect url_
    - `redirect()->route (“myroute”, [‘id’ => 232]);`
- **Route Group**

  - Merged => _Middlewares, where_
  - Appended => _nameprefixes, namespaces, urlprefixes_

  ```php
    Route::middleware ([‘first’, ‘second’]->group (function() {
      Route::get (‘/’, callback);
      Route::post (‘user/create’, callback);
    });

    Route::namespace (‘Admin’)->group ( function() { …… } );
    # Namespace of group will be  App\Http\Controllers\Admin

    Route::domain (‘ { username }.myapp.com’)->group ( function() {
      Route::get (project/{ id }’, function ($username, $id) { ….});
    });
    Route::prefix (‘admin’)->group (function() { …. });
    Route::name (‘admin’)->group (function() { ….});
  ```

- **Route-Model binding**
  - _Implicit_
    ```php
      Route::get (“users/{user}”, function(App\Models\User $user){ …. });
    ```
    - **Note** : variable `$user` and parameter `{ user }` has same name.
    - If want to use **slug** instead of **id** as default key for `users` database table
      - In `App/Models/User` - `public function getRouteKeyName() { return “slug”; }`
  - _Explicit_
    - Same as Implicit but adding In _RouteServiceProviders_ method `boot()`
    - `Route::model(‘user’, ‘App\Models\User::class);`
- **Fallback Route** (Always at end of all routes)
  ```php
    Route::fallback (callback);
  ```
- **Rate Limiting**
  - Throttle middleware is to be assigned to _route / group_
  ```php
    # throttle:60,1 => 60 request / 1 minute
    Route::middleware (‘auth:api’, ‘throttle:60,1’)->group(function() {.....});
  ```
- **Form method spoofing**
  - `@method(‘put’)`
- **Accessing current route**

  - `Route::current();`
    - `[current(), currentRouteName(), currentRouteAction()]`

  ### # MIDDLEWARES

- **Folder** => `app/Http/Middleware`
- **Command** => `php artisan make:middleware CheckAge`
- **Register** => `app/Http/Kernel.php`
  - _Global Middlewares_ => `$middleware`
  - _Individual route by adding key name_ => `$routeMiddleware`
  - _web / api routes group_ => `$middlewareGroups`
  - _Sorting middleware_ => `$middlewarePriority`
- **Run** => `handle()` in middleware
  - _Before request_
    ```php
      public function handle ($request, Closure $next){
        # do work here
        return $next ($request);
      }
    ```
  - _After request_
    ```php
      public function handle ($request, Closure $next){
        $response = $next ($request);
        # do work here
        return $response;
      }
    ```

### # CSRF PROTECTION

- **CSRF** => _Cross-site request forgery_
  - `VerifyCsrfToken` Middleware added in `web` middleware group.
  - Unauthorized commands by authenticated user
- Laravel automatically generates _csrf-token_ for each active session
- **Blade directive in each form** => `@csrf`
- **Exclude some URI**
  - In `VerifyCsrfToken` => `$except`
- **x-csrf-token** (Ajax requests)
  - _Add_ =>
  ```php
  <meta name="csrf-token" content="{{ csrf_token() }}">
  ```
  - _Axios HTTP Library_
    - Default library by laravel
    - `csrf` is applied to all ajax request in `resources/js/bootstrap.js`
  - _Jquery_
    ```js
    $.ajaxSetup ([
      headers : {
        ‘X-CSRF-TOKEN’ : $(‘meta[name = “csrf-token”]’).attr(‘content’)
      }
    ]);
    ```
- **x-xsrf-token**
  - Csrf stored in _cookie_ having `“XSRF-TOKEN”` key
  - _Angular, Axios, etc_ **automatically** uses this key to set the `x-xsrf-token` header

### # CONTROLLERS

- **Path** : `app/Http/Controllers`
- Extends **Base Controller** (optional) provide methods like
  - `middleware(), validate(), dispatch()`
- **Use**
  ```php
    Route::get (“uri”, “Media\PhotoController@index“);
  ```
- **Invokable**
  - Only 1 method `__invoke()` in controller
  - _No @action_
    ```php
    Route::get (“url”, “MyController”);
    ```
- **Middleware**
  - In `__construct()` method we can add middlewares
    ```php
    $this->middleware(‘auth’);
    $this->middleware(‘log’)->only(‘index’);
    $this->middleware(‘subscribe’)->except(‘index’);
    ```
- **Resource / CRUD**

  - _Create_ - `php artisan make:controller MyController --resource`
  - _Only/Except_
    ```php
      Route::resource(“url”, “MyController”) ->only ([‘index’, ‘create’ ]);
                                             ->except ([“destroy”, “store” ]);
    ```
  - _Actions_
    ```php
      GET 		 :  index(), create(), show(), edit()
      POST		 :  store()
      PUT/PATCH	 :  update()
      DELETE	 :  destroy()
    ```
  - _Urls_
    ```php
    /photos			        :	index(), store()l
    /photos/create 		    :	create()
    /photos/{ photo }/edit	:	edit()
    /photos/{ photo }		:	show(), update(), destroy()
    ```
  - _Naming_
    ```php
    Route::resource (‘photos’, ‘PhotoController’)->name ([
    	‘create’ => ‘photos.build’
    ]);
    ```
  - _Parameters_
    - _Singularized_ version of `Photos` ie `photo`
    - Override `photos / { photo }` with `photos / { admin_photo }`
      - `………->parameters ([‘photos’ => ‘admin_photo’]);`
  - _\_\_contruct()_
    ```php
    public function __contruct (UserRepository $user) {
      $this->name = $user->name;
    }
    ```
  - _Route Parameter & Dependency_

    - First dependencies then parameters
      - `public function store (Request $r, $id) { …… }`

  - _Route caching_
    ```php
    php artisan route:cache
    php artisan route:clear
    ```

### # REQUESTS

- **use Illuminate\Http\Request;**

  ```php
  public function store (Request $request, $idparameter) { ….. }

  $request->path()             # foo/bar
          ->url()              # http://abc.com/foo/bar
          ->fullUrl()          # http://abc.com/foo/bar?id=34&name=umesh
          ->method()           # get
          ->isMethod(‘post’)   # true/false
  ```

- **Input checking for malicious code**
  - Middlewares (global)
    - _TrimStrings_ and _ConvertEmptyStringsToNull_
- **Retrieving Input**
  ```php
  $request->all()
          ->input (“name”);
          ->input (“name”, “umesh”);
          ->input (“products.0.name”);    # If arrays then use dot operator
          ->Input (“products.\*.name”);   #  Gives array of all names
  ```
- **Retrieving Input (query string)**
  ```php
  $request->query (‘name’);
          ->query (‘name’, ‘Umesh’);
          ->query();                      # Gives all query inputs
  ```
- **Retrieving Input (dynamic properties)**
  ```php
  $request->name                           # Any form field names
          ->age
  ```
- **Retrieving input (JSON)**
  ```php
  $request->input (“user.name”);
  ```
- **Retrieving Input (portion only)**

  ```php
  $request->only ([“name”, “password”]);
          ->only (“name”, “password”);
          ->except (“name”);
  ```

- **Determine Input (present / absent)**
  ```php
  $request->has (“name”);
          ->has ([“name”, “age”]);
          ->filled (“‘name”);            # If present and NOT EMPTY
  ```
- **Old Input**
  - Handled automatically if built-in solution is used
  - _Only 1 next request the input is saved_
    ```php
    $request->flash();
            ->flashOnly ([‘name’, ‘age’];);
            ->flashExcept ([‘password’]);
    ```
  - _Flash & redirect_
    ```php
    return redirect (‘myform’)->withInput();
                              ->withInput ([‘name’]);
    ```
  - _Retrieve Old Input_
    ```php
    request->old (‘name’);
    # < input tupe=”text” value=”{{ old (‘name’) }}” >
    ```
- **Cookies (retrieve)**
  ```php
  Cookie::get (‘name’)` & `$request->cookie (‘name’)
  ```
- **Files**
  - _Retrieve uploaded files_
    ```php
      $request->file (“photo”);
              ->photo;
              ->hasFile (“photo”);
    ```
  - _Valid file_
    - `$request->file (“photo”)->isValid();`
  - _File path & extension_
    ```php
    $request->file (“photo”)->path();
                            ->extension();
    ```
  - _Store uploaded files_
    - `config/filesystems.php`
    - `store()`
      - _uniqueid_ as filename
      ```php
      $request->file (“photo”)->store (“path”);
              ->store (“path”, ”s3”);
              ->storeAs (“path”, “filename.jpg”, “s3”);
      ```

### # RESPONSES

- **Create Response**

  - _String & Arrays_
    ```php
    return “hello world”;
           [3, 22, 76];
    ```
  - _Objects_

    ```php
    return response (“hello”, 200)->header (“content-type”, “text/plain”);
                                  ->header (“foo”, “bar”);

    return response ($content)->withHeaders ([
    	“H1” => “v1”,
    	“H2” => “v2”,
    ]);
    ```

  - _Attach cookies_
    - Encrypted & signed by **EncryptCookies** Middleware
    ```php
    return response ($content)->cookie (“name”, “value”, $minutes);
    ```

- **Redirects**
  - _Global helper_
    ```php
    return redirect (“url”);
           back()->withInput();
    ```
  - _Named routes_
    ```php
    return redirect()->route (“RouteName”);
                     ->route (“RouteName”, [‘id’ => 11]);
    ```
  - _Actions_
    ```php
    return redirect()->actions (“MyController@index” );
                     ->actions (“MyController@index” , [“id” => “value”]);
    ```
  - _External domain_
    ```php
    return redirect()->away (“https://google.com”);
    ```
  - _With session data_
    ```php
    return redirect (“url”)->with (“Key”, “Value”);
    ```
- **Other response types**
  - _View_
    ```php
    return response()->view (“hello”, $data, 200)->header (“H1”, “V1”);
    # Note: use global view() helper method if custom header not needed
    ```
  - _Json_
    ```php
    return response()->json ([“name” => “umesh”, “age” => 28]);
    # Content-type is set to application/json & array is converted to json
    ```
  - _Download_
    ```php
    return response()->download (“path”, “name.jpg”, $headerOptional);
                     ->download (“path”);
                     ->download (“path”)->deleteFileAfterSend();
    ```
  - _Open in browser (pdf / images)_
    ```php
    return response()->file (“path”);
    ```

### # VIEWS

- **File** - `resources/views/welcome.blade.php`
- **Return View**
  ```php
  return view (“welcome”, [“name” => “james”]);
         view (“welcome”)->with ([“name” => “james”]);
  ```
- **Variable shared with all views**
  ```php
  # AppServiceProvider or MyProvider
  boot() {
    View::share (‘key’, ‘value’);
  }
  ```
- **Composer**

  - Composer is a class method called during rendering of view
  - _Location_ : “app/Http/View/Composers/ProfileComposer”
  - _Register composer_

    ```php
    # ViewServiceProvider
    boot() {
      View::composer (‘profile’, ‘App\Http\View\Composers\ProfileComposer’);  # File based ‘profile.blade.php’
      View::composer (‘profile’, function() { ……….. });                       # Closure based

      # Muliple views : [‘profile’, ‘home’, ‘welcome’]
      # all views : “\*”
    }
    ```

  - _ProfileComposer_
    - `compose()` called whenever profile view is rendered & `$count` variable available
    ```php
    compose (View $view, UserRepo $users) {
    	$view->with (‘count’, $users->count());
    }
    ```

### # URL GENERATIONS

- **Basics**
  ```php
  url (“posts/11”);         # https://example.com/posts/11
  url()->current();         # without query
       ->full();
       ->previous();
  ```
- **Named Route**
  ```php
  $url = route (“RouteName”, [‘id’ => 11];
  ```
- **Signed urls**
  ```php
  URL::signedRoute (“unsubscribe”, [“user” => 11]);
     ::temporarySignedRoute (‘unsubscribe”, now()->addMinutes (30), [“user” => 11]);
  ```
  - _Validation of sign_ (can be a middleware)
    - `$request->hasValidSignature()`
- **Controllers actions**
  ```php
  $url = action (“homeController@show”, [‘id’ => 11]);
  ```

### # SESSIONS

- **Introduction**
  - HTTP is _stateless_ protocol
  - _config/session.php_
    - Options : `file, cookie, database, redis, memcached`
  - _database (table)_
    - `php artisan session:table`
  - _redis_
    - `composer require predis/predis`
    - See `config/database.php`
- **Using Sessions**
  - _Retrieve key value_
    ```php
    $request->session()->get (“key”);
                       ->get (“key”, “default”);
                       ->all();
    # OR
    session (“key”);
            (“key”, “default”);
    ```
  - _Store new key_
    ```php
    $request->session()->put (‘key’, ‘value’);
    # OR
    session ([“key”  => “value”]);
    ```
  - _Push / Pull_
    ```php
    $request->session()->push (‘key’, ‘value’);
                       ->pull (‘key’, ‘default’); # returns key or default value
    ```
  - _has / exits_
    ```php
    $request->session()->exists (“key”);		# value can be null
                       ->has (“key”);		    # value Not null
    ```
  - _Flash data_
    ```php
    $request->session()->flash (“status”, “Successful”);
                       ->reflash();
                       ->keep ([‘name’, ‘age’]);
    ```
  - _Remove_
    ```php
    $request->session()->forget (“key”);
            ->forget ([“key”, “key2”.......]);
            ->flush();
    ```
  - _Regenerate session id_ (Done automatically on user login)
    ```php
    $request->session()->regenerate();
    ```

### # VALIDATION

- **Validate()**
  - _If validation fails response is automatic_
    - _http response_ for http request (redirect to previous)
    - _json response_ for ajax request
  - Ex:
    ```php
    $valid = $request->validate ([
      “title” => “required | max:255” ,
      “age” => “required”
    ]);
    ```
  - **bail** rule to stop checking for next rule after a rule fails
  - _Null values_
    - Uses middlewares : `TrimString` & `ConvertEmptyStringsToNull`
    - `null` values gives validation error. So use _nullable_ rule
      - `‘date’ => ‘nullable | date’`
- **Form Request Validation**

  - _Create_
    ```php
    php artisan make:request StoreBlogPost
    ```
  - _Rules_
    ```php
    rules() {
      return [
        ‘name’ => ‘required | max:250’ ,
        ‘age’ => ‘required’
      ];
    }
    ```
  - _Authorize_
    ```php
    # Route::post (‘comment/{ commentPara }, …..)
    authorize() {
      // return true if user is authorized to comment
      $comment = Comment::find ($this->route (‘commentPara’));
      return $comment  &&  $this->user()->can(‘update’, $comment);
      // or
      return true; # return true for always authorized
    }
    ```
  - _Custom error messages_
    ```php
    message() {
      return [‘name.required’ => ‘Invalid or missing name. Please check again’];
    }
    ```
  - _Use in controller_
    ```php
    public function store (StoreBlogRequest $request, $id) {
      $valid = $request->validate();
    }
    ```

- **Manually create validators**

  - Not much usefull. see docs.

- **Errors Messages**
  ```php
  $errors->first (‘email’)      # 1st error for email field
         ->get (‘email’)        # all errors for email field
               (‘projects.*’)   # all errors for array
         ->all()                # all errors all fields
         ->has (‘email’)        # check if error for email field
         ->any()                # check if any error in any field
  ```

### # ERROR HANDLING

- **APP_DEBUG option in .env**
  - _true_ = development
  - _false_ = production
- **Exception Handler Class**
  - _App\Exception\Handler_
  - _report()_
    - _log_ or _send_ exceptions to `bugsnag/sentry`
    - Passes exception to base class for logging
    - Custom way to handle any exception
      - `if ($exception instanceof CustomException) { …….. }`
    - `report()` (helper method)
      - Reports exception & continues execution
      ```php
      try {
        # code…..
      } catch (Exception $e){
        report ($e);
        report false;
      }
      ```
  - _Ignore Exceptions_
    ```php
    protected $dontreport = [
    	\Illuminate\Auth\AuthenticationException::class ,
    	\Illuminate\Database\Eloquent\ModelNotFoundException::class
    ]
    ```
  - _render()_
    - Generates `http` response
    ```php
    if ($exception instanceof CustomException) {
      return response()->view (‘errors.custom’, [], 500)
    }
    ```
  - _Custom class_
    ```php
    class MyException extends Exception {
      report() { ……. };
      render ($request) { …….. }
    }
    ```
  - _HTTP Exceptions_
    - `abort()`
    ```php
    abort (404);
          (403, “Unauthorized action”);
    ```
    - Views to edit
      - `views/errors/404.blade.php`
      - `php artisan vendor:publlish --tag=laravel`

### # LOGGING

- Uses _Monolog_ library
- **config/logging.php**
  - _Channel drivers_
    - `stack (multi-channel)` - syslog
    - `single` - errorlog
    - `daily` - monolog
    - `slack` - custom
- see docs for details

### # BLADE

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

### # LOCALIZATION

- see docs

### # FRONTEND SCAFFHOLDING

- **Package.json** (_Bootstrap, Axios, Vue, Jquery, etc_)
  ```bash
  npm install
  npm run dev
          watch
  ```
- Laravel Mix configs in `Webpack.mix.js`
- **Remove** (_Bootstrap, Vue_)
  - `php artisan preset none`
- **css**
  - `resources/sass/` TO `public/css`
- **js**
  - `resources/js` TO `public/js`
  - _Vue_
    - `resources/js/components/ExampleComponent.vue`
    - Single file has `<template>, <script>, <style>`
    - `Vue.component (‘example’, require (‘./components/ExampleComponent.vue’))`
    - Usage :- `< vc-foo > …… </ vc-foo >`
  - _React_
    - `php artisan preset react`

### # COMPILING ASSETS (MIX)

- Mix make Webpack easier using `Webpack.mix.js`
  ```js
  mix.js (“resources/js/app.js”, “public/js”)
     .sass (“resources/css/app.scss”, “public/css”)
  ```
- Needs _nodejs_ with npm installed
- **Install packages** :- `npm install`
- **Run**
  - `npm run dev | production | watch | watch-poll`
- **Working with js**
  - _Vendor extraction_
    - `mix.js (….).extract ([“vue”])`
    - Gives 3 files `manifest.js, vendor.js, app.js` (sequence must be same in `<html>`)
    - why to use ? If updates are frequent then avoid compiling vendors again & again.
- **Version / Cache Busting**
  - Appends a _hash_ to filename
  - `mix.js (……..) . version()`
  - usage :
  ```php
  <script src = ‘ {{ mix (“js/app.js”) }} ‘ >
  ```
  - Only in production. Not use in development.
    ```js
    if (mix.inProduction()) {
      mix.version();
    }
    ```
- **BrowserSync**
  - Moniters files for any changes & if changed then browser is refreshed automatically.
  - `mix.browserSync (“domain.test”)`
  - Run :- `npm run watch/watch-poll`

# SECURITY

### # AUTHENTICATION

- **Introduction**
  - `php artisan make:auth`
  - `config/auth.php`
  - Based on `guards` _(web/api)_ & `providers` _(eloquent/query with user table)_
  - `App\Users` table model is used
- **Auth Quickstart**

  - _Controllers_
    - `HomeController`
    - `App\Http\Controllers\Auth`
      - _Register, Login, ForgotPassword, ResetPassword_
      - `$redirectTo` & `redirect()` (Also _RedirectIfAuthenticated_ middleware)
  - _Routes_
    ```php
    Auth::routes();
                ([“register” => “false”]);	# If not needed
    ```
  - _Views_ : `resources/views/auth & layouts`
  - _Username_
    - `“email”` field is default
    - If others, then use this method in _loginController_
      - `public function username() { return “username”; }`
  - _Guard_
    - In _Login, Register, ResetPassword_ controllers
    - `public function guard() { return Auth::guard (“name”); }`
  - _Create & Validation Of Users_
    - _RegisterController_ has methods `validate() & create()`
  - _Retrieve auth users_
    ```php
    Auth::user()
        ::id()
        ::check()
    ```
  - _Login Throttling_
    - Based on unique username & IP address

- **Manually auth users**
  - Incase manual we must ignore default controllers
  - _attempt()_
    - _Credentials_
      ```php
      $credentials = $request->only (‘email’, ‘password’);
      if (Auth::attempt ($credentials)) {
        return redirect()->intended (“dashboard”);
      }
      ```
    - _Specific guard_ : `Auth::guard (‘admin’)->attempt ($credentials)`
  - _Logout_ : `Auth::logout()`
  - _Remember me_
    - `remember_token` in _users_ table as hash values (_LoginController_ already has this)
    - `Auth::attempt ($credentials, $remember)`
  - _Other auth ways_
    - User Instance
      - Needs _Authenticable_ contract (`App\User` implements this contract)
      ```php
      Auth::login ($user);
                  ($user, true); # remember me checked
      ```
- **Http Basic auth**
  - _Browser Prompt_ is used. So dedicated login view pages required
  - Use `auth.basic` middleware
- **Add Custom Guards & User Providers**
  - see docs
- **Events**
  - _EventServiceProvider_
  - _Registered, Login, Attempting, Authenticated, Failed, Logout, Lockout, PasswordReset_

### # API AUTH PASSPORT

- see docs.

### # AUTHORIZATION

- Authorize a user to use a given resource.
- _Gates_(closure) & _Policies_(logic group) are like _Routes_ & _Controllers_
- Both _Gates_ & _Policies_ return _false_ if request is not from logged-in user. Also see Guest below.
- **Gates**

  - _Writing_
    - In `App\Providers\AuthServiceProvider`
    - Always `$user` instance as first argument. Rest are optional arguments.
    ```php
    boot() {
      $this->registerPolicies();
      # closure based
      Gate::define (“update-post”, function ($user, $post)
        return $user->id == $post->user_id;
      ));
      # class@method
      Gate::define (“update-post”, “App\Policies\PostPolicy@update”);
    }
    ```
    - _Resource Gates_
      - `Gate::resource (“posts”, “App\Policies\PostPolicy”);`
      - Total 4 gates
        - `posts.view [view, create, update, delete]`
        - `PostPolicy@view [view, create, update, delete]`
  - _Authorizing actions_

    ```php
    Gate::allows (“update-post”, $post)     # true/false
        ::denies (“update-post”, $post)     # note : $user is not needed to pass

    Gate::forUser ($user)->allows (“update-post”, $post)
    ```

- **Policies**

  - Uses model or resource
  - Stored in `app/Policies`
  - `php artisan make:policy PostPolicy --model=Post`
  - _Register_
    - In `AuthServiceProvider` register model-policy relations
    ```php
    protected $policies = [
      Post::class => PostPolicy::class ,
    ]
    ```
  - _Writing_
    - In `Policies/PostPolicy` define methods with any names.
    ```php
    update (User $user, Post $post) {
      return $user->id == $post->user_id;
    }
    ```
    - Sometimes other model instance is not needed
      - `create (User $user) { ……. }`
    - _Guest_
      - Login is must to use _gates & policies_
      - Optional `$user` can work for guest
      - `update (?User $user, Post $post) { ….. }`
    - _Admin_
      - Must returns true for all policy methods. Use `before()`
      ```php
      public function before ($user, $ability) {
        if ($user->isSuperAdmin()) {
          return true;
        }
      }
      ```

- **Authorizing actions using policies**

  - _Via User Model_
    ```php
    $user->can (“update”, $post); # true / false
         ->cant (“update”, $post);
    ```
    - First call `policy@method`. If Not found then call _Gate_ closure
    - _Create_
      - Without `$post` variable - `$user->can (“create”, Post::class);`
  - _Via Middleware_
    - Key in Http\Kernel - `‘can’ => ‘Illuminate\Auth]Middleware\Authorize’`
    - see docs
  - _Via Controller Helpers_

    - `authorize()` method in base Controller

    ```php
    update (Request $request, Post $post) {
      $this->authorize (“update”, $post);
      # Run if true
    }

    create (Request $request) {
      $this->authorize (‘create’, Post::class);
    	# run if true
    }
    ```

  - _Via Blade Templates_
    - `@can & @cannot`
    ```php
    @can (“update”, $post)
    ……..
    @elsecan (“create”, App\Post::class)
    …….
    @endcan
    ```

### # EMAIL VERIFICATION

- **Introduction**
  - _Model preparation_
    - `App\User` must implement `Illuminate\Contracts\Auth\MustVerifyEmail`
- **Database Considerations**
  - `users` table must have `email_verified_at`
- **Route**
  - Logic for sending emails - `Auth\VerificationController`
  - `Auth::routes ([‘verify’ => true])`
  - Use `verify` middleware which is `Illuminate\Auth\Middleware\EnsureEmailIsVerified`
- **Views**
  - `resources/views/auth/verify.blade.php`
- **After verifying emails**
  - In VerificationController - `protected $redirectTo = “/dashboard”`
- **Events**
  - Verified event

### # ENCRYPTION

- _OpenSSL_ provides AES-256 / AES-128
- All encrypted values are signed with _MAC_ (Message Authentication code)
- `php artisan key:generate` // Gives AES-256-CBC key in .env
- **Using the encrypter**
  - `encrypt ($request->secretmsg)`
  - Uses **serialize** during encryption for _objects & arrays_
  ```php
  Crypt::encryptString (‘hello’);
       :: decryptString ($encryptedKey);
  ```

### # HASHING

- _Bcrypt & Argon2_ algorithms are available for passwords. Bcrypt is default for laravel
- `config/hashing.php`
  ```php
  Hash::make ($request->password);
      ::check (“plainText”, $hashedPassword);
      :: needsRehash ($hasedPassword); # true / false
  ```

### # RESET PASSWORD

- User must use trait `Illuminate\Notifications\Notifiable`
- Reset tokens expires after 1 hour. See expire option in `config/auth.php`
  - **Database**
    - `App\User` must implements `Illuminate\Contracts\Auth\CanResetPassword`
    - DB table is already added in migration.
  - **Route**
    - `Auth\ForgetPasswordController` & `Auth\ResetPasswordController`
  - **Views**
    - `resources/views/auth/passwords`
  - **After Reset**
    - Browser visit _“/password/reset”_
    - `$redirectTo` property after reset of password.

### # ARTISAN CONSOLE

- **Introduction**
  ```bash
  php artisan list
              help <cmd>
              tinker
              make:command MyCmd
  ```
- **Writing commands**

  - Custom commands are stored in app/Console/Commands
  - php artisan make:command SendEmails
  - _SendEmails class based_

    ```php
    $signature = “email:send { user } “;
    $description = “Send drip emails to a user”;

    handle (DripEmailer $drip) {
      $drip->send (User::find ($this->argument (“user”)));
    }
    ```

  - _Closure based_

    - `routes/console.php` is where closure based commands are defined
    - Not `http` routes but `console` based entry points

    ```php
    Artisan::command (“build { project }, function ($project) {
      $this ->info (“Building { project } “);
    ))->describe (“Build the proect “);

    Artisan::command (“email : send { user } “, function (DripEmailer $drip, $user) {
      $drip->send (User::find ($user));
    }
    ```

- **Defining Input expectations**
  - _Arguments_
    ```php
    $signature = “email : send { user } “
                               { user? }        # Optional
                               { user=foo }     # Defualt
    ```
  - _Options_
    - 2 types based on option value received or not .
    - If not option value is not received then it acts as true/false
      ```php
      $signature = “ email : send { user }{ --queue } “;           # true / false
                                          { --queue= };            # value is needed
                                          { --queue=default };     # default value
                                          { --Q|queue };           # shortcut
      ```
- **Command IO**

  - _Retrieving input_

    - _In handle() method_
      ```php
      $userId = $this->argument ();               # All args as array
                                (“user”);         # only user
      $queueName = $this->option();               # All options as array
                                (“queue”);        # only queue
      ```
    - _Prompt for input_

      ```php
      $name = $this->ask (“what is your name”);
                   ->secret (“type password”);

      $this->confirm (“Do you wish to continue ?“);   # true if “y” / “yes”
      ```

  - _Display output_
    - In `handle()` method
      - `$this->info (“Display this on the screen”)`
    - _info_ (green), _error_ (red), _line_ (plain uncolored), _question_, _comment_
  - _Table layout / Progress bars_
    - See docs

- **Registering command**
  - `app/Console/Commands` directory’s all commands are automatically registered by kernel
- **Programmatically Executing Commands**
  - To execute cmd from say controller or route and not in _CLI_ (command line interface)
  ```php
  $exitCode = Artisan::call (“email:send”, [“user” => 12, “--queue” => “default”]);
                     ::queue (….)->onConnection (‘redis’)->onQueue (“commands”);
  ```

### # BROADCAST (Pusher)

- Realtime / live updating user interfaces

### # CACHE

- **Config**
  - `config/cache.php` => drivers [*File, Database, Redis, Memcache*]
  - See Docs for driver’s config.
- **Cache usage**
  - _Retrieve_
    ```php
    Cache::get (‘key’, ‘default’);
         :: (‘key’, function() { …….. });
         :: store (‘redis’)->get (‘key’);
         :: has (‘key’);                          # check
         :: increment (‘key’);                    # ++ / -- integer value
         :: (‘key’, $amount);
    ```
  - _Retrieve & store_
    - Retrieve if present or add key in cache via function return
    ```php
    Cache ::remember (‘key’, $minutes, function() { …... });
          ::rememberForever (‘key’, function() { ….. });
    ```
  - _Retrieve & delete_
    ```php
    Cache::pull (‘key’)
    ```
  - _Storing_
    ```php
    Cache::put (‘key’, ‘value’, $minutes);
         ::add (‘key’, ‘value’, $minute);
         ::forever (‘key’, ‘value’);
    ```
  - _Remove_
    ```php
    Cache::forget (‘key’);
         ::flush();
    ```
  - _Atomic Locks_ (redis or memcache only)
    - Used to avoid race conditions
    ```php
    if (Cache::lock (‘foo’, 10)->get()) {
      # lock acquired for 10 seconds
      Cache::lock (‘foo’)->release();
    }
    ```
  - _Cache helper_
    ```php
    cache (‘key’);
          ([‘key’ => ‘value’] ,$minutes);
    ```
- **Cache tags**
  - Note : Not supported for file & database drivers
  - Tag related items which helps in using & removing them together
  - _Store_
    - `Cache::tags ([‘tag1’, ‘tag2’])->put (‘key’, $key, $minutes)`
  - _Access_
    - `Cache::tags ([‘tag1’, ‘tag2’])->get (‘key’)`
  - _Remove_
    - `Cache::tags ([‘tag1’, ‘tag2’])->flush()`
- **Adding custom cache drivers (MongoDB)**
  - see docs
- **Events**
  - _CacheHit, CacheMissed, KeyForgotten, KeyWritten_

### # COLLECTION

- Wrapper for arrays. Eloquent results are always collections
- Are _Immutable_ meaning every method (_map, reject etc_) in chain returns new collection instance.
- To Uppercase and remove null values from array
  ```php
  $collect = collect ([‘a’, ‘b’, null, ‘c’])->map (function ($n) { return strtoupper ($n); });
                                            ->reject (function ($n) { return empty ($n); });
  ```
- **Extending**
  ```php
  # In service provider
  Collection::macro (“toUpper”, function() {
    return $this->map (function ($n) {
      return Str::upper ($value);
    };
  });
  # Usage
  $collect->toUpper();
  ```
- **Available Methods**
  - `all(), map(), take(), count(), dd(), min(), toArray(), get(), isEmpty(), etc…`
  - See Docs. Lots of methods.

### # EVENTS

- `app/Events` & `app/Listeners`
- 1 Event can have many Listeners
- **Register**
  ```php
  # EventServiceProvider
  protected $listen = [
    ‘App\Events\OrderShipped’ => ‘App\Listeners\SendEmail’;
  ]
  ```
  - All registered events & listeners files will be automatically created by cmd
    - `php artisan event:generate`
  - _Manual way_ (closure based)
    ```php
    # EventServiceProvider
    boot() {
    	Event::listen (‘event.name’, function ($foo, $bar) { ...... });
    }
    ```
- **Define Events**
  ```php
  # Events/OrderShipped
  __construct (Order $order) {
    $this->order = $order;
  }
  ```
  - Has _no logic but only data_ of order instance purchased.
- **Define Listeners**
  - In `Listeners/SendEmail` class - `handle (OrderShipped $event) { ……. }`
  - To stop propogation to other listeners of that events `return false;`
- **Queued Event Listners**
  - Queuing is useful if slow tasks like _sending email, http request, etc_
  - Configure & start queue process on server to use queues for listeners
  - _Usage_ : `class SendEmail implements ShouldQueue { ........ }`
  - _Extra config_ :
    ```php
    public  $connection = ‘sqs’;
            $queue = ‘listeners’;
            $delay = ‘60;
    ```
  - _Fails_ : `public function failed (OrderShipped $event, $exception) { …. }`
- **Dispatch Events**
  - `$order` instance - `event (new OrderShipped ($order));`
- **Event Subscribers**

  - A class which defines many event handlers.

  ```php
  namespace App\Listeners;
    class UserEventSubscriber {
      public function onUserLogin ($event) { }
      public function onUserLogout ($event) { }

      public function subscribe ($events) {
        $events->listen (‘Illuminate\Auth\Events\Login’, ‘App\Listeners\UserEventSubscriber@onUserLogin’);
        $events->listen (‘Illuminate\Auth\Events\Logout’, ‘App\Listeners\UserEventSubscriber@onUserLogout’);
      }
    }
  ```

  - _Register_ (In `App\Providers\EventServiceProvider`)
    - `protected $subscribe = [‘App\Listeners\UserEventSubscriber’]`

### # FILE STORAGE

- _Flysystem_ package
- _Local / Amazon S3 / Rackspace_
- `storage/app/public`
- Create _symboliclink_ from `public/storage` to `storage/app/public`
- Create symbolic link - `php artisan storage:link`
- `asset(‘storage/file.txt)`

### # MAIL

- **Mailgun.com** ------> 10000 mails/ month FREE
- _Swiftmailer_ php library
- _SMTP / Mailgun / SparkPost / Amazon SES / php’s `mail() & sendmail()`_
- Local or cloud based service
- _Mailgun, SparkPost_ --- faster than ---- _SMTP_
- `Composer require guzzlehttp/guzzle`
- _select driver_ - `config/mail.php`
- _secret-key && domain_ - `config/services.php`
- `app/Mail` ------ each email sent is a _Mailable_ class
  ```php
  # php artisan make:mail MyMail
  public function build(){
    return $this->from(“me@ex.com”)->view(“myview”)
  }
  ```
- Global `from()` method in `config/mail.php`
- `attach(‘path/to/file’)`

  ```php
  $user = User::findOrFail($userId);
  Mail::to (“abc@exam.com”)->send(new MyMail($user));

  Mail::to (“abc@exam.com”)
  ->cc($ccUsers)
  ->bcc($bccUsers)
  ->send(new MyMail($user));
  ```

- Use **queues** for increased response time.

### # NOTIFICATIONS

### # PACKAGE DEVELOPMENT

### # DATABASE

- Raw / query builder / eloquent ORM
- **Transactions** (All or none)
  ```php
  DB::transaction(function() {
    DB::table(‘users’)->update([‘votes’ => 1]);
    DB::table(‘post’)->delete();
  }, 5);                                          # 5 = attempts after deadlock
  ```

### # QUERY BUILDER

```php
  DB::table(‘users’)->get()
  DB::table(‘users’)->where(‘name’, ‘john’)->first();
  DB::table(‘users’)->where(‘name’, ‘john’)->value(‘name’)->pluck(‘anyCol’);
```

### # PAGINATION

- `paginate()`
  ```php
  #  query builder
  DB::table(‘users’)->paginate(15);
  DB::table(‘users’)->simplePaginate(15);
  # eloquent
  App\User::paginate(15);
  App\User::simplepaginate(15); -{{ $user->links() }}
  ```

### # MIGRATION

```bash
php artisan make:migration create_users_table --create=users
# database/migrations
php artisan migrate
php artisan migrate:refresh
php artisan migrate:refresh --seed
```

### # SEEDS

```bash
php artisan make:seeder UsersTableSeeder
# DatabaseSeeder.php
php artisan db:seed
```

### # REDIS

- Advanced `key=value` store
- Keys can be ----> _strings, hashes, lists, sets, sortedsets_
- Composer require _predis/predis_
- Use redis in `config/database.php`

### # ELOQUENT

- ORM
- **MODELS**
  - php artisan make:model User --migration
  - php artisan make:model User --m
  - protected \$table = ‘users”;
  - Protected \$dateFormat = ‘U’

```php
  User::find(1);
  User::find([4, 6, 7]);
  User::where(‘active’, 1)->first();
  User::findOrFail(1); -----> 1st row with id = 1
  User::where(‘legs’, ‘ ’>’, 100)->firstOrFail(1);
```

- **Inserts**

  ```php
    # option 1 - new
    $user = new User();
    $user->name = $request->name;
    $user->save();

    # option 2 - find
    $user = User::find (11);
    $user->name = “hello”;
    $user->save();
  ```

  - In model - `Protected $fillable = [‘name’];`

  ```php
    $user = User::create([‘name’ => ’ myname’]);
    $user->fill([‘name’ => ‘myname’]);

    User::firstOrCreate([‘name’ => ’ myname’]);
    User::firstOrNew([‘name’ => ’ myname’]);
    User::updateOrCreate([‘name’ => ’ myname’], [‘age’ => ‘26’]);
  ```

- **Delete**
  ```php
    User::find(11)->delete();;
    User::destroy(11);;
    User::destroy([11, 45, 33]);;
  ```

### # RELATIONSHIP

- Methods in model

  ```php
    # 1 - 1
    $this->hasOne(“Car’);                 # inside User.php model file
    $this->belongsTo(“User’);             # inside Car.php model file

    # 1 - *
    $this->hasMany(“Car’);                # inside User.php model file
    $this->belongsTo(“User’);             # inside Car.php model file
    $this->belongsToMany(“Car’);          # inside User.php model file
    $this->belongsToMany(“User’);         # inside Car.php model file
  ```

### # ACCESSOR / MUTATORS

- Like Get / set
- Methods inside model
  ```php
    # first_name  is column name
    Public function getFirstNameAttribute ($value) {
    	return ucfirst($value);
    }
    Public function setFirstNameAttribute() {
      $this->attributes[‘first_name’] = strtolower ($value);
    }
  ```
