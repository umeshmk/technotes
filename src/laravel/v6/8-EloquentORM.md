# ELOQUENT

- ORM (object relationship diagram)
- **MODELS**

  ```php
    # create Model (migration is optional)
    php artisan make:model User --migration
    php artisan make:model User --m
    # In Model
    protected $table = "users";
              $dateFormat = "U";
              $primaryKey = "my_id";    # optional - default is not "id"
              $dateFormat = "U";
  ```

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

## # RELATIONSHIP

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

## # ACCESSOR / MUTATORS

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
