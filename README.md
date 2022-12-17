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

## Slide color themes

There are the following color themes supported by this library:
|          Theme          |             Class             |  Palette (color order: 2 background colors, primary text, secondary text)  |
|-------------------------|-------------------------------|----------------------------------------------------------------------------|
| Default (when not set)  | `theme-default`               | <span style="background-color: #fafaf6;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #ffffff;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #000000;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #999999;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Afternoon               | `theme-afternoon`             | <span style="background-color: #E2C499;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #E8A735;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #8C0004;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #C8000A;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Apples                  | `theme-apples`                | <span style="background-color: #F4EC6A;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #BBCF4A;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #A11F0C;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #E73F0B;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Arctic Sunrise          | `theme-arctic-sunrise`        | <span style="background-color: #FFCCBB;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #E2E8E4;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #006C84;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #6EB5C0;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Autumn                  | `theme-autumn`                | <span style="background-color: #C99E10;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #9B4F0F;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #1E434C;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #8D230F;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Blueberry               | `theme-blueberry`             | <span style="background-color: #1E1F26;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #283655;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #D0E1F9;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #4D648D;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Bossy                   | `theme-bossy`                 | <span style="background-color: #FFFFFF;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #BBC3C6;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #1E1E20;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #962715;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Carrot                  | `theme-carrot`                | <span style="background-color: #F69454;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #EE693F;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #FCFDFE;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #739F3D;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Chocolaty               | `theme-chocolaty`             | <span style="background-color: #DDC5A2;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #B6452C;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #301B28;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #523634;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Cinematic               | `theme-cinematic`             | <span style="background-color: #763626;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #2A3132;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #90AFC5;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #336B87;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Citrus                  | `theme-citrus`                | <span style="background-color: #8EBA43;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #4B7447;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #F9DC24;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #EB8A44;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| City                    | `theme-city`                  | <span style="background-color: #E4E3DB;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #C5BEBA;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #113743;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #C5001A;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Cozy                    | `theme-cozy`                  | <span style="background-color: #EAD39C;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #7D5E3C;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #662225;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #B51D0A;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Creamy Candy            | `theme-creamy-candy`          | <span style="background-color: #C9A66B;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #EBDCB2;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #662E1C;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #AF4425;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Dark Contrast           | `theme-dark-contrast`         | <span style="background-color: #063852;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #011A27;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #E6DF44;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #F0810F;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Dark Pastel             | `theme-dark-pastel`           | <span style="background-color: #9A9EAB;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #5D535E;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #DFE166;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #EC96A4;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Desert                  | `theme-desert`                | <span style="background-color: #BA5536;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #A43820;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #46211A;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #693D3D;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Ecological              | `theme-ecological`            | <span style="background-color: #80BD9E;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #89DA59;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #f5d9d1;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #FF420E;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Elegant                 | `theme-elegant`               | <span style="background-color: #B38540;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #563E20;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #EBDF00;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #aba71c;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Grapefruit              | `theme-grapefruit`            | <span style="background-color: #FA4032;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #FA812F;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #FEF3E2;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #FAAF08;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Greece                  | `theme-greece`                | <span style="background-color: #F4EADE;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #ED8C72;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #2F496E;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #2988BC;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Iceland                 | `theme-iceland`               | <span style="background-color: #66933e;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #AEBD38;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #505160;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #4f6378;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Knowledge               | `theme-knowledge`             | <span style="background-color: #F1DCC9;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #9F4636;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #42313A;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #6C2D2C;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Latte                   | `theme-latte`                 | <span style="background-color: #DDBC95;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #B38867;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #626D71;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #CDCDC0;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Losk                    | `theme-losk`                  | <span style="background-color: #FFFFFF;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #D5D6D2;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #2F2E33;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #3A5199;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Marine Lights           | `theme-marine-lights`         | <span style="background-color: #5EA8A7;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #257985;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #FFFFFF;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #ff8183;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Milky Candy             | `theme-milky-candy`           | <span style="background-color: #D5C3AA;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #EAE2D6;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #867666;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #E1B80D;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Misty Forest            | `theme-misty-forest`          | <span style="background-color: #C9D1C8;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #5B7065;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #04202C;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #304040;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Ocean                   | `theme-ocean`                 | <span style="background-color: #C4DFE6;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #66A5AD;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #003B46;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #07575B;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Rustic                  | `theme-rustic`                | <span style="background-color: #C60000;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #805A3B;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #FEF2E4;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #FD974F;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Seashore                | `theme-seashore`              | <span style="background-color: #F3D3B8;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #A5C3CF;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #A99F3C;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #E59D5C;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Seaside                 | `theme-seaside`               | <span style="background-color: #6AB187;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #20948B;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #F4CC70;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #dda36f;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Shabby                  | `theme-shabby`                | <span style="background-color: #DAC3B3;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #CDAB81;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #4F4A45;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #6C5F5B;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Soft Contrast           | `theme-soft-contrast`         | <span style="background-color: #FCFCFA;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #FFBEBD;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #1A405F;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #337BAE;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Strawberries In Cream   | `theme-strawberries-in-cream` | <span style="background-color: #FCFDFE;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #F5CA99;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #D8412F;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #FE7A47;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Strictness              | `theme-strictness`            | <span style="background-color: #F4F4EF;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #ACBEBE;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #20232A;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #A01D26;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Sunflower               | `theme-sunflower`             | <span style="background-color: #7CAA2D;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #4D85BD;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #F5E356;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #CB6318;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Sunset                  | `theme-sunset`                | <span style="background-color: #363237;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #2D4262;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #D09683;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #73605B;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Warm Nature             | `theme-warm-nature`           | <span style="background-color: #DB9501;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #C05805;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #2E2300;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #6E6702;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Wildberry               | `theme-wildberry`             | <span style="background-color: #E4EA8C;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #3F6C45;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #CB0000;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #50312F;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |
| Wine Cellar             | `theme-wine-cellar`           | <span style="background-color: #500805;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #1E0000;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #BC6D4F;">&nbsp;&nbsp;&nbsp;&nbsp;</span> <span style="background-color: #9D331F;">&nbsp;&nbsp;&nbsp;&nbsp;</span> |

These classes can be added either to the root div element (`<div class="slides">`) or to a specific slide element (`<section class="slide">`).

