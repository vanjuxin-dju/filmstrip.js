const classes = {
    SLIDES : "slides",
    SLIDE : "slide",
};

classes.SLIDES_SEPARATE = classes.SLIDES + "-separate";
classes.SLIDES_SEPARATE_UP = classes.SLIDES_SEPARATE + "-up";
classes.SLIDES_SEPARATE_LEFT = classes.SLIDES_SEPARATE + "-left";
classes.SLIDES_SEPARATE_RIGHT = classes.SLIDES_SEPARATE + "-right";
classes.SLIDES_FILMSTRIP_HORIZONTAL = classes.SLIDES + "-filmstrip-horizontal";

const slideFormat = classes.SLIDE + "-format-";
classes.SLIDE_FORMAT_4_3_LANDSCAPE = slideFormat + "4-3-landscape";
classes.SLIDE_FORMAT_16_9_LANDSCAPE = slideFormat + "16-9-landscape";
classes.SLIDE_FORMAT_4_3_PORTRAIT = slideFormat + "4-3-portrait";
classes.SLIDE_FORMAT_16_9_PORTRAIT = slideFormat + "16-9-portrait";
classes.SLIDE_FORMAT_SQUARE = slideFormat + "square";
classes.SLIDE_FORMAT_FLEXIBLE = slideFormat + "flexible";

classes.SHOW_PERFORATIONS = "show-perforations";
classes.PERFORATION_WRAPPER = "perforation-wrapper";

export default {
    SLIDESHOW_TYPE : {
        SEPARATE : "separate",
        FILMSTRIP : "filmstrip",
    },

    SEPARATE_SLIDES_DIRECTION : {
        UP : "up",
        DOWN : "down",
        LEFT : "left",
        RIGHT : "right",
    },

    FILMSTRIP_DIRECTION : {
        HORIZONTAL : "horizontal",
        VERTICAL : "vertical",
    },

    SLIDE_FORMAT : {
        FLEXIBLE : "flexible",
        SQUARE : "square",
        LANDSCAPE_4_3 : "4:3-landscape",
        LANDSCAPE_16_9 : "16:9-landscape",
        PORTRAIT_4_3 : "4:3-portrait",
        PORTRAIT_16_9 : "16:9-portrait",
    },

    CLASSES : classes,

    SWITCHES : {
        PREVIOUS : "previous",
        NEXT : "next"
    },

    hasSpecificFormat : (element) => {
        let elemClasses = element.classList;
        return  elemClasses.contains(classes.SLIDE_FORMAT_4_3_LANDSCAPE) || 
                elemClasses.contains(classes.SLIDE_FORMAT_16_9_LANDSCAPE) ||
                elemClasses.contains(classes.SLIDE_FORMAT_4_3_PORTRAIT) ||
                elemClasses.contains(classes.SLIDE_FORMAT_16_9_PORTRAIT) ||
                elemClasses.contains(classes.SLIDE_FORMAT_SQUARE);
    },

    addPerforationToSlide : (slide, count) => {
        let perforationWrapper = document.createElement("div");
        perforationWrapper.classList.add(classes.PERFORATION_WRAPPER);
        slide.append(perforationWrapper);
        for (let i = 1; i < count; i++) {
            perforationWrapper = perforationWrapper.cloneNode(false);
            slide.append(perforationWrapper);
        }
    },
};