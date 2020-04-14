# EVENTS

- `app/Events` & `app/Listeners`
- 1 Event can have multiple independent Listeners

## # Register

- In `EventServiceProvider` map _events => listeners_

  ```php
  protected $listen = [
    ‘App\Events\OrderShipped’ => ‘App\Listeners\SendEmail’;
  ]
  ```

- All registered events & listeners files will be automatically created by cmd
  - `php artisan event:generate`
- _Manual way_ (closure based) (AVOID manual way)

  ```php
  # EventServiceProvider
  boot() {
  	Event::listen (‘event.name’, function ($foo, $bar) { ...... });
  }
  ```

- **Event discovery** `(v5.8+)`

  - Scans `Listeners` direvtory for automatic registrationof events & listeners.
  - See docs.

- **Define Events**

  - Has _no logic but only data_ of order instance purchased.
  - Location - `Events/OrderShipped`

  ```php
  __construct (Order $order) {
    $this->order = $order;
  }
  ```

- **Define Listeners**

  - Location - `Listeners/SendEmail`

  ```php
    public function handle(OrderShipped $event) {
      // $event->order
    }
  ```

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

  ```php
  $order = Order::findOrFail($oderid); `
  event (new OrderShipped ($order));`       # dispatch event

  ```

- **Event Subscribers**

  - A `Listener` class which defines many event handlers.

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
