# BASICS

## # ROUTES

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
  Route::get (“user/{ id }/photos/{ pid }”, function ($id, $pid) { …..});
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

  ## # MIDDLEWARES

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

## # CSRF PROTECTION

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

## # CONTROLLERS

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

## # REQUESTS

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

## # RESPONSES

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

## # VIEWS

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

## # URL GENERATIONS

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

## # SESSIONS

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

## # VALIDATION

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

## # ERROR HANDLING

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

## # LOGGING

- Uses _Monolog_ library
- **config/logging.php**
  - _Channel drivers_
    - `stack (multi-channel)` - syslog
    - `single` - errorlog
    - `daily` - monolog
    - `slack` - custom
- see docs for details
