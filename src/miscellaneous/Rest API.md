# Rest Api

> - REST - Representational State Transport

- Mostly `http` communications
- Can handle multiple types of `requests` and `responses`

## HTTP

- Based on `Client-Server` / `Request-Response` Model
- _Stateless_ protocol
- **Headers**

  - In form of`name : value` & it is _case-sensitive_
  - 2 types - _Request_ & _Response_

    ```html
    GET /file.html HTTP/version Host : Hostname From : Username Cache-Control :
    no-cache
    ```

## CRUD REQUEST

| Create               | Read                         | Update                 | Delete         |
| -------------------- | ---------------------------- | ---------------------- | -------------- |
| `*POST*`             | `*GET*`                      | `*PUT*`                | `*DELETE*`     |
| `/api/users` (+data) | `/api/users`, `/api/users/1` | `/api/users/1` (+data) | `/api/users/1` |

## RESOURCES [ DATA URIs]

```php
  /users/                      # Collection [Plural]
  /users/{user_id}/            # Singleton [Exact id]
  /buy/property-in-mumbai/     # hyp-nes are better than under_scores
  /language/css/               # lowercase letters are preffered
  /avoid/using.pdf             # avoid using pdf
  /usequery?name=umesh&age=28  # use "?" instead of extra uri

  /user/create                 # use "POST /users" is enough

  apis.google.com/v3/users     # versions for apis

  /users/project?fields=name,subject,members      # Partials response
  /users?offset=20&limit=10    # paginations offset=starting id & limit=rows

  /search?q=new+code+codes     # Global search
  /users?q=projects+in+web     # Specific search

```
