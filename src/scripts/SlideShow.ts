import ActionQueue from "./ActionQueue";
import DiapositiveDirection from "./util/DiapositiveDirection";
import FilmstripDirection from "./util/FilmstripDirection";
import { Switch } from "./util/Utils";

const SLIDES = "slides",
      SLIDE = "slide",

      SHOW_OLD_FILM_STYLE = "show-old-film-style",
      OLD_FILM = "old-film",

      PREVIOUS : Switch = "previous",
      NEXT : Switch = "next",

      SHOW_PERFORATIONS = "show-perforations",
      PERFORATION_WRAPPER = "perforation-wrapper",

      slideFormat = SLIDE + "-format-",
      SLIDE_FORMAT_4_3_LANDSCAPE = slideFormat + "4-3-landscape",
      SLIDE_FORMAT_16_9_LANDSCAPE = slideFormat + "16-9-landscape",
      SLIDE_FORMAT_4_3_PORTRAIT = slideFormat + "4-3-portrait",
      SLIDE_FORMAT_16_9_PORTRAIT = slideFormat + "16-9-portrait",
      SLIDE_FORMAT_SQUARE = slideFormat + "square",
      SLIDE_FORMAT_FLEXIBLE = slideFormat + "flexible",
      
      SLIDES_SEPARATE = SLIDES + "-separate",
      SLIDES_SEPARATE_UP = SLIDES_SEPARATE + "-up",
      SLIDES_SEPARATE_LEFT = SLIDES_SEPARATE + "-left",
      SLIDES_SEPARATE_RIGHT = SLIDES_SEPARATE + "-right",
      SLIDES_FILMSTRIP_HORIZONTAL = SLIDES + "-filmstrip-horizontal",
      FLEXIBLE_WARNING_MESSAGE =    "It is not recommended to use flexible slide format!\n" +
                                    "Please use one of the following classes in the root div element or in a slide:\n" +
                                    "- slide-format-4-3-landscape;\n" +
                                    "- slide-format-16-9-landscape;\n" +
                                    "- slide-format-4-3-portrait;\n" +
                                    "- slide-format-16-9-portrait;\n" +
                                    "- slide-format-square.\n" +
                                    "See https://github.com/vanjuxin-dju/filmstrip.js/wiki/Slide-formats";

enum SlideshowStyle {
    SEPARATE,
    FILMSTRIP
};

enum SlideFormat {
    FLEXIBLE,
    SQUARE,
    LANDSCAPE_4_3,
    LANDSCAPE_16_9,
    PORTRAIT_4_3,
    PORTRAIT_16_9
};

class SlideShow {
    private currentSlide : number;
    private actionQueue : ActionQueue;
    private parent : any;
    private isLoop : boolean;
    private slideshowStyle : SlideshowStyle;
    private slidesDirection : FilmstripDirection | DiapositiveDirection;
    private slidesCount : number;
    private automatedSwitchBetweenSlides : string | null;

    constructor(currentSlide? : number) {
        this.currentSlide = 0;
        this.actionQueue = new ActionQueue(this, this.scrollSlide);
        this.parent = document.getElementsByClassName(SLIDES)[0];
        this.isLoop = !!(this.parent.dataset.loop);

        if (this.isLoop) {
            let firstSlideCopy = this.parent.children[0].cloneNode(true);
            this.parent.append(firstSlideCopy);
        }

        if (this.hasSpecificFormat(this.parent) && this.parentHasClass(SHOW_OLD_FILM_STYLE)) {
            this.addOldStyle();
        }

        this.slideshowStyle = this.parentHasClass(SLIDES_SEPARATE) ? SlideshowStyle.SEPARATE : SlideshowStyle.FILMSTRIP;

        if (this.slideshowStyle === SlideshowStyle.SEPARATE) {
            this.slidesDirection =  this.parentHasClass(SLIDES_SEPARATE_UP) ? DiapositiveDirection.UP :
                                    this.parentHasClass(SLIDES_SEPARATE_RIGHT) ? DiapositiveDirection.RIGHT :
                                    this.parentHasClass(SLIDES_SEPARATE_LEFT) ? DiapositiveDirection.LEFT : DiapositiveDirection.DOWN;

        } else {
            this.slidesDirection = this.parentHasClass(SLIDES_FILMSTRIP_HORIZONTAL) ? FilmstripDirection.HORIZONTAL : FilmstripDirection.VERTICAL;

            let slidesMainFormat =  this.parentHasClass(SLIDE_FORMAT_4_3_LANDSCAPE) ? SlideFormat.LANDSCAPE_4_3 :
                                    this.parentHasClass(SLIDE_FORMAT_16_9_LANDSCAPE) ? SlideFormat.LANDSCAPE_16_9 :
                                    this.parentHasClass(SLIDE_FORMAT_4_3_PORTRAIT) ? SlideFormat.PORTRAIT_4_3 :
                                    this.parentHasClass(SLIDE_FORMAT_16_9_PORTRAIT) ? SlideFormat.PORTRAIT_16_9 :
                                    this.parentHasClass(SLIDE_FORMAT_SQUARE) ? SlideFormat.SQUARE : SlideFormat.FLEXIBLE;
            if (this.hasSpecificFormat(this.parent) && this.parentHasClass(SHOW_PERFORATIONS)) {
                switch (slidesMainFormat) {
                    case SlideFormat.LANDSCAPE_4_3:
                        this.addPerforation(this.slidesDirection === FilmstripDirection.VERTICAL ? 4 : 8);
                        break;
                    
                    case SlideFormat.SQUARE:
                        this.addPerforation(4);
                        break;

                    case SlideFormat.LANDSCAPE_16_9:
                        this.addPerforation(this.slidesDirection === FilmstripDirection.VERTICAL ? 3 : 12);
                        break;

                    case SlideFormat.PORTRAIT_4_3:
                        this.addPerforation(this.slidesDirection === FilmstripDirection.VERTICAL ? 8 : 4);
                        break;

                    case SlideFormat.PORTRAIT_16_9:
                        this.addPerforation(this.slidesDirection === FilmstripDirection.VERTICAL ? 12 : 3);
                        break;
                }
            }
        }

        if (!this.hasSpecificFormat(this.parent) || this.isThereFlexibleFormatAmongSlides()) {
            console.warn(FLEXIBLE_WARNING_MESSAGE);
        }

        this.automatedSwitchBetweenSlides = this.parent.dataset.switchAfter;

        this.slidesCount = document.getElementsByClassName(SLIDE).length;
        if (currentSlide && currentSlide > 1) {
            this.currentSlide = currentSlide - 2;
            this.nextSlide();
        }
    }

    private parentHasClass(className: string) : boolean {
        return this.parent.classList.contains(className);
    }

    private addOldStyle() {
        let slides = this.parent.children;
        for (let i = 0; i < slides.length; i++) {
            this.addOldFilmStyleToSlide(slides[i]);
        }
    }

    private addOldFilmStyleToSlide(slide: any) {
        let perforationWrapper = document.createElement("div");
        perforationWrapper.classList.add(OLD_FILM);
        slide.append(perforationWrapper);
    }

    private hasSpecificFormat(element: any) {
        let elemClasses = element.classList;
        return  elemClasses.contains(SLIDE_FORMAT_4_3_LANDSCAPE) || 
                elemClasses.contains(SLIDE_FORMAT_16_9_LANDSCAPE) ||
                elemClasses.contains(SLIDE_FORMAT_4_3_PORTRAIT) ||
                elemClasses.contains(SLIDE_FORMAT_16_9_PORTRAIT) ||
                elemClasses.contains(SLIDE_FORMAT_SQUARE);
    }

    private addPerforation(count: number) {
        let slides = this.parent.children;
        let slidesArray = [...slides];
        let firstSlideIndexWithSpecificFormat = slidesArray.findIndex(slide => this.hasSpecificFormat(slide) || slide.classList.contains(SLIDE_FORMAT_FLEXIBLE));

        if (firstSlideIndexWithSpecificFormat >= 0) {
            return;
        }

        for (let i = 0; i < slides.length; i++) {
            this.addPerforationToSlide(slides[i], count);
        }
    }

    private addPerforationToSlide(slide : any, count : number) {
        let perforationWrapper : any = document.createElement("div");
        perforationWrapper.classList.add(PERFORATION_WRAPPER);
        slide.append(perforationWrapper);
        for (let i = 1; i < count; i++) {
            perforationWrapper = perforationWrapper.cloneNode(false);
            slide.append(perforationWrapper);
        }
    }

    private isThereFlexibleFormatAmongSlides() : boolean {
        let slides = this.parent.children;
        let slidesArray = [...slides];
        return !!slidesArray.find(slide => slide.classList.contains(SLIDE_FORMAT_FLEXIBLE))
    }

    private scrollSlide(direction : Switch, callback : Function) {
        const scrollStep = 100;
        const startingPoint = this.currentSlide * (-100);
        let step = 1;
        let i = 1;

        const switchSlide = () => {
            if (direction === NEXT) {
                this.currentSlide++;
            } else {
                this.currentSlide--;
            }
        }
    
        const animateScroll = () => {
            setTimeout(() => {
                if (this.slidesDirection === FilmstripDirection.VERTICAL) {
                    this.parent.style.top = (direction === NEXT ? startingPoint - i : startingPoint + i) + "vh";
                } else {
                    this.parent.style.left = (direction === NEXT ? startingPoint - i : startingPoint + i) + "vw";
                }
    
                if (i < scrollStep / 2) {
                    step++;
                } else {
                    if (step > 1) {
                        step--;
                    }
                }
                i += step;
                if (i <= scrollStep) {
                    animateScroll();
                } else {
                    switchSlide();
                    if (this.isLoop && this.isEnding()) {
                        this.currentSlide = 0;
                        if (this.slidesDirection === FilmstripDirection.VERTICAL) {
                            this.parent.style.top = "0vh";
                        } else {
                            this.parent.style.left = "0vw";
                        }
                    }
                    callback();
                }
            }, 20);
        };

        const animateSlideOffScreen = (reverse? : boolean) => {
            setTimeout(() => {
                if (this.slidesDirection === DiapositiveDirection.UP) {
                    this.parent.style.top = -(reverse ? 100 - i : i) + "vh";
                } else if (this.slidesDirection === DiapositiveDirection.RIGHT) {
                    this.parent.style.left = (reverse ? 100 - i : i) + "vw";
                } else if (this.slidesDirection === DiapositiveDirection.LEFT) {
                    this.parent.style.left = -(reverse ? 100 - i : i) + "vw";
                } else {
                    this.parent.style.top = (reverse ? 100 - i : i) + "vh";
                }

                if (i < scrollStep / 2) {
                    step++;
                } else {
                    if (step > 1) {
                        step--;
                    }
                }
                i += step;

                if (reverse) {
                    if (i <= scrollStep) {
                        animateSlideOffScreen(true);
                    } else {
                        switchSlide();
                        if (this.isLoop && this.isEnding()) {
                            this.currentSlide = 0;
                            if (this.slidesDirection === DiapositiveDirection.UP || this.slidesDirection === DiapositiveDirection.DOWN) {
                                this.parent.style.left = "0vw";
                            } else {
                                this.parent.style.top = "0vh";
                            }
                        }
                        callback();
                    }
                } else {
                    if (i <= scrollStep) {
                        animateSlideOffScreen(false);
                    } else {
                        if (this.slidesDirection === DiapositiveDirection.UP || this.slidesDirection === DiapositiveDirection.DOWN) {
                            this.parent.style.left = (direction === NEXT ? startingPoint - 100 : startingPoint + 100) + "vw";
                        } else {
                            this.parent.style.top = (direction === NEXT ? startingPoint - 100 : startingPoint + 100) + "vh";
                        }
                        
                        step = 1;
                        i = 1;
                        animateSlideOffScreen(true);
                    }
                }
            }, 20);
        };

        if ((this.isBeginning() && direction === PREVIOUS) || (this.isEnding() && direction === NEXT)) {
            callback();
            return;
        }

        if (this.slideshowStyle === SlideshowStyle.SEPARATE) {
            animateSlideOffScreen();
        } else {
            animateScroll();
        }
        
    }

    previousSlide(callback? : Function) {
        this.actionQueue.addAction(PREVIOUS, callback);
    }

    nextSlide(callback? : Function) {
        this.actionQueue.addAction(NEXT, callback);
    }

    getSlidesDirection() {
        return this.slidesDirection;
    }

    getIsLoop() {
        return this.isLoop;
    }

    getDefaultTimeBetweenSlides() {
        return this.automatedSwitchBetweenSlides ? parseInt(this.automatedSwitchBetweenSlides) : 0;
    }

    getCurrentSlideSwitchAfter() {
        const currentSlideElement = this.parent.children[this.currentSlide];
        const time = currentSlideElement.dataset.switchAfter;
        return time ? parseInt(time) : 0;
    }

    isBeginning() {
        return this.currentSlide === 0;
    }

    isEnding() {
        return this.currentSlide + 1 === this.slidesCount;
    }
}

export default SlideShow;