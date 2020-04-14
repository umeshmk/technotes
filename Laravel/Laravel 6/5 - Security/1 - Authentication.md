# AUTHENTICATION

## # Introduction

- `php artisan ui vue --auth`
- `config/auth.php`
- Auth is Based on
  - `guards` - _(session)_
  - `providers` - _(eloquent/query with user table)_
- `App\User` table model is used

## # Auth Quickstart

- _Controllers_
  - `HomeController`
  - `App\Http\Controllers\Auth`
    - _Register, Login, ForgotPassword, ResetPassword_
    - `$redirectTo` & `redirect()` (Also _RedirectIfAuthenticated_ middleware)
- _Routes_

  ```php
  Auth::routes();
  Auth::routes([“register” => “false”]);	# If not needed
  ```

- _Views_ : `resources/views/auth & layouts`
- _Authenticating_
  - Redirect after login - `const HOME = "/home"` in `RouteServiceProvider`
  - _Username_
    - `“email”` field is default
    - Can change field in _loginController_
      - `public function username() { return “username”; }`
  - _Guard_
    - In _Login, Register, ResetPassword_ controllers
    - `public function guard() { return Auth::guard (“name”); }`
  - _Validation/Storage Customization_
    - How to register new Users
    - _RegisterController_ has methods `validator() & create()`
- _Retrieve auth users_

  - Better use Middleware

  ```php
  Auth::user()
      ::id()
      ::check()
  # OR
  public function foo(Request $request){
    $current_user = $request->user();
  }
  ```

- _Protecting Routes - use middleware auth_
  - Route ex - `Route::get(url, callback)->middleware('auth')`
  - controller ex - `$this->middleware('auth');` in `__construct()`
- _Password Confirmation_

  - Confirm password before something doing something important like changing password, moneysending, etc
  - `Route::get(url, callback)->middleware(['auth', 'password.confirm'])`
  - 3 hours gap is given inbetween asking again

- _Login Throttling_
  - Already in `LoginController`
  - Based on unique username & IP address

## # Manually auth users

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

- _Logout_

  ```php
  Auth::logout();
      ::logoutCurrentDevices();
      ::logoutOtherDevices();
  ```

- _Remembering Users_
  - `remember_token` in _users_ table as hash values (_LoginController_ already has this)
  - `if(Auth::attempt ($credentials, $remember)){...}`
  - `if(Auth::viaRemember()){...}`
- _Other authentication Methods_

  - Needs _Authenticable_ contract (`App\User` implements this contract)

  ```php
  # User Instance
  Auth::login ($user);
              ($user, true); # remember me checked
  # Using ID primaty key
  Auth::loginUsingId(3);
                    (3, true);
  # UserOnce - Login just 1 time - No sessions or cookies
  Auth::once($credentials);
  ```

## # Http Basic auth

- _Browser Prompt_ is used. So dedicated login view pages required
- Use `auth.basic` middleware

## # Adding custom Guards & Providers

## # Events

- This events are raised by authentication process
- _EventServiceProvider_
- _Registered, Login, Attempting, Authenticated, Failed, Logout, Lockout, PasswordReset_
