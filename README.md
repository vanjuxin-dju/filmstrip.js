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

Further information about using this library can be accessed in a [wiki](https://github.com/vanjuxin-dju/filmstrip.js/wiki) section.

## Types of presentations

There are 2 main types of presentations supported by this library:
- diafilm presentation (filmstrip) with `slides-filmstrip` class (default option):
  - vertical filmstrip (`slides-filmstrip-vertical` class) (default option)
  - horizontal filmstrip (`slides-filmstrip-horizontal` class)
- diapositive slideshow (separate slides) with `slides-separate` class:
  - with offscreen animation set to down (`slides-separate-down` class) (default for diapositive slideshow)
  - with offscreen animation set to up (`slides-separate-up` class)
  - with offscreen animation set to left (`slides-separate-left` class)
  - with offscreen animation set to right (`slides-separate-right` class)

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
- flexible (`slide-format-flexible` class) (default option) - fills the full web view
- 4:3 landscape (`slide-format-4-3-landscape` class) - slide has 4:3 aspect ratio and a landscape orientation
- 16:9 landscape (`slide-format-16-9-landscape` class) - slide has 16:9 aspect ratio and a landscape orientation
- 4:3 portrait (`slide-format-4-3-portrait` class) - slide has 4:3 aspect ratio and a portrait orientation
- 16:9 portrait (`slide-format-16-9-portrait` class) - slide has 16:9 aspect ratio and a portrait orientation
- square (`slide-format-square`) - slide has a square form

## Slide color themes

There are 41 color themes supported by this library (see [wiki](https://github.com/vanjuxin-dju/filmstrip.js/wiki/Slide-color-themes) section).

## Additional features

### Perforations

You can simply add a `show-perforations` class to the root div element (`<div class="slides">`).

It will decorate your presentation with film perforations provided that your presentation type is a filmstrip and the whole presentation has a specific slide format (not flexible one).

This type of decoration is shown in case there is some free space on the left and right sides (for vertical scrolling) or on the top and the bottom sides (for horizontal scrolling).

**The perforations won't be shown if the presentation type is separate diapositive slideshow or some slides have different formats!**

### Automated slides flipping

You can simply add a `data-switch-after="time in seconds"` attribute either to the root div element (`<div class="slides">`) or to a specific slide element (`<section class="slide">`).

It will automate flipping slides in your presentation. 

### Slideshow loop

You can simply add a `data-loop="loop"` attribute to the root div element (`<div class="slides">`).

It will turn your presentation into a continuous slideshow.
