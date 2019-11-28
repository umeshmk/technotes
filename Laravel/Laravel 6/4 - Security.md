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
