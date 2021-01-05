# HTML 5

```html
<!DOCTYPE html>
<meta charset="UTF-8" />

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
- Web workers - Application cache - local storage - SSE - Geolocation - Drag &
drop

<!-- REMOVED -->
{ applet, dir, font, frame, frameset, no-frame, strike, tt }
```

## Coding Conventions

```html
<foo> <!-- lower-case --> </foo>
<!-- close all tags (even empty ones) -->
<meta charset="UTF-8" />
<img /> <br />

<foo bar="">
  <!-- quote attribute values -->

  <img src=".." alt=".." /><!-- Always use alt -->

  <foo space="bad" nospace="good">
    <!-- avoid spaces for attributes -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- use viewport to set defaults -->

    <!-- FILENAMES 
Apache, Linux = case-sensitive
Microsoft, IIS = case-insensitive
-->
    file.ext
    <!-- use lower-case -->
  </foo></foo
>
```

## Svg Vs Canvas

| SVG                                           | CANVAS                 |
| --------------------------------------------- | ---------------------- |
| XML                                           | Javascript             |
| Resolution independent                        | Resolution dependent   |
| Good for large & text rendering. `Googlemaps` | Bad for text rendering |
| DOM                                           | pixel-by-pixel         |
| Slow                                          | Best for games         |

## Multimedia

- **MULTIMEDIA** : { images, music, sound, video, films, animations }
- **Supported**
  - _Audio_ : { mp3, wav, ogg }
  - _Video_ : { mp4, webmd, ogg }
- `<object>` & `<embed>` are deprecated.
- _YOUTUBE_ can be used to embed videos which runs everywhere

```html
<video height="200" width="250" controls>
  <source src="v.mp4" type="video/mp4" />
  <source src="v.ogg" type="video/ogg" />
  Not supported
</video>
```

## Drag & Drop

- Any element can be draggable
- `<img draggable="true">`

## Browser Storage

- Types of Browser storage
  - Cookies
  - Web Storage
    - _localStorage_
    - _sessionStorage_ - data lost when browser is closed
  - IndexedDB - complete database with options for text, images, videos & almost anything
  - Cache Api (normally with _Webworkers_)

### Web Storage Api

- More storage than cookie.
- Unlike cookie the web storage is not sent to server.
- Separate storage based on `protocol/domain/port`

```js
let ls = localStorage;
// let ss = sessionStorage; // same methods as local

// way 1
ls.foo = "bar"; // set
ls.foo; // get
// way 2
ls.setItem("name", "umesh");
ls.getItem("name");

// remove
ls.removeItem("name");
ls.clear(); // all clear

// others
ls.key(index);
ls.length; // total items
```

### IndexedDB (TODO)

- TODO - Learn when needed.
- [jakearchibald/idb](https://github.com/jakearchibald/idb)

## Web Workers

- Javascript runs in background (Must be external js file)
- Good for resource intensive tasks

```js
w = new Worker("foo.js"); // create
w.terminate; // destroy
```

## Canvas Api

- Types of Canvas
  - 2d
  - webGL
  - webGL2

See basics below or check in [canvas sandbox](https://codesandbox.io/s/canvas-basics-8ut6r)

```js
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, width, height);

// basics
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 100, 150);
ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
ctx.fillRect(25, 100, 175, 50);
// stroke
ctx.strokeStyle = "rgb(0, 255, 0)";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);

// helper for path
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// path
ctx.fillStyle = "rgb(255, 255, 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
let triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();

// circle
ctx.fillStyle = "rgb(0, 0, 255)";
ctx.beginPath();
ctx.arc(250, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();

// circle 2
ctx.fillStyle = "rgb(0, 255, 255)";
ctx.beginPath();
ctx.arc(400, 106, 50, degToRad(-45), degToRad(45), true);
ctx.fill();

// circle 3 - pacman
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(600, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(600, 106);
ctx.fill();

// text stroke
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 50, 350);
// text filled
ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 50, 450);

// image
let image = new Image();
image.src = "https://v1.vuepress.vuejs.org/hero.png";
image.onload = function() {
  ctx.drawImage(image, 350, 150);
  ctx.drawImage(image, 200, 150, 185, 175, 50, 500, 185, 175);
};
```

## Server Sent Events

- Earlier browser used to request servers.
- Now server keeps sending data to browser without any request.

## Geolocation (Todo)

- TODO
