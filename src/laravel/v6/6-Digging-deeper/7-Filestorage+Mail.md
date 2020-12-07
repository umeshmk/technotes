# FILE STORAGE

- _Flysystem_ package
- Same API for- _Local / Amazon S3_
- Config - `config/filesystem.php`
- Symlink between `public/storage <--> storage/app/public`
  - cmd - `php artisan storage:link`
- Usage helper method - `asset(‘storage/file.txt)`
- **Local Driver**

  ```php
  # Add
  Storage::disk('local')->put('file.txt', 'contents');     # storage/app/file.txt
                        ->put('file.jpg', $img);
                        ->put('file.jpg', $img, 'public'); # permissions
  # Retrieve
  Storage::get('file.jpg');
         ::exist('file.jpg');
         ::missing('file.jpg');
         ::download('file.jpg');
         ::url('file.jpg');
  # Edit Begin/end
  Storage::prepend('file.log', 'new text added');
         ::append('file.log', 'new text added');
  # copy/move
  Storage::copy('old','new');
         ::copy('old','new');
  # Upload file
  Storage::putFile('avatar', $request->file('avatar'));
  # delete
  Storage::delete('file.jpg');
  ```

  - **Directories**

  ```php
  # array of files
  Storage::files($dir);
         ::allFiles($dir);

  # array of folders
  Storage::directories($dir);
         ::allDirectories($dir);      # Recursive

  # make dir
  Storage::makeDirectory($dir);
  Storage::deleteDirectory($dir);
  ```

## # MAIL

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
