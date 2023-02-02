const slideFormat = "slide-format-",
      SLIDE_FORMAT_4_3_LANDSCAPE = slideFormat + "4-3-landscape",
      SLIDE_FORMAT_16_9_LANDSCAPE = slideFormat + "16-9-landscape",
      SLIDE_FORMAT_4_3_PORTRAIT = slideFormat + "4-3-portrait",
      SLIDE_FORMAT_16_9_PORTRAIT = slideFormat + "16-9-portrait",
      SLIDE_FORMAT_SQUARE = slideFormat + "square";

const UTIL = {
    hasSpecificFormat : (element: Element) : boolean  => {
        let elemClasses = element.classList;
        return  elemClasses.contains(SLIDE_FORMAT_4_3_LANDSCAPE) || 
                elemClasses.contains(SLIDE_FORMAT_16_9_LANDSCAPE) ||
                elemClasses.contains(SLIDE_FORMAT_4_3_PORTRAIT) ||
                elemClasses.contains(SLIDE_FORMAT_16_9_PORTRAIT) ||
                elemClasses.contains(SLIDE_FORMAT_SQUARE);
    }
};

export default UTIL;