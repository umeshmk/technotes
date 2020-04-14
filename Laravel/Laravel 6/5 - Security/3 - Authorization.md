# AUTHORIZATION

- Authorize a user to use a given resource.
- _Gates_(closure) & _Policies_(logic group) are like _Routes_ & _Controllers_
- Both _Gates_ & _Policies_ return _false_ if request is not from logged-in user. Also see Guest below.
- **Usage**
  - Gates = dashboard, (NOT Models,resources )
  - Policies = Models or resource

## # Gates

- _Writing_

  - In `App\Providers\AuthServiceProvider`

  ```php
  boot() {
    $this->registerPolicies();
    # 1] closure based
    # $user is always 1st. # $post is optional
    Gate::define (“update-post”, function ($user, $post)  arg.
      return $user->id == $post->user_id;
      # OR - with response
      return $user->isAdmin
                    ? Response::allow()
                    : Response::deny("Not a admin");
    ));
    # 2] class@method
    Gate::define (“update-post”, “App\Policies\PostPolicy@update”);
  }
  ```

* _Authorizing actions_

  ```php
  # current loggedin user
  Gate::allows (“update-post”, $post)     # returns true/false
      ::denies (“update-post”, $post)     # note : $user is not needed to pass
  # Any user
  Gate::forUser($user)->allows (“update-post”, $post)
  ```

## # Policies

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
  function update (User $user, Post $post) {
    return $user->id == $post->user_id;
    # OR - WITH RESPOONSE
    return $user->id === $post->user_id
                          ? Response::allow()
                          : Response::deny("You are not the owner of post");

  }
  ```

  - Sometimes other model instance is not needed
    - `create (User $user) { ……. }`
  - _Guest_
    - Login is must to use _gates & policies_
    - Optional `$user` can work for guest. Add ? mark
      ```php
        function update (?User $user, Post $post) {
          return optional($user)->id === $post->user_id ;
        }
      ```
  - **Filter**

    - Must returns true for all policy methods. Use `before()`

    ```php
      public function before ($user, $ability) {
        if ($user->isSuperAdmin()) {
          return true;
        }
      }
    ```

## # Authorizing actions using policies

- _Via User Model_

  ```php
  # If model<-->policy is registered then can() uses correct policy class
  $user->can (“update”, $post);     # true / false
       ->cant (“update”, $post);
  # sometimes model is not needed. Then just use model class
  $user->can("create", Post::class);
  ```

  - _Create_
    - Without `$post` variable - `$user->can (“create”, Post::class);`

- _Via Middleware_

  - Key in Http\Kernel - `‘can’ => ‘Illuminate\Auth]Middleware\Authorize’`

    ```php
    # 1] with model
    Route::put('post/{post}', function(Post $post)){
      # update post
    })->middleware('can:update, post');

    # 2] without model
    Route::post("/post", function(){
      # create post
    })->middleware("can:create", "App\Post");
    ```

- _Via Controller Helpers_

  - **authorize()**

    - Method is available in any controller which extends `App\Http\Controllers\Controller`

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
