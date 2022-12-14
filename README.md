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
        <div class="slides"> <!-- root div element with class "slides" -->
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

## Types of presentations
You can add some other classes to the root div element:

|            Class              |                                               Description                                                 |
|-------------------------------|-----------------------------------------------------------------------------------------------------------|
| `slides-filmstrip`            | Makes your presentation look like a diafilm filmstrip (default if not set).                               |
| `slides-filmstrip-vertical`   | Is used along with `slides-filmstrip` class. Sets up vertical scrolling (default if not set).             |
| `slides-filmstrip-horizontal` | Is used along with `slides-filmstrip` class. Sets up horizontal scrolling.                                |
| `slides-separate`             | Makes your presentation look like a diapositive slideshow.                                                |
| `slides-separate-down`        | Is used along with `slides-separate` class. Sets up an animation direction to down (default if not set).  |
| `slides-separate-up`          | Is used along with `slides-separate` class. Sets up an animation direction to up.                         |
| `slides-separate-left`        | Is used along with `slides-separate` class. Sets up an animation direction to left.                       |
| `slides-separate-right`       | Is used along with `slides-separate` class. Sets up an animation direction to right.                      |

## Slide content rules and styles
Slide content can contain such tags as:
- `h1` - for main headers. The tag can have `header-huge` class for bigger header.
- `h2` - for subheaders.
- `p` - for paragraphs. The tag can have `p-small` class for smaller text, `p-big` for bigger text, `p-image` for embedding image.
- `img` - for embedding images (can be used under `p` tag with `p-image` class).
- `ul` - for unordered lists. The tag can have `disc-list`, `circle-list`, `square-list`, or `triangle-list`, depending on what type of bullet list you need.
- `ol` - for ordered lists. The tag can have `decimal-list`, `upper-roman-list`, `lower-roman-list`, `upper-latin-letters`, or `lower-latin-letters`, depending on what type of ordered list you need.
- `li` - for list items under `ul` and `ol` tags.

`ul` and `ol` tags can have `no-markers` class for list without markers.

All block tags can also have such classes as `text-left`, `text-center`, or `text-right`, depending on how you would like to align your text.

## Slide formats
There are the following slide formats:

| Format | Class | Description |
|--------|-------|-------------|
| Flexible | `slide-format-flexible` | Your presentation or a specific slide fills the full web view (default for the whole presentation, the class helps a specific slide to revert to defaults). |
| 4:3 landscape | `slide-format-4-3-landscape` | Your presentation or a specific slide has 4:3 aspect ratio and a landscape orientation. |
| 16:9 landscape | `slide-format-16-9-landscape` | Your presentation or a specific slide has 16:9 aspect ratio and a landscape orientation. |
| 4:3 portrait | `slide-format-4-3-portrait` | Your presentation or a specific slide has 4:3 aspect ratio and a portrait orientation. |
| 16:9 portrait | `slide-format-16-9-portrait` | Your presentation or a specific slide has 16:9 aspect ratio and a portrait orientation. |
| Square | `slide-format-square` | Your presentation or a specific slide has a square form. |

These classes can be added either to the root div element (`<div class="slides">`) or to a specific slide element (`<section class="slide">`).
