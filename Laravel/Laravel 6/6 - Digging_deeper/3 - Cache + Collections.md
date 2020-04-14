# CACHE

## # Config

- `config/cache.php` => drivers [*File, Database, Redis, Memcache*]
- See Docs for driver’s config.

## # Cache usage

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

  - Retrieve if `key` is present or add `key` in cache via callback

  ```php
  Cache ::remember(‘key’, $minutes, function() { …... });
        ::rememberForever(‘key’, function() { ….. });
  ```

- _Retrieve & delete_

  ```php
  Cache::pull (‘key’)
  ```

- _Storing_

  ```php
  Cache::put (‘key’, ‘value’, $minutes);
       ::add (‘key’, ‘value’, $minute);       #  add if not exist
       ::forever (‘key’, ‘value’);
  ```

- _Remove_

  ```php
  Cache::forget (‘key’);
       ::flush();
  ```

- _Atomic Locks_

  - `redis`, `dynamodb` or`memcache` only
  - Used to avoid race conditions

  ```php
  $lock = Cache::lock(‘foo’, 10);
  if ($lock->get()) {
    # 10 seconds
    $lock->release();
  }
  ```

- _Cache helper_

  ```php
  cache (‘key’);
        ([‘key’ => ‘value’] ,$minutes);
  ```

## # Cache tags

- Note : Not supported for file & database drivers
- Tag related items which helps in using & removing them together

  ```php
   Cache::tags ([‘tag1’, ‘tag2’])->put (‘key’, $key, $minutes);     # Store
   Cache::tags ([‘tag1’, ‘tag2’])->get (‘key’);                     # Access
   Cache::tags ([‘tag1’, ‘tag2’])->flush();                         # Remove
  ```

## # Adding custom cache drivers (MongoDB)

- see docs

## # Events

- _CacheHit, CacheMissed, KeyForgotten, KeyWritten_

# COLLECTION

- Wrapper for working with arrays.
- Eloquent results are always collections
- Are _Immutable_ meaning every method (_map, reject etc_) in chain returns new collection instance.
- **Chaining methods**

  ```php
  $collect = collect([‘a’, ‘b’, null, ‘c’])
              ->map(function($n) { return strtoupper($n); })
              ->reject(function($n) { return empty($n); });
  ```

## # Extending

- Known as collection macros

  ```php
  # In service provider
  Collection::macro (“toUpper”, function() {
    return $this->map(function ($n) { return Str::upper ($value); };
  });
  $collect->toUpper();            # Usage
  ```

## # Available Methods

- `all(), map(), take(), count(), dd(), min(), toArray(), get(), isEmpty(), etc…`
- See Docs. Lots of methods.
