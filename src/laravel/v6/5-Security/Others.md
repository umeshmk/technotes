# OTHERS

## # EMAIL VERIFICATION

- **Introduction**
  - _Model preparation_
    - `App\User` must implement `Illuminate\Contracts\Auth\MustVerifyEmail`
- **Database Considerations**
  - `users` table must have `email_verified_at`
- **Route**
  - Logic for sending emails - `Auth\VerificationController`
  - Add - `Auth::routes ([‘verify’ => true])`
  - Use `verified` middleware which is `Illuminate\Auth\Middleware\EnsureEmailIsVerified`
- **Views**
  - `resources/views/auth/verify.blade.php`
- **After verifying emails**
  - In _VerificationController_
    - `protected $redirectTo = “/dashboard”`
- **Events**
  - see docs

## # ENCRYPTION

- _OpenSSL_ provides AES-256 / AES-128
- All encrypted values are signed with _MAC_ (Message Authentication code) to avoid authentication
- `php artisan key:generate` // Gives key in .env
- **Using the encrypter**

  - `encrypt($request->secretmsg)`
  - Uses **serialize** during encryption for _objects & arrays_ to string
  - So js needs to **unserialize** the string
  - If serialize is not needed then use

  ```php
  Crypt::encryptString (‘hello’);
       ::decryptString ($encryptedKey);
  ```

## # HASHING

- **Bcrypt & Argon2** algorithms are available for passwords. Bcrypt is default for laravel
- Config - `config/hashing.php`

  ```php
  Hash::make ($request->password);
      ::check (“plainText”, $hashedPassword);
      ::needsRehash ($hashedPassword); # true / false
  ```

## # RESET PASSWORD

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
    - Visit - _“/password/reset”_
    - `$redirectTo` property in _ResetPasswordController_
