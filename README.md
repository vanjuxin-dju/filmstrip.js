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
|          Theme          |             Class             | Palette (2 background colors, primary text, secondary text)  |
|-------------------------|-------------------------------|--------------------------------------------------------------|
| Default (when not set)  | `theme-default`               | (`#fafaf6`, `#ffffff`, `#000000`, `#999999`)                 |
| Afternoon               | `theme-afternoon`             | (`#E2C499`, `#E8A735`, `#8C0004`, `#C8000A`)                 |
| Apples                  | `theme-apples`                | (`#F4EC6A`, `#BBCF4A`, `#A11F0C`, `#E73F0B`)                 |
| Arctic Sunrise          | `theme-arctic-sunrise`        | (`#FFCCBB`, `#E2E8E4`, `#006C84`, `#6EB5C0`)                 |
| Autumn                  | `theme-autumn`                | (`#C99E10`, `#9B4F0F`, `#1E434C`, `#8D230F`)                 |
| Blueberry               | `theme-blueberry`             | (`#1E1F26`, `#283655`, `#D0E1F9`, `#4D648D`)                 |
| Bossy                   | `theme-bossy`                 | (`#FFFFFF`, `#BBC3C6`, `#1E1E20`, `#962715`)                 |
| Carrot                  | `theme-carrot`                | (`#F69454`, `#EE693F`, `#FCFDFE`, `#739F3D`)                 |
| Chocolaty               | `theme-chocolaty`             | (`#DDC5A2`, `#B6452C`, `#301B28`, `#523634`)                 |
| Cinematic               | `theme-cinematic`             | (`#763626`, `#2A3132`, `#90AFC5`, `#336B87`)                 |
| Citrus                  | `theme-citrus`                | (`#8EBA43`, `#4B7447`, `#F9DC24`, `#EB8A44`)                 |
| City                    | `theme-city`                  | (`#E4E3DB`, `#C5BEBA`, `#113743`, `#C5001A`)                 |
| Cozy                    | `theme-cozy`                  | (`#EAD39C`, `#7D5E3C`, `#662225`, `#B51D0A`)                 |
| Creamy Candy            | `theme-creamy-candy`          | (`#C9A66B`, `#EBDCB2`, `#662E1C`, `#AF4425`)                 |
| Dark Contrast           | `theme-dark-contrast`         | (`#063852`, `#011A27`, `#E6DF44`, `#F0810F`)                 |
| Dark Pastel             | `theme-dark-pastel`           | (`#9A9EAB`, `#5D535E`, `#DFE166`, `#EC96A4`)                 |
| Desert                  | `theme-desert`                | (`#BA5536`, `#A43820`, `#46211A`, `#693D3D`)                 |
| Ecological              | `theme-ecological`            | (`#80BD9E`, `#89DA59`, `#f5d9d1`, `#FF420E`)                 |
| Elegant                 | `theme-elegant`               | (`#B38540`, `#563E20`, `#EBDF00`, `#aba71c`)                 |
| Grapefruit              | `theme-grapefruit`            | (`#FA4032`, `#FA812F`, `#FEF3E2`, `#FAAF08`)                 |
| Greece                  | `theme-greece`                | (`#F4EADE`, `#ED8C72`, `#2F496E`, `#2988BC`)                 |
| Iceland                 | `theme-iceland`               | (`#66933e`, `#AEBD38`, `#505160`, `#4f6378`)                 |
| Knowledge               | `theme-knowledge`             | (`#F1DCC9`, `#9F4636`, `#42313A`, `#6C2D2C`)                 |
| Latte                   | `theme-latte`                 | (`#DDBC95`, `#B38867`, `#626D71`, `#CDCDC0`)                 |
| Losk                    | `theme-losk`                  | (`#FFFFFF`, `#D5D6D2`, `#2F2E33`, `#3A5199`)                 |
| Marine Lights           | `theme-marine-lights`         | (`#5EA8A7`, `#257985`, `#FFFFFF`, `#ff8183`)                 |
| Milky Candy             | `theme-milky-candy`           | (`#D5C3AA`, `#EAE2D6`, `#867666`, `#E1B80D`)                 |
| Misty Forest            | `theme-misty-forest`          | (`#C9D1C8`, `#5B7065`, `#04202C`, `#304040`)                 |
| Ocean                   | `theme-ocean`                 | (`#C4DFE6`, `#66A5AD`, `#003B46`, `#07575B`)                 |
| Rustic                  | `theme-rustic`                | (`#C60000`, `#805A3B`, `#FEF2E4`, `#FD974F`)                 |
| Seashore                | `theme-seashore`              | (`#F3D3B8`, `#A5C3CF`, `#A99F3C`, `#E59D5C`)                 |
| Seaside                 | `theme-seaside`               | (`#6AB187`, `#20948B`, `#F4CC70`, `#dda36f`)                 |
| Shabby                  | `theme-shabby`                | (`#DAC3B3`, `#CDAB81`, `#4F4A45`, `#6C5F5B`)                 |
| Soft Contrast           | `theme-soft-contrast`         | (`#FCFCFA`, `#FFBEBD`, `#1A405F`, `#337BAE`)                 |
| Strawberries In Cream   | `theme-strawberries-in-cream` | (`#FCFDFE`, `#F5CA99`, `#D8412F`, `#FE7A47`)                 |
| Strictness              | `theme-strictness`            | (`#F4F4EF`, `#ACBEBE`, `#20232A`, `#A01D26`)                 |
| Sunflower               | `theme-sunflower`             | (`#7CAA2D`, `#4D85BD`, `#F5E356`, `#CB6318`)                 |
| Sunset                  | `theme-sunset`                | (`#363237`, `#2D4262`, `#D09683`, `#73605B`)                 |
| Warm Nature             | `theme-warm-nature`           | (`#DB9501`, `#C05805`, `#2E2300`, `#6E6702`)                 |
| Wildberry               | `theme-wildberry`             | (`#E4EA8C`, `#3F6C45`, `#CB0000`, `#50312F`)                 |
| Wine Cellar             | `theme-wine-cellar`           | (`#500805`, `#1E0000`, `#BC6D4F`, `#9D331F`)                 |

These classes can be added either to the root div element (`<div class="slides">`) or to a specific slide element (`<section class="slide">`).

## Additional features

### Perforations

You can simply add a `show-perforations` class to the root div element (`<div class="slides">`).

It will decorate your presentation with film perforations provided that your presentation type is a filmstrip and the whole presentation has a specific slide format (not flexible one).

This type of decoration is shown in case there is some free space on the left and right sides (for vertical scrolling) or on the top and the bottom sides (for horizontal scrolling).

**The perforations won't be shown if the presentation type is separate diapositive slideshow or some slides have different formats!**

### Automated slides flipping

You can simply add a `data-switch-after="time in seconds"` attribute either to the root div element (`<div class="slides">`) or to a specific slide element (`<section class="slide">`).

It will automate flipping slides in your presentation. 

