import ActionQueue from "./ActionQueue";
import Oldifier from "./interfaces/Oldifier";
import Perforator from "./interfaces/Perforator";
import DiapositiveDirection from "./util/DiapositiveDirection";
import FilmstripDirection from "./util/FilmstripDirection";
import SlideFormat from "./util/SlideFormat";
import { Switch, PREVIOUS, NEXT } from "./util/Switch";
import UTIL from "./util/Util";

const SLIDES = "slides",
      SLIDE = "slide",

      SHOW_OLD_FILM_STYLE = "show-old-film-style",

      SHOW_PERFORATIONS = "show-perforations",

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

class SlideShow {
    private currentSlide : number;
    private actionQueue : ActionQueue;
    private parent : HTMLElement;
    private isLoop : boolean;
    private slideshowStyle : SlideshowStyle;
    private slidesDirection : FilmstripDirection | DiapositiveDirection;
    private slidesCount : number;
    private automatedSwitchBetweenSlides : string | null;

    constructor(currentSlide : number, perforator? : Perforator, oldifier? : Oldifier) {
        this.currentSlide = 0;
        this.actionQueue = new ActionQueue(this, this.scrollSlide);
        this.parent = document.getElementsByClassName(SLIDES)[0] as HTMLElement;
        this.isLoop = !!(this.parent.dataset.loop);

        if (this.isLoop) {
            let firstSlideCopy : Node = this.parent.children[0].cloneNode(true);
            this.parent.append(firstSlideCopy);
        }

        if (UTIL.hasSpecificFormat(this.parent) && this.parentHasClass(SHOW_OLD_FILM_STYLE) && oldifier) {
            oldifier.oldify(this.parent);
        }

        this.slideshowStyle = this.parentHasClass(SLIDES_SEPARATE) ? SlideshowStyle.SEPARATE : SlideshowStyle.FILMSTRIP;

        if (this.slideshowStyle === SlideshowStyle.SEPARATE) {
            this.slidesDirection =  this.parentHasClass(SLIDES_SEPARATE_UP) ? DiapositiveDirection.UP :
                                    this.parentHasClass(SLIDES_SEPARATE_RIGHT) ? DiapositiveDirection.RIGHT :
                                    this.parentHasClass(SLIDES_SEPARATE_LEFT) ? DiapositiveDirection.LEFT : DiapositiveDirection.DOWN;

        } else {
            this.slidesDirection = this.parentHasClass(SLIDES_FILMSTRIP_HORIZONTAL) ? FilmstripDirection.HORIZONTAL : FilmstripDirection.VERTICAL;

            let slidesMainFormat: SlideFormat = this.parentHasClass(SLIDE_FORMAT_4_3_LANDSCAPE) ? SlideFormat.LANDSCAPE_4_3 :
                                                this.parentHasClass(SLIDE_FORMAT_16_9_LANDSCAPE) ? SlideFormat.LANDSCAPE_16_9 :
                                                this.parentHasClass(SLIDE_FORMAT_4_3_PORTRAIT) ? SlideFormat.PORTRAIT_4_3 :
                                                this.parentHasClass(SLIDE_FORMAT_16_9_PORTRAIT) ? SlideFormat.PORTRAIT_16_9 :
                                                this.parentHasClass(SLIDE_FORMAT_SQUARE) ? SlideFormat.SQUARE : SlideFormat.FLEXIBLE;
            if (UTIL.hasSpecificFormat(this.parent) && this.parentHasClass(SHOW_PERFORATIONS) && perforator) {
                perforator.perforate(this.parent, slidesMainFormat, this.slidesDirection);
            }
        }

        if (!UTIL.hasSpecificFormat(this.parent) || this.isThereFlexibleFormatAmongSlides()) {
            console.warn(FLEXIBLE_WARNING_MESSAGE);
        }

        this.automatedSwitchBetweenSlides = this.parent.dataset.switchAfter !== undefined ? this.parent.dataset.switchAfter : null;

        this.slidesCount = document.getElementsByClassName(SLIDE).length;
        if (currentSlide && currentSlide > 1) {
            this.currentSlide = currentSlide - 2;
            this.nextSlide();
        }
    }

    private parentHasClass(className: string) : boolean {
        return this.parent.classList.contains(className);
    }

    private isThereFlexibleFormatAmongSlides() : boolean {
        let slides = this.parent.children;
        let slidesArray = Array.from(slides);
        return !!slidesArray.find(slide => slide.classList.contains(SLIDE_FORMAT_FLEXIBLE))
    }

    private scrollSlide(direction: Switch, callback: Function): void {
        const scrollStep = 100;
        const startingPoint = this.currentSlide * (-100);
        let step = 1;
        let i = 1;

        const switchSlide = (): void => {
            if (direction === NEXT) {
                this.currentSlide++;
            } else {
                this.currentSlide--;
            }
        }
    
        const animateScroll = (): void => {
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

        const animateSlideOffScreen = (reverse?: boolean): void => {
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

    previousSlide(callback? : Function): void {
        this.actionQueue.addAction(PREVIOUS, callback);
    }

    nextSlide(callback? : Function): void {
        this.actionQueue.addAction(NEXT, callback);
    }

    getSlidesDirection(): FilmstripDirection | DiapositiveDirection {
        return this.slidesDirection;
    }

    getIsLoop(): boolean {
        return this.isLoop;
    }

    getDefaultTimeBetweenSlides(): number {
        return this.automatedSwitchBetweenSlides ? parseInt(this.automatedSwitchBetweenSlides) : 0;
    }

    getCurrentSlideSwitchAfter(): number {
        const currentSlideElement : HTMLElement = this.parent.children[this.currentSlide] as HTMLElement;
        const time = currentSlideElement.dataset.switchAfter;
        return time ? parseInt(time) : 0;
    }

    isBeginning(): boolean {
        return this.currentSlide === 0;
    }

    isEnding(): boolean {
        return this.currentSlide + 1 === this.slidesCount;
    }
}

export default SlideShow;