# Filmstrip.js

Filmstrip.js is a concept of a front-end library, which allows you to create beautiful presentations in a style of filmstrips (diafilms) or diapositive slideshows.

In order to use the library properly, you should create html file with the following structure:
```
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <title>Presentation title</title>
            <link rel="stylesheet" type="text/css" href="filmstrip.css">
        </head>
        <body class="filmstrip"> <!-- add class "filmstrip" -->
            <div class="slides"> <!-- root element with class "slides" -->
                <section class="slide"> <!-- slide -->
                    <div class="slide-content">
                        <h1>Welcome to Filmstrip.js</h1> <!-- slide contents -->
                    </div>
                </section>
                <section class="slide">
                    <div class="slide-content">
                        <h1>Slide 2</h1>
                    </div>
                </section> <!-- you can create as many slides as you want -->
            </div>
            <script src="filmstrip.js"></script>
        </body>
    </html>
```

You can add some other classes to the root element:

|            Class              |                                               Description                                                 |
|-------------------------------|-----------------------------------------------------------------------------------------------------------|
| `slides-filmstrip-vertical`   | Makes your presentation look like a diafilm filmstrip with vertical scrolling (default if not set).       |
| `slides-filmstrip-horizontal` | Makes your presentation look like a diafilm filmstrip with horizontal scrolling.                          |
| `slides-separate`             | Makes your presentation look like a diapositive slideshow.                                                |
| `slides-separate-down`        | Is used along with `slides-separate` class. Sets up an animation direction to down (default if not set).  |
| `slides-separate-up`          | Is used along with `slides-separate` class. Sets up an animation direction to up.                         |
| `slides-separate-left`        | Is used along with `slides-separate` class. Sets up an animation direction to left.                       |
| `slides-separate-right`       | Is used along with `slides-separate` class. Sets up an animation direction to right.                      |

