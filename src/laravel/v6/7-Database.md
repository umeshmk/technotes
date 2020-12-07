# DATABASE

- Raw / query builder / eloquent ORM
- **Config (SQLite)**

  ```env
    DB_CONNECTION=sqlite
    DB_DATABASE=/absolute/path/to/database.sqlite
    # optional
    DB_FOREIGN_KEYS=true
  ```

- We use multiple dbs in `config/database.php`. See docs.
- **Raw mysql queries**

  ```php
    DB::select('select * from users where active=?', [1]);      # ? = 1 (parameter)
      ::select('select * from users where id = :id', ['id' => 1]);
      ::insert('insert into users (id, name) values[?, ?]', [1, 'rocky']);
      ::update('update users set votes=100 where name = ?', ['john']);
      ::delete('delete from users');
      ::statement('drop table users');
  ```

- **Transactions** (All or none)

  ```php
  DB::transaction(function() {
    DB::table(‘users’)->update([‘votes’ => 1]);
    DB::table(‘post’)->delete();
  }, 5);                                          # 5 = attempts after deadlock
  ```

## # QUERY BUILDER (Better to use Eloquent)

- Big DB --> Use query builder (High performance)
- Small DB --> Use Eloquent (Easy to use + App/Models advantages)

```php
  DB::table(‘users’)->get()
  DB::table(‘users’)->where(‘name’, ‘john’)->first();
  DB::table(‘users’)->where(‘name’, ‘john’)->value(‘name’)->pluck(‘anyCol’);
```

## # PAGINATION

- Can use with both _Query Builder_& _Eloquent ORM_
- **Create pages**

  - Automatically sets correct `limit` & `offset` based on current page
  - `page` query string argument in http request (detected automatically)

  ```php
    #  query builder
    DB::table(‘users’)->paginate(15);
    DB::table(‘users’)->simplePaginate(15);     # next/previous
    # eloquent
    App\User::paginate(15);
            ::where('votes', '>', 100)->paginate(15);
    App\User::simplepaginate(15);
  ```

- **Display**

  ```php
  <div>
    @foreach($users as $user)
          {{ $user->name }}
    @endforeach
  </div>

  {{ $users->links() }}
  ```

- **Customizing the pagination view** - see docs

## # MIGRATION

```bash
php artisan make:migration create_users_table --create=users
                           add_votes_to_users_table  --table=users
# database/migrations
php artisan migrate
            migrate:rollback        # rollback last query
            migrate:refresh         # rollback & migrate
            migrate:refresh --seed
```

- **Migration structure**

  - `up()` & `down()` methods in a migration class
  - _Foreign key_ constraints

    ```php
    $table->foreign('user_id')
          ->references('id')->on('users')
          ->onDelete('cascade');
    ```

## # SEEDS

```bash
php artisan make:seeder UsersTableSeeder
# Which seeder to call ? - DatabaseSeeder.php
php artisan db:seed
```

## # REDIS

- Advanced `key=value` store
- 2 ways - _Predis or PhpRedis_
- Keys can contain ----> _strings, hashes, lists, sets, sortedsets_
- `Composer require predis/predis` - (Abandoned by owner. Will be removed in future)
- Configuration - `config/database.php`
