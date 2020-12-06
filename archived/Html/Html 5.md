# HTML 5

```html
<!DOCTYPE html>
<meta charset="UTF-8">

<!-- SEMANTICS  -->
{header, nav, section, aside, article, footer, main, figure }


<!-- CUSTOM ELEMENTS -->
<project></project>
<xyz></xyz>
<foo></foo>


<!-- GRAPHICS -->
{SVG , Canvas}

<!-- MULTIMEDIA -->
{audio, video, source, embed, track }

<!-- APIs -->
- Web workers       - Application cache
- local storage     - SSE
- Geolocation       - Drag & drop

<!-- REMOVED -->
{ applet, dir, font, frame, frameset, no-frame, strike, tt  }


```

#### # CODING CONVENTION

```html
<foo>               <!-- lower-case -->

</foo>              <!-- close all tags (even empty ones) -->
<meta charset="UTF-8"/>
<img/> <br/>

<foo bar="">        <!-- quote attribute values -->

<img src=".." alt=".."><!-- Always use alt -->

<foo space = "bad"  nospace="good"> <!-- avoid spaces for attributes -->

<meta name="viewport" 
      content="width=device-width, initial-scale=1.0">  <!-- use viewport to set defaults -->

<!-- FILENAMES 
Apache, Linux = case-sensitive
Microsoft, IIS = case-insensitive
-->
file.ext                <!-- use lower-case -->

```

#### # SVG / CANVAS

|SVG|CANVAS|
|-|-|
|XML|Javascript|
|Resolution independent|Resolution dependent|
|Good for large & text rendering. `Googlemaps`|Bad for text rendering|
|DOM|pixel-by-pixel|
|Slow|Best for games|

#### # MULTIMEDIA

- **MULTIMEDIA** : { images, music, sound, video, films, animations }
- **Supported**
    - *Audio* : { mp3, wav, ogg }
    - *Video* : { mp4, webmd, ogg }
- `<object>` & `<embed>` are deprecated.
- *YOUTUBE* can be used to embed videos which runs everywhere

```html
<video height="200" width="250" controls>
    <source src="v.mp4" type="video/mp4">
    <source src="v.ogg" type="video/ogg">
    Not supported
</video>
```

#### # GEOLOCATION

#### # DRAG & DROP

- Any element can be draggable
- `<img draggable="true">`

#### # WEB STORAGE (LOCAL STORAGE)

- Store data in local browser
- Better & secure than cookies.
- Data not transfered to server
- Big storage size
- All pages can access data for a particular origin domain

```js
window.localStorage;        // no expire date
window.sessionStorage;      // lost when browser closed

localStorage.setItem("name", "Umesh");
x = localStorage.getItem("name");

localStorage.foo = "bar";
x = localStorage.foo;

localStorage.removeItem("name");
```

#### # WEB WORKERS

- Javascript runs in background (Must be external js file)
- Good for resource intensive tasks

```js
w = new Worker("foo.js");           // create
w.terminate;                        // destroy
```

#### # SERVER SENT EVENTS

- Earlier browser used to request servers.
- Now server keeps sending data to browser without any request.













