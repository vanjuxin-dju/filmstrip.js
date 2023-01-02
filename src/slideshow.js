import UTIL from "./util";

export default class SlideShow {
    #currentSlide = 0;

    constructor(currentSlide) {
        this._parent = document.getElementsByClassName(UTIL.CLASSES.SLIDES)[0];
        this._isLoop = !!(this._parent.dataset.loop);
        if (this._isLoop) {
            let firstSlideCopy = this._parent.children[0].cloneNode(true);
            this._parent.append(firstSlideCopy);
        }

        this._slideshowStyle = this.#parentHasClass(UTIL.CLASSES.SLIDES_SEPARATE) ? UTIL.SLIDESHOW_TYPE.SEPARATE : UTIL.SLIDESHOW_TYPE.FILMSTRIP;
        if (this._slideshowStyle === UTIL.SLIDESHOW_TYPE.SEPARATE) {
            this._slidesDirection = this.#parentHasClass(UTIL.CLASSES.SLIDES_SEPARATE_UP) ? UTIL.SEPARATE_SLIDES_DIRECTION.UP :
                                    this.#parentHasClass(UTIL.CLASSES.SLIDES_SEPARATE_RIGHT) ? UTIL.SEPARATE_SLIDES_DIRECTION.RIGHT :
                                    this.#parentHasClass(UTIL.CLASSES.SLIDES_SEPARATE_LEFT) ? UTIL.SEPARATE_SLIDES_DIRECTION.LEFT : UTIL.SEPARATE_SLIDES_DIRECTION.DOWN;

        } else {
            this._slidesDirection = this.#parentHasClass(UTIL.CLASSES.SLIDES_FILMSTRIP_HORIZONTAL) ? UTIL.FILMSTRIP_DIRECTION.HORIZONTAL : UTIL.FILMSTRIP_DIRECTION.VERTICAL;

            let slidesMainFormat =  this.#parentHasClass(UTIL.CLASSES.SLIDE_FORMAT_4_3_LANDSCAPE) ? UTIL.SLIDE_FORMAT.LANDSCAPE_4_3 :
                                    this.#parentHasClass(UTIL.CLASSES.SLIDE_FORMAT_16_9_LANDSCAPE) ? UTIL.SLIDE_FORMAT.LANDSCAPE_16_9 :
                                    this.#parentHasClass(UTIL.CLASSES.SLIDE_FORMAT_4_3_PORTRAIT) ? UTIL.SLIDE_FORMAT.PORTRAIT_4_3 :
                                    this.#parentHasClass(UTIL.CLASSES.SLIDE_FORMAT_16_9_PORTRAIT) ? UTIL.SLIDE_FORMAT.PORTRAIT_16_9 :
                                    this.#parentHasClass(UTIL.CLASSES.SLIDE_FORMAT_SQUARE) ? UTIL.SLIDE_FORMAT.SQUARE : UTIL.SLIDE_FORMAT.FLEXIBLE;
            if (UTIL.hasSpecificFormat(this._parent) && this.#parentHasClass(UTIL.CLASSES.SHOW_PERFORATIONS)) {
                switch (slidesMainFormat) {
                    case UTIL.SLIDE_FORMAT.LANDSCAPE_4_3:
                        this.#addPerforation(this._slidesDirection === UTIL.FILMSTRIP_DIRECTION.VERTICAL ? 4 : 8);
                        break;
                    
                    case UTIL.SLIDE_FORMAT.SQUARE:
                        this.#addPerforation(4);
                        break;

                    case UTIL.SLIDE_FORMAT.LANDSCAPE_16_9:
                        this.#addPerforation(this._slidesDirection === UTIL.FILMSTRIP_DIRECTION.VERTICAL ? 3 : 12);
                        break;

                    case UTIL.SLIDE_FORMAT.PORTRAIT_4_3:
                        this.#addPerforation(this._slidesDirection === UTIL.FILMSTRIP_DIRECTION.VERTICAL ? 8 : 4);
                        break;

                    case UTIL.SLIDE_FORMAT.PORTRAIT_16_9:
                        this.#addPerforation(this._slidesDirection === UTIL.FILMSTRIP_DIRECTION.VERTICAL ? 12 : 3);
                        break;
                }
                
            }
        }

        this._automatedSwitchBetweenSlides = this._parent.dataset.switchAfter;
        this.#setAutomatedSwitch();

        this._slidesCount = document.getElementsByClassName(UTIL.CLASSES.SLIDE).length;
        if (currentSlide && currentSlide > 1) {
            this.#currentSlide = currentSlide - 2;
            this.nextSlide();
        }
    }

    #addPerforation(count) {
        let slides = this._parent.children;
        for (let i = 0; i < slides.length; i++) {
            if (UTIL.hasSpecificFormat(slides[i])) {
                return;
            }
        }

        for (let i = 0; i < slides.length; i++) {
            UTIL.addPerforationToSlide(slides[i], count);
        }
    }

    #parentHasClass(className) {
        return this._parent.classList.contains(className);
    }

    #scrollSlide(direction) {
        const scrollStep = 100;
        const startingPoint = this.#currentSlide * (-100);
        let step = 1;
        let i = 1;
    
        const animateScroll = () => {
            setTimeout(() => {
                if (this._slidesDirection === UTIL.FILMSTRIP_DIRECTION.VERTICAL) {
                    this._parent.style.top = (direction === UTIL.SWITCHES.NEXT ? startingPoint - i : startingPoint + i) + "vh";
                } else {
                    this._parent.style.left = (direction === UTIL.SWITCHES.NEXT ? startingPoint - i : startingPoint + i) + "vw";
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
                    if (this._isLoop && this.isEnding()) {
                        this.#currentSlide = 0;
                        if (this._slidesDirection === UTIL.FILMSTRIP_DIRECTION.VERTICAL) {
                            this._parent.style.top = "0vh";
                        } else {
                            this._parent.style.left = "0vw";
                        }
                    }
                }
            }, 20);
        };

        const animateSlideOffScreen = (reverse) => {
            setTimeout(() => {
                if (this._slidesDirection === UTIL.SEPARATE_SLIDES_DIRECTION.UP) {
                    this._parent.style.top = -(reverse ? 100 - i : i) + "vh";
                } else if (this._slidesDirection === UTIL.SEPARATE_SLIDES_DIRECTION.RIGHT) {
                    this._parent.style.left = (reverse ? 100 - i : i) + "vw";
                } else if (this._slidesDirection === UTIL.SEPARATE_SLIDES_DIRECTION.LEFT) {
                    this._parent.style.left = -(reverse ? 100 - i : i) + "vw";
                } else {
                    this._parent.style.top = (reverse ? 100 - i : i) + "vh";
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
                        if (this._isLoop && this.isEnding()) {
                            this.#currentSlide = 0;
                            if (this._slidesDirection === UTIL.SEPARATE_SLIDES_DIRECTION.UP || this._slidesDirection === UTIL.SEPARATE_SLIDES_DIRECTION.DOWN) {
                                this._parent.style.left = "0vw";
                            } else {
                                this._parent.style.top = "0vh";
                            }
                        }
                    }
                } else {
                    if (i <= scrollStep) {
                        animateSlideOffScreen(false);
                    } else {
                        if (this._slidesDirection === UTIL.SEPARATE_SLIDES_DIRECTION.UP || this._slidesDirection === UTIL.SEPARATE_SLIDES_DIRECTION.DOWN) {
                            this._parent.style.left = (direction === UTIL.SWITCHES.NEXT ? startingPoint - 100 : startingPoint + 100) + "vw";
                        } else {
                            this._parent.style.top = (direction === UTIL.SWITCHES.NEXT ? startingPoint - 100 : startingPoint + 100) + "vh";
                        }
                        
                        step = 1;
                        i = 1;
                        animateSlideOffScreen(true);
                    }
                }
            }, 20);
        };

        if (this._slideshowStyle === UTIL.SLIDESHOW_TYPE.SEPARATE) {
            animateSlideOffScreen();
        } else {
            animateScroll();
        }
        
    }

    #setAutomatedSwitch() {
        clearTimeout(this._timer);
        if (!this.isEnding() || (this._isLoop && this.isEnding())) {
            const currentSlideElement = this._parent.children[this.#currentSlide];
            const time = currentSlideElement.dataset.switchAfter || this._automatedSwitchBetweenSlides;
            const timeNumber = parseInt(time);
            if (Number.isNaN(timeNumber) || timeNumber <= 0) {
                return;
            }
            this._timer = setTimeout(() => {
                this.nextSlide();
            }, timeNumber * 1000);
        }
    }

    previousSlide() {
        if (this.#currentSlide > 0) {
            this.#scrollSlide(UTIL.SWITCHES.PREVIOUS);
            this.#currentSlide--;
            this.#setAutomatedSwitch();
        }
    }

    nextSlide() {
        if (this.#currentSlide + 1 < this._slidesCount) {
            this.#scrollSlide(UTIL.SWITCHES.NEXT);
            this.#currentSlide++;
            this.#setAutomatedSwitch();
        }
    }

    get slidesDirection() {
        return this._slidesDirection;
    }

    isBeginning() {
        return this.#currentSlide === 0;
    }

    isEnding() {
        return this.#currentSlide + 1 === this._slidesCount;
    }
}